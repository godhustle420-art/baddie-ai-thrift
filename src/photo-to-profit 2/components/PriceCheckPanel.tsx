/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/

import React, { useState, useEffect } from 'react';
import { ClipboardIcon, CheckIcon, SparkleIcon, LinkIcon } from './icons';
import Spinner from './Spinner';
import { ProductInsights } from '../services/geminiService';

interface ListingHelperPanelProps {
  insights: ProductInsights | null;
  isLoading: boolean;
  error: string | null;
  onRefine: (condition: 'New' | 'Used', userProvidedInfo: string) => void;
  userProvidedInfo: string;
  onUserProvidedInfoChange: (value: string) => void;
}

type Condition = 'New' | 'Used';

const CopyToClipboardButton: React.FC<{ textToCopy: string }> = ({ textToCopy }) => {
    const [copied, setCopied] = useState(false);

    useEffect(() => {
        if (copied) {
            const timer = setTimeout(() => setCopied(false), 2000);
            return () => clearTimeout(timer);
        }
    }, [copied]);

    const handleCopy = () => {
        // This regex removes markdown for bolding (**) and list items (-) for a clean copy.
        const plainText = textToCopy.replace(/\*\*/g, '').replace(/^- /gm, '');
        navigator.clipboard.writeText(plainText);
        setCopied(true);
    };

    return (
        <button
            onClick={handleCopy}
            className="absolute top-2 right-2 p-2 bg-rose-100/80 hover:bg-rose-200 rounded-md transition-colors"
            aria-label="Copy to clipboard"
        >
            {copied ? <CheckIcon className="w-4 h-4 text-green-600" /> : <ClipboardIcon className="w-4 h-4 text-rose-700" />}
        </button>
    );
};

const FormattedDescription: React.FC<{ description: string }> = ({ description }) => {
    const lines = description.split('\n');
    const htmlBlocks: string[] = [];
    let currentList: string[] = [];
    let currentBlockquote: string[] = [];

    const flushList = () => {
        if (currentList.length > 0) {
            htmlBlocks.push(`<ul>${currentList.join('')}</ul>`);
            currentList = [];
        }
    };

    const flushBlockquote = () => {
        if (currentBlockquote.length > 0) {
            htmlBlocks.push(`<blockquote>${currentBlockquote.join('')}</blockquote>`);
            currentBlockquote = [];
        }
    };

    lines.forEach(line => {
        // Apply inline formatting first for bold and strikethrough
        const inlineFormatted = line
            .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
            .replace(/\~\~(.*?)\~\~/g, '<s>$1</s>');

        const trimmedLine = inlineFormatted.trim();
        
        if (trimmedLine.startsWith('- ')) {
            flushBlockquote(); // End blockquote if we start a list
            currentList.push(`<li>${trimmedLine.substring(2)}</li>`);
        } else if (trimmedLine.startsWith('> ')) {
            flushList(); // End list if we start a blockquote
            currentBlockquote.push(`<p>${trimmedLine.substring(2)}</p>`);
        } else if (trimmedLine) {
            flushList();
            flushBlockquote();
            htmlBlocks.push(`<p>${inlineFormatted}</p>`);
        } else {
            // An empty line flushes any open blocks, creating a paragraph break
            flushList();
            flushBlockquote();
        }
    });

    // Flush any remaining blocks at the end of the description
    flushList();
    flushBlockquote();

    const finalHtml = htmlBlocks.join('');

    return (
      <div 
        className="prose prose-sm max-w-none text-rose-900" 
        dangerouslySetInnerHTML={{ __html: finalHtml }} 
      />
    );
};


