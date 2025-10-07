/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/
import React from 'react';
import { MoneyIcon, GalleryIcon } from './icons';

interface HeaderProps {
    onViewGallery: () => void;
}

const Header: React.FC<HeaderProps> = ({ onViewGallery }) => {
  return (
    <header className="w-full py-4 px-4 sm:px-8 border-b border-rose-200/80 bg-white/60 backdrop-blur-md sticky top-0 z-50">
      <div className="flex items-center justify-between">
          <div className="flex items-center justify-center gap-3">
              <MoneyIcon className="w-6 h-6 text-pink-500" />
              <h1 className="text-xl font-bold tracking-tight text-rose-900 font-display">
                Photo to Profit
              </h1>
          </div>
          
          <button 
            onClick={onViewGallery}
            className="flex items-center justify-center text-center bg-white/80 border border-rose-200/80 text-rose-800 font-semibold py-2 px-4 rounded-md transition-all duration-200 ease-in-out hover:bg-rose-50 hover:border-rose-300 active:scale-95 text-sm"
            aria-label="View My Gallery"
          >
              <GalleryIcon className="w-4 h-4 sm:mr-2" />
              <span className="hidden sm:inline">My Gallery</span>
          </button>
      </div>
    </header>
  );
};

export default Header;