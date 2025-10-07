/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/

import React, { useState } from 'react';
import { UploadIcon, PhotoIcon, SparkleIcon, PaletteIcon, GalleryIcon } from './icons';

interface StartScreenProps {
  onFileSelect: (files: FileList | null) => void;
  onViewGallery: () => void;
  galleryItemCount: number;
}

const StartScreen: React.FC<StartScreenProps> = ({ onFileSelect, onViewGallery, galleryItemCount }) => {
  const [isDraggingOver, setIsDraggingOver] = useState(false);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onFileSelect(e.target.files);
  };

  return (
    <div 
      className={`w-full max-w-4xl mx-auto text-center p-8 transition-all duration-300 rounded-2xl border-2 ${isDraggingOver ? 'bg-pink-500/10 border-dashed border-pink-400' : 'border-transparent'}`}
      onDragOver={(e) => { e.preventDefault(); setIsDraggingOver(true); }}
      onDragLeave={() => setIsDraggingOver(false)}
      onDrop={(e) => {
        e.preventDefault();
        setIsDraggingOver(false);
        onFileSelect(e.dataTransfer.files);
      }}
    >
      <div className="flex flex-col items-center gap-6 animate-fade-in">
        <h1 className="text-5xl font-extrabold tracking-tight text-rose-900 sm:text-6xl">
          From Photo to Payout, <span className="text-pink-600">Instantly.</span>
        </h1>
        <p className="max-w-3xl text-lg text-rose-700/90 md:text-xl">
         Upload a picture, and our AI will create a professional product photo, write a compelling title and description, and even suggest a price.
        </p>

        <div className="mt-6 flex flex-col sm:flex-row items-center justify-center gap-4">
            <label htmlFor="image-upload-start" className="relative inline-flex items-center justify-center px-8 py-4 text-lg font-bold text-white bg-gradient-to-br from-pink-600 to-rose-500 rounded-lg cursor-pointer group hover:from-pink-500 hover:to-rose-400 transition-all shadow-lg hover:shadow-xl shadow-pink-500/30">
                <UploadIcon className="w-6 h-6 mr-3 transition-transform duration-500 ease-in-out group-hover:-translate-y-1" />
                Upload an Image
            </label>
            <input id="image-upload-start" type="file" className="hidden" accept="image/*" onChange={handleFileChange} />
            
            {galleryItemCount > 0 && (
                 <button 
                    onClick={onViewGallery}
                    className="inline-flex items-center justify-center px-8 py-4 text-lg font-bold text-rose-800 bg-white/80 border border-rose-200/80 rounded-lg cursor-pointer group hover:bg-rose-50 hover:border-rose-300 transition-all shadow-md"
                >
                    <GalleryIcon className="w-6 h-6 mr-3" />
                    View My Gallery
                </button>
            )}

        </div>
        <p className="text-sm text-rose-500 mt-2 sm:hidden">or drag and drop a file</p>

        <div className="mt-16 w-full">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                 <div className="bg-white/50 p-6 rounded-lg border border-rose-200/50 flex flex-col items-center text-center shadow-md">
                    <div className="flex items-center justify-center w-12 h-12 bg-rose-100 rounded-full mb-4">
                       <SparkleIcon className="w-6 h-6 text-pink-600" />
                    </div>
                    <h3 className="text-xl font-bold text-rose-900">AI Listing Helper</h3>
                    <p className="mt-2 text-rose-700/90">Instantly get a title, description, and price for your item. Sell smarter, not harder.</p>
                </div>
                <div className="bg-white/50 p-6 rounded-lg border border-rose-200/50 flex flex-col items-center text-center shadow-md">
                    <div className="flex items-center justify-center w-12 h-12 bg-rose-100 rounded-full mb-4">
                       <PhotoIcon className="w-6 h-6 text-pink-600" />
                    </div>
                    <h3 className="text-xl font-bold text-rose-900">Flawless Backgrounds</h3>
                    <p className="mt-2 text-rose-700/90">Automatically remove busy backgrounds to put the focus squarely on your product.</p>
                </div>
                <div className="bg-white/50 p-6 rounded-lg border border-rose-200/50 flex flex-col items-center text-center shadow-md">
                    <div className="flex items-center justify-center w-12 h-12 bg-rose-100 rounded-full mb-4">
                       <PaletteIcon className="w-6 h-6 text-pink-600" />
                    </div>
                    <h3 className="text-xl font-bold text-rose-900">Professional Scenes</h3>
                    <p className="mt-2 text-rose-700/90">Place your product on a clean white background or any scene you can imagine.</p>
                </div>
            </div>
        </div>

      </div>
    </div>
  );
};

export default StartScreen;