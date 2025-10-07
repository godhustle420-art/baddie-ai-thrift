/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/

import React from 'react';
import { SavedProduct } from '../App';
import { TrashIcon } from './icons';

interface GalleryItemProps {
    product: SavedProduct;
    onSelect: (product: SavedProduct) => void;
    onDelete: (productId: string) => void;
}

const GalleryItem: React.FC<GalleryItemProps> = ({ product, onSelect, onDelete }) => {
    
    const handleDeleteClick = (e: React.MouseEvent) => {
        e.stopPropagation(); // Prevent onSelect from firing when delete is clicked
        if (window.confirm("Are you sure you want to delete this listing?")) {
            onDelete(product.id);
        }
    };

    return (
        <div 
            className="group relative cursor-pointer bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300 ease-in-out flex flex-col"
            onClick={() => onSelect(product)}
        >
            <div className="aspect-square w-full overflow-hidden">
                <img 
                    src={product.imageDataUrl} 
                    alt={product.insights.title}
                    className="w-full h-full object-cover transition-transform duration-300 ease-in-out group-hover:scale-105"
                />
            </div>
            <div className="p-4 flex-grow">
                <h3 className="font-bold text-rose-900 text-base leading-tight truncate group-hover:text-pink-600 transition-colors">
                    {product.insights.title}
                </h3>
            </div>
             <button 
                onClick={handleDeleteClick}
                className="absolute top-2 right-2 bg-black/40 p-2 rounded-full text-white opacity-0 group-hover:opacity-100 transition-opacity duration-200 hover:bg-red-500"
                aria-label="Delete listing"
             >
                <TrashIcon className="w-4 h-4" />
            </button>
        </div>
    );
};

export default GalleryItem;