const ListingHelperPanel: React.FC<ListingHelperPanelProps> = ({ insights, isLoading, error, onRefine, userProvidedInfo, onUserProvidedInfoChange }) => {
    const [condition, setCondition] = useState<Condition>('Used');

    const handleConditionChange = (newCondition: Condition) => {
        if (newCondition !== condition) {
            setCondition(newCondition);
            onRefine(newCondition, userProvidedInfo);
        }
    };

    const handleRefineClick = () => {
        onRefine(condition, userProvidedInfo);
    };


    if (isLoading && !insights) { // Show big spinner only on initial load
        return (
            <div className="w-full bg-white/80 border border-rose-200/80 rounded-lg p-6 flex flex-col items-center justify-center gap-4 animate-fade-in backdrop-blur-md shadow-lg min-h-[400px]">
                <Spinner />
                <p className="text-rose-700 text-center">Generating listing details...</p>
            </div>
        );
    }
    
    if (error) {
         return (
            <div className="w-full bg-red-500/10 border border-red-500/20 rounded-lg p-6 flex flex-col items-center justify-center gap-4 animate-fade-in backdrop-blur-md shadow-lg min-h-[400px]">
                <h3 className="text-xl font-bold text-center text-red-800">Couldn't Generate Details</h3>
                <p className="text-sm text-center text-red-700">{error}</p>
            </div>
        );
    }

    if (!insights) {
        return null; // Don't render if there are no insights and it's not loading/error
    }

    return (
        <div className="w-full bg-white/80 border border-rose-200/80 rounded-lg p-6 flex flex-col gap-6 animate-fade-in backdrop-blur-md shadow-lg relative">
             {isLoading && (
                <div className="absolute inset-0 bg-white/70 backdrop-blur-sm z-10 flex items-center justify-center animate-fade-in">
                    <Spinner />
                </div>
            )}
            <div>
                <div className="flex items-center justify-center gap-2 mb-4">
                     <SparkleIcon className="w-6 h-6 text-pink-500" />
                     <h3 className="text-xl font-bold text-center text-rose-900">AI Listing Helper</h3>
                </div>
                
                <div className="flex flex-col gap-5">
                    <div>
                        <label className="block text-sm font-bold text-rose-800 mb-2 font-display">Item Condition</label>
                        <div className="flex w-full bg-rose-100/80 p-1 rounded-md">
                            <button onClick={() => handleConditionChange('Used')} className={`w-1/2 py-2 text-sm font-bold rounded ${condition === 'Used' ? 'bg-white shadow-sm text-rose-800' : 'text-rose-600'}`}>
                                Used
                            </button>
                            <button onClick={() => handleConditionChange('New')} className={`w-1/2 py-2 text-sm font-bold rounded ${condition === 'New' ? 'bg-white shadow-sm text-rose-800' : 'text-rose-600'}`}>
                                New
                            </button>
                        </div>
                    </div>

                    <div>
                        <label className="block text-sm font-bold text-rose-800 mb-1 font-display">Refine Identification (Optional)</label>
                        <p className="text-xs text-rose-600/80 mb-2">Provide a name, model, or any details to improve the search.</p>
                        <textarea
                            value={userProvidedInfo}
                            onChange={(e) => onUserProvidedInfoChange(e.target.value)}
                            placeholder="e.g., 'Craftsman LT1000 riding mower, 18hp engine'"
                            className="w-full bg-rose-50 border border-rose-200 text-rose-900 rounded-md p-3 text-sm focus:ring-2 focus:ring-pink-400 focus:outline-none transition placeholder:text-rose-400"
                            rows={2}
                        />
                        <button
                            onClick={handleRefineClick}
                            disabled={isLoading || !userProvidedInfo.trim()}
                            className="w-full mt-2 text-center bg-rose-200/50 border border-rose-300/80 text-rose-800 font-semibold py-2 px-4 rounded-lg transition-all duration-200 ease-in-out hover:bg-rose-200/80 hover:border-rose-300 active:scale-95 text-sm disabled:opacity-50 disabled:cursor-not-allowed"
                        >
                            Refine Search
                        </button>
                    </div>
                    
                    <hr className="border-t border-rose-200" />
                    
                    <div>
                        <label className="block text-sm font-bold text-rose-800 mb-1 font-display">Suggested Title</label>
                        <div className="relative">
                            <p className="w-full bg-rose-50 border border-rose-200 text-rose-900 rounded-md p-3 pr-12 text-base">
                                {insights.title}
                            </p>
                            <CopyToClipboardButton textToCopy={insights.title} />
                        </div>
                    </div>
                    
                    <div>
                        <label className="block text-sm font-bold text-rose-800 mb-1 font-display">Suggested Description</label>
                         <div className="relative">
                            <div className="w-full bg-rose-50 border border-rose-200 text-rose-900 rounded-md p-3 pr-12 text-base min-h-[8rem]">
                               <FormattedDescription description={insights.description} />
                            </div>
                            <CopyToClipboardButton textToCopy={insights.description} />
                        </div>
                    </div>
                    
                     <div>
                        <label className="block text-sm font-bold text-rose-800 mb-2 font-display">Pricing Guidance</label>
                        <div className="bg-rose-50 border border-rose-200 rounded-md p-3 space-y-3">
                           <div className="flex justify-between items-center">
                                <span className="text-sm text-rose-700">Recommended Price</span>
                                <span className="font-bold text-rose-900 text-lg">{insights.pricingGuidance.recommendedPrice}</span>
                           </div>
                           <p className="text-xs text-rose-600/80 pt-2 border-t border-rose-200">{insights.pricingGuidance.priceRationale}</p>
                        </div>
                    </div>

                    {insights.similarListing?.url && (
                        <div>
                           <label className="block text-sm font-bold text-rose-800 mb-1 font-display">Similar Listing Found</label>
                           <a href={insights.similarListing.url} target="_blank" rel="noopener noreferrer" className="w-full flex items-center gap-2 bg-rose-50 border border-rose-200 text-pink-700 rounded-md p-3 text-sm font-semibold hover:bg-rose-100 hover:border-rose-300 transition-colors">
                              <LinkIcon className="w-4 h-4 flex-shrink-0" />
                              <span className="truncate">{insights.similarListing.title || 'View similar product listing'}</span>
                           </a>
                        </div>
                    )}
                    
                    {insights.groundingChunks && insights.groundingChunks.length > 0 && (
                        <div>
                           <label className="block text-sm font-bold text-rose-800 mb-1 font-display">Sources</label>
                           <div className="space-y-1">
                            {insights.groundingChunks.map((chunk, index) => (
                                <a 
                                    key={index} 
                                    href={chunk.web.uri} 
                                    target="_blank" 
                                    rel="noopener noreferrer"
                                    className="text-xs text-rose-600 hover:text-pink-600 underline truncate block"
                                    title={chunk.web.title || chunk.web.uri}
                                >
                                    {chunk.web.title || chunk.web.uri}
                                </a>
                            ))}
                           </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default ListingHelperPanel;