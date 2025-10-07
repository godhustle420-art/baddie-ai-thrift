/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/


import React, { useState, useCallback, useEffect } from 'react';
import { generateBackground, generateStagedImage, generateProductInsights, ProductInsights } from './services/geminiService';
import Header from './components/Header';
import Spinner from './components/Spinner';
import BackgroundPanel from './components/AdjustmentPanel';
import ListingHelperPanel from './components/PriceCheckPanel';
// FIX: Import SparkleIcon
import { UndoIcon, RedoIcon, EyeIcon, SaveIcon, ShareIcon, MagicWandIcon, PaletteIcon, SparkleIcon, RotateCwIcon } from './components/icons';
import StartScreen from './components/StartScreen';
import GalleryView from './components/GalleryView';
import ShareModal from './components/ShareModal';
import ErrorDisplay from './components/ErrorDisplay';

// Helper to convert a data URL string to a File object
const dataURLtoFile = (dataurl: string, filename: string): File => {
    const arr = dataurl.split(',');
    if (arr.length < 2) throw new Error("Invalid data URL");
    const mimeMatch = arr[0].match(/:(.*?);/);
    if (!mimeMatch || !mimeMatch[1]) throw new Error("Could not parse MIME type from data URL");

    const mime = mimeMatch[1];
    const bstr = atob(arr[1]);
    let n = bstr.length;
    const u8arr = new Uint8Array(n);
    while(n--){
        u8arr[n] = bstr.charCodeAt(n);
    }
    return new File([u8arr], filename, {type:mime});
}

const fileToDataURL = (file: File): Promise<string> => {
    return new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.onload = () => resolve(reader.result as string);
        reader.onerror = reject;
        reader.readAsDataURL(file);
    });
};

export interface SavedProduct {
  id: string;
  imageDataUrl: string;
  originalImageDataUrl: string;
  insights: ProductInsights;
}

const App: React.FC = () => {
  const [history, setHistory] = useState<File[]>([]);
  const [historyIndex, setHistoryIndex] = useState<number>(-1);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [loadingMessage, setLoadingMessage] = useState<string>('');
  const [error, setError] = useState<string | null>(null);
  
  const [trueOriginalImage, setTrueOriginalImage] = useState<File | null>(null);
  
  const [productInsights, setProductInsights] = useState<ProductInsights | null>(null);
  const [insightsIsLoading, setInsightsIsLoading] = useState<boolean>(false);
  const [insightsError, setInsightsError] = useState<string | null>(null);
  const [userProvidedInfo, setUserProvidedInfo] = useState<string>('');
  
  // App navigation state
  const [mainView, setMainView] = useState<'start' | 'editing' | 'gallery'>('start');
  const [isListingGenerated, setIsListingGenerated] = useState<boolean>(false);
  const [isEditingBackground, setIsEditingBackground] = useState<boolean>(false);

  // Gallery State
  const [gallery, setGallery] = useState<SavedProduct[]>([]);
  const [loadedProductId, setLoadedProductId] = useState<string | null>(null);
  const [toastMessage, setToastMessage] = useState<string | null>(null);
  
  // Share Modal State
  const [isShareModalOpen, setIsShareModalOpen] = useState(false);


  const currentImage = history[historyIndex] ?? null;

  const [currentImageUrl, setCurrentImageUrl] = useState<string | null>(null);

  // Load gallery from localStorage on initial mount
  useEffect(() => {
    try {
        const savedGallery = localStorage.getItem('productGallery');
        if (savedGallery) {
            setGallery(JSON.parse(savedGallery));
        }
    } catch (e) {
        console.error("Failed to load gallery from local storage", e);
    }
  }, []);

  // Save gallery to localStorage whenever it changes
  useEffect(() => {
    try {
        localStorage.setItem('productGallery', JSON.stringify(gallery));
    } catch (e) {
        console.error("Failed to save gallery to local storage", e);
    }
  }, [gallery]);


  useEffect(() => {
    if (currentImage) {
      const url = URL.createObjectURL(currentImage);
      setCurrentImageUrl(url);
      return () => URL.revokeObjectURL(url);
    } else {
      setCurrentImageUrl(null);
    }
  }, [currentImage]);
  
  const canUndo = historyIndex > 0;
  
  const clearTransientState = () => {
    setError(null);
    setInsightsError(null);
  };
  
  const showToast = (message: string) => {
    setToastMessage(message);
    setTimeout(() => setToastMessage(null), 3000);
  };

  const addImageToHistory = useCallback((newImageFile: File) => {
    const newHistory = history.slice(0, historyIndex + 1);
    newHistory.push(newImageFile);
    setHistory(newHistory);
    setHistoryIndex(newHistory.length - 1);
    clearTransientState();
  }, [history, historyIndex]);
  
  const handleImageUpload = useCallback(async (file: File) => {
    try {
        clearTransientState();
        setProductInsights(null);
        setHistory([file]);
        setHistoryIndex(0);
        setTrueOriginalImage(file);
        setLoadedProductId(null);
        setUserProvidedInfo('');
        setIsListingGenerated(false);
        setIsEditing