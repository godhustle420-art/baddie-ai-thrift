/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/

import React from 'react';
import { SavedProduct } from '../App';
import GalleryItem from './GalleryItem';
import { UploadIcon } from './icons';

interface GalleryViewProps {
    gallery: SavedProduct[];
    onSelect: (product: SavedProduct) => void;
    onDelete: (productId: string) => void;
    onNew: () => void;
}

const GalleryView: React.FC<GalleryViewProps> = ({ gallery, onSelect, onDelete, onNew }) => {
    return (
        <div className="w-full max-w-7xl mx-auto animate-fade-in">
            <div className="flex flex-col sm:flex-row justify-between items-center mb-8 gap-4">
                <h1 className="text-4xl font-extrabold text-rose-900">My Gallery</h1>
                <button 
                    onClick={onNew}
                    className="inline-flex items-center justify-center px-6 py-3 font-bold text-white bg-gradient-to-br from-pink-600 to-rose-500 rounded-lg cursor-pointer group hover:from-pink-500 hover:to-rose-400 transition-all shadow-lg hover:shadow-xl shadow-pink-500/30"
                >
                    <UploadIcon className="w-5 h-5 mr-2" />
                    Create New Listing
                </button>
            </div>
            
            {gallery.length > 0 ? (
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
                    {gallery.map(product => (
                        <GalleryItem 
                            key={product.id}
                            product={product}
                            onSelect={onSelect}
                            onDelete={onDelete}
                        />
                    ))}
                </div>
            ) : (
                <div className="text-center py-20 px-8 bg-white/60 border border-rose-200/50 rounded-lg shadow-inner">
                    <h2 className="text-2xl font-bold text-rose-800">Your Gallery is Empty</h2>
                    <p className="mt-2 text-rose-700/80 max-w-md mx-auto">
                        Once you create and save a product listing, it will appear here for you to view, edit, or delete later.
                    </p>
                    <button 
                        onClick={onNew}
                        className="mt-6 inline-flex items-center justify-center px-8 py-4 text-lg font-bold text-white bg-gradient-to-br from-pink-600 to-rose-500 rounded-lg cursor-pointer group hover:from-pink-500 hover:to-rose-400 transition-all shadow-lg hover:shadow-xl shadow-pink-500/30"
                    >
                         <UploadIcon className="w-6 h-6 mr-3 transition-transform duration-500 ease-in-out group-hover:-translate-y-1" />
                        Create Your First Listing
                    </button>
                </div>
            )}
        </div>
    );
};

export default GalleryView;
