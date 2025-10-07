/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/

import React, { useState, useEffect } from 'react';
import { XIcon, TwitterIcon, PinterestIcon, FacebookIcon, ClipboardIcon, CheckIcon, PoshmarkIcon, EbayIcon } from './icons';

interface ShareModalProps {
    isOpen: boolean;
    onClose: () => void;
    imageSrc: string | null;
    title: string;
    description: string;
}

const CopyButton: React.FC<{ textToCopy: string, children: React.ReactNode }> = ({ textToCopy, children }) => {
    const [copied, setCopied] = useState(false);

    useEffect(() => {
        if (copied) {
            const timer = setTimeout(() => setCopied(false), 2000);
            return () => clearTimeout(timer);
        }
    }, [copied]);

    const handleCopy = () => {
        const plainText = textToCopy.replace(/\*\*/g, '').replace(/^- /gm, '');
        navigator.clipboard.writeText(plainText);
        setCopied(true);
    };

    return (
        <button
            onClick={handleCopy}
            className="w-full flex items-center justify-center gap-2 text-center bg-rose-100/80 border border-rose-200/80 text-rose-800 font-semibold py-3 px-4 rounded-lg transition-all duration-200 ease-in-out hover:bg-rose-200/80 active:scale-95 text-sm"
        >
            {copied ? (
                <>
                    <CheckIcon className="w-5 h-5 text-green-600" />
                    Copied!
                </>
            ) : (
                children
            )}
        </button>
    );
};

const ShareModal: React.FC<ShareModalProps> = ({ isOpen, onClose, imageSrc, title, description }) => {
    if (!isOpen) return null;

    const fullText = `${title}\n\n${description}`;
    const encodedTitle = encodeURIComponent(title);

    const twitterUrl = `https://twitter.com/intent/tweet?text=${encodedTitle}`;
    // Pinterest requires an image URL which we don't have. We link them to the upload page.
    const pinterestUrl = `https://www.pinterest.com/pin-creation-tool/`;
    const ebayUrl = `https://www.ebay.com/sl/prelist/suggest?title=${encodedTitle}`;
    

    return (
        <div 
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4 animate-fade-in"
            onClick={onClose}
        >
            <div 
                className="relative bg-white w-full max-w-2xl rounded-2xl shadow-2xl p-8 flex flex-col md:flex-row gap-8"
                onClick={(e) => e.stopPropagation()}
            >
                <button 
                    onClick={onClose}
                    className="absolute top-4 right-4 text-gray-400 hover:text-gray-600"
                    aria-label="Close"
                >
                    <XIcon className="w-6 h-6" />
                </button>

                <div className="w-full md:w-1/2 flex flex-col items-center gap-4">
                    <h2 className="text-2xl font-bold text-rose-900 font-display text-center">Share Listing</h2>
                    {imageSrc && (
                        <div className="w-full aspect-square rounded-lg overflow-hidden shadow-lg">
                            <img src={imageSrc} alt={title} className="w-full h-full object-contain bg-rose-50/50" />
                        </div>
                    )}
                </div>

                <div className="w-full md:w-1/2 flex flex-col justify-center gap-3">
                    <a 
                        href={twitterUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-full flex items-center justify-center gap-3 text-center bg-[#1DA1F2] text-white font-bold py-3 px-4 rounded-lg transition-opacity hover:opacity-90"
                    >
                        <TwitterIcon className="w-5 h-5" />
                        Share on X
                    </a>
                    <a 
                        href={pinterestUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-full flex items-center justify-center gap-3 text-center bg-[#E60023] text-white font-bold py-3 px-4 rounded-lg transition-opacity hover:opacity-90"
                    >
                        <PinterestIcon className="w-5 h-5" />
                        Pin on Pinterest
                    </a>
                    
                    <div className="flex items-center gap-2 my-1">
                        <hr className="flex-grow border-t border-rose-200" />
                        <span className="text-xs text-rose-600 font-semibold">MARKETPLACES</span>
                        <hr className="flex-grow border-t border-rose-200" />
                    </div>

                    <a href={ebayUrl} target="_blank" rel="noopener noreferrer" className="w-full flex items-center justify-center gap-3 text-center bg-white border border-gray-300 text-gray-800 font-bold py-3 px-4 rounded-lg transition-colors hover:bg-gray-50">
                        <span>List on</span>
                        <EbayIcon className="h-5" />
                    </a>
                    <CopyButton textToCopy={fullText}>
                        <PoshmarkIcon className="w-5 h-5 text-[#DE2121]" />
                        Copy for Poshmark
                    </CopyButton>

                    <hr className="border-t border-rose-200 my-1" />

                    <CopyButton textToCopy={fullText}>
                        <FacebookIcon className="w-5 h-5 text-[#1877F2]" />
                        Copy for Facebook
                    </CopyButton>
                    <CopyButton textToCopy={fullText}>
                        <ClipboardIcon className="w-5 h-5" />
                        Copy All Text
                    </CopyButton>
                    <p className="text-xs text-rose-500 text-center mt-1">
                        For marketplaces and social media, copy the text and upload the downloaded image.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default ShareModal;