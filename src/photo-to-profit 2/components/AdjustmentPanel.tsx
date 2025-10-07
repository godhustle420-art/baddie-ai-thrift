/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/

import React, { useState, useEffect } from 'react';

interface BackgroundPanelProps {
  onApplyBackground: (prompt: string) => void;
  isLoading: boolean;
  onBackToListing: () => void;
}

const BackgroundPanel: React.FC<BackgroundPanelProps> = ({ onApplyBackground, isLoading, onBackToListing }) => {
  const [customPrompt, setCustomPrompt] = useState('');
  const [selectedPreset, setSelectedPreset] = useState('');

  const presets = [
    { name: 'Select a Preset...', prompt: ''},
    { name: 'White Background', prompt: 'a solid professional white background' },
    { name: 'Black Background', prompt: 'a solid professional black background' },
    { name: 'Gray Background', prompt: 'a solid professional gray background' },
    { name: 'Pink Background', prompt: 'a solid professional light pink background' },
    { name: 'Light Blue Background', prompt: 'a solid professional light blue background' },
    { name: 'Studio Gradient', prompt: 'a professional photography studio gradient background' },
    { name: 'Wooden Table', prompt: 'a clean wooden tabletop surface as the background' },
    { name: 'Marble Surface', prompt: 'a clean white marble surface as the background' },
  ];

  useEffect(() => {
    if (selectedPreset) {
      onApplyBackground(`Place the subject on ${selectedPreset}, ensuring the lighting on the subject matches the new background.`);
      setSelectedPreset(''); // Reset dropdown after applying
    }
  }, [selectedPreset, onApplyBackground]);

  const handleCustomSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (customPrompt.trim()) {
      onApplyBackground(`Place the subject in this scene: '${customPrompt}'. Ensure the lighting on the subject matches the new background.`);
    }
  };

  return (
    <div className="w-full bg-white/80 border border-rose-200/80 rounded-lg p-6 flex flex-col gap-4 animate-fade-in backdrop-blur-md shadow-lg">
      <button 
        onClick={onBackToListing}
        className="text-sm text-rose-700 hover:text-pink-600 font-semibold self-start -ml-2 p-2 flex items-center group"
        aria-label="Back to listing helper"
      >
        <span className="transition-transform duration-200 group-hover:-translate-x-1">&larr;</span>&nbsp;Back to Listing Helper
      </button>

      <div>
        <h3 className="text-xl font-bold text-center text-rose-900 mb-1">Change Background</h3>
        <p className="text-sm text-center text-rose-700/80 mb-4">
            Pick a preset or describe a new scene.
        </p>
        
        <div className="flex flex-col gap-4">
          <div className="relative">
             <select
              value={selectedPreset}
              onChange={(e) => setSelectedPreset(e.target.value)}
              disabled={isLoading}
              className="w-full appearance-none bg-rose-50 border border-rose-200 text-rose-800 font-semibold py-3 px-4 rounded-md transition-all duration-200 ease-in-out hover:bg-rose-100 hover:border-rose-300 focus:ring-2 focus:ring-pink-400 focus:outline-none cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {presets.map(p => <option key={p.name} value={p.prompt}>{p.name}</option>)}
            </select>
            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-rose-700">
                <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <hr className="flex-grow border-t border-rose-200" />
            <span className="text-sm text-rose-600">OR</span>
            <hr className="flex-grow border-t border-rose-200" />
          </div>

         <form onSubmit={handleCustomSubmit} className="w-full flex items-center gap-2">
            <input
                type="text"
                value={customPrompt}
                onChange={(e) => setCustomPrompt(e.target.value)}
                placeholder="Describe a new background..."
                className="flex-grow bg-rose-50 border border-rose-200 text-rose-800 rounded-lg p-3 focus:ring-2 focus:ring-pink-400 focus:outline-none transition w-full disabled:cursor-not-allowed disabled:opacity-60 placeholder:text-rose-400"
                disabled={isLoading}
            />
            <button
                type="submit"
                className="bg-gradient-to-br from-pink-600 to-rose-500 text-white font-bold py-3 px-5 rounded-lg transition-all duration-300 ease-in-out shadow-lg shadow-pink-500/20 hover:shadow-xl active:scale-95 disabled:from-pink-400 disabled:to-rose-300 disabled:shadow-none disabled:cursor-not-allowed"
                disabled={isLoading || !customPrompt.trim()}
            >
                Generate
            </button>
        </form>
        </div>
      </div>
    </div>
  );
};

export default BackgroundPanel;