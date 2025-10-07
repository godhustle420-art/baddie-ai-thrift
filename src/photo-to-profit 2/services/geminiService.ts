/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/

import { GoogleGenAI, GenerateContentResponse } from "@google/genai";

interface PricingGuidance {
    recommendedPrice: string;
    priceRationale: string;
}

interface SimilarListing {
    title: string;
    url: string;
}

// See https://ai.google.dev/api/rest/v1beta/GroundingChunk
interface GroundingChunk {
    web: {
        uri: string;
        title: string;
    }
}

export interface ProductInsights {
    title: string;
    description: string;
    pricingGuidance: PricingGuidance;
    similarListing: SimilarListing | null;
    groundingChunks: GroundingChunk[];
    userProvidedInfo?: string;
}

// Helper function to convert a File object to a Gemini API Part
const fileToPart = async (file: File): Promise<{ inlineData: { mimeType: string; data: string; } }> => {
    const dataUrl = await new Promise<string>((resolve, reject) => {
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = () => resolve(reader.result as string);
        reader.onerror = error => reject(error);
    });
    
    const arr = dataUrl.split(',');
    if (arr.length < 2) throw new Error("Invalid data URL");
    const mimeMatch = arr[0].match(/:(.*?);/);
    if (!mimeMatch || !mimeMatch[1]) throw new Error("Could not parse MIME type from data URL");
    
    const mimeType = mimeMatch[1];
    const data = arr[1];
    return { inlineData: { mimeType, data } };
};

const handleApiResponse = (
    response: GenerateContentResponse,
    context: string // e.g., "background removal", "background replacement"
): string => {
    // 1. Check for prompt blocking first
    if (response.promptFeedback?.blockReason) {
        const { blockReason, blockReasonMessage } = response.promptFeedback;
        const errorMessage = `Request was blocked. Reason: ${blockReason}. ${blockReasonMessage || ''}`;
        console.error(errorMessage, { response });
        throw new Error(errorMessage);
    }

    // 2. Try to find the image part
    const imagePartFromResponse = response.candidates?.[0]?.content?.parts?.find(part => part.inlineData);

    if (imagePartFromResponse?.inlineData) {
        const { mimeType, data } = imagePartFromResponse.inlineData;
        console.log(`Received image data (${mimeType}) for ${context}`);
        return `data:${mimeType};base64,${data}`;
    }

    // 3. If no image, check for other reasons
    const finishReason = response.candidates?.[0]?.finishReason;
    if (finishReason && finishReason !== 'STOP') {
        const errorMessage = `Image generation for ${context} stopped unexpectedly. Reason: ${finishReason}. This often relates to safety settings.`;
        console.error(errorMessage, { response });
        throw new Error(errorMessage);
    }
    
    const textFeedback = response.text?.trim();
    const errorMessage = `The AI model did not return an image for the ${context}. ` + 
        (textFeedback 
            ? `The model responded with text: "${textFeedback}"`
            : "This can happen due to safety filters or if the request is too complex. Please try rephrasing your prompt to be more direct.");

    console.error(`Model response did not contain an image part for ${context}.`, { response });
    throw new Error(errorMessage);
};

/**
 * Generates an image with the background removed and replaced with a neutral grey.
 * @param originalImage The original image file.
 * @returns A promise that resolves to the data URL of the professionally staged image.
 */
export const generateStagedImage = async (
    originalImage: File,
): Promise<string> => {
    console.log(`Starting professional image staging.`);
    const ai = new GoogleGenAI({ apiKey: process.env.API_KEY! });
    
    const originalImagePart = await fileToPart(originalImage);
    const prompt = `You are an expert photo editor AI. Your task is to perfectly remove the background from this image. 
Leave only the main subject, perfectly cut out, and place it on a neutral, professional light grey background.
Ensure the lighting on the subject looks natural against the new background.

Output: Return ONLY the final image as a PNG file. Do not return text.`;
    const textPart = { text: prompt };

    console.log('Sending image for staging...');
    const response: GenerateContentResponse = await ai.models.generateContent({
        model: 'gemini-2.5-flash-image',
        contents: { parts: [originalImagePart, textPart] },
    });
    console.log('Received response from model for image staging.', response);
    
    return handleApiResponse(response, 'image staging');
};


/**
 * Generates an image with a new background applied using generative AI.
 * @param originalImage The original image file (ideally with background already removed).
 * @param backgroundPrompt The text prompt describing the desired background.
 * @returns A promise that resolves to the data URL of the adjusted image.
 */
export const generateBackground = async (
    originalImage: File,
    backgroundPrompt: string,
): Promise<string> => {
    console.log(`Starting background generation: ${backgroundPrompt}`);
    const ai = new GoogleGenAI({ apiKey: process.env.API_KEY! });
    
    const originalImagePart = await fileToPart(originalImage);
    const prompt = `You are an expert photo editor AI. You are given an image of a subject on a neutral background.
Your task is to replace this background with a new one as described by the user request.

User Request: "${backgroundPrompt}"

Editing Guidelines:
- The new background must be photorealistic and match the user's description.
- The lighting, shadows, and perspective of the main subject must be realistically adjusted to match the new background seamlessly.
- The subject itself should not be altered, only its integration into the new scene.

Output: Return ONLY the final composed image. Do not return text.`;
    const textPart = { text: prompt };

    console.log('Sending image and background prompt to the model...');
    const response: GenerateContentResponse = await ai.models.generateContent({
        model: 'gemini-2.5-flash-image',
        contents: { parts: [originalImagePart, textPart] },
    });
    console.log('Received response from model for background replacement.', response);
    
    return handleApiResponse(response, 'background replacement');
};

/**
 * Generates product insights (title, description, price) from an image.
 * @param productImage The product image file.
 * @param condition The condition of the item, 'New' or 'Used'.
 * @param userProvidedInfo Optional user-provided text to refine the search.
 * @returns A promise that resolves to an object containing title, description, and price.
 */
export const generateProductInsights = async (
    productImage: File,
    condition: 'New' | 'Used',
    userProvidedInfo?: string
): Promise<ProductInsights> => {
    console.log(`Starting product insight generation for ${condition} item. User info: ${userProvidedInfo}`);
    const ai = new GoogleGenAI({ apiKey: process.env.API_KEY! });
    
    const imagePart = await fileToPart(productImage);
    
    let prompt = `You are an expert e-commerce listing AI, specializing in platforms like eBay. Your primary function is to use the provided Google Search tool to find real-time product information and pricing. Your entire analysis must be grounded in up-to-date search results, not your internal knowledge.

Your task is to use Google Search to identify the product in the image and create a complete, optimized product listing. The product is in **${condition}** condition.`;

    if (userProvidedInfo) {
        prompt += `\n\n**CRITICAL**: The user has provided this information: "${userProvidedInfo}". This is your most important clue. Use it as the primary guide for your search and identification. Prioritize this information over your own visual analysis if they conflict.`;
    }

    prompt += `\n\nFollow these instructions precisely:
1.  **Search and Identify:** Your most important task is to use Google Search. Formulate effective search queries based on the image and user info (e.g., "[product name] price", "[brand model number] review"). Your goal is to find the product's official name, brand, and model. If you cannot find a confident match, you must state that in your response.
2.  **Generate Title:** Based on your search results, craft a catchy, SEO-friendly title suitable for an eBay listing. Include brand, model, and key features.
3.  **Write Description:** Write a concise and effective description for an eBay listing based on product details found via search. Use Markdown bullet points (\`-\`) for features, specifications, or notes on the item's condition.
4.  **Determine Price Range:** This is your most critical instruction. You **MUST** use Google Search to determine a realistic market price range for the item in the specified **${condition}** condition. Your goal is to provide a helpful estimate, even if perfect data is not available. Follow this search hierarchy:
    a. **Top Priority - Sold Listings:** First, search for **sold listings** on eBay and other marketplaces (like Poshmark). This is the best evidence of what people are willing to pay.
    b. **Second Priority - Active Listings:** If there are few or no sold listings, search for **active listings** for the same item across Google Shopping, eBay, Amazon, and other relevant marketplaces.
    c. **Final Option - Retail Price:** If it's a 'Used' item and you can't find resale listings, find the original retail price (MSRP) or the current price for a new version of the item. Then, estimate a used price based on that. For 'New' items, the current retail price is a strong indicator.
5.  **Format Pricing Output:**
    - **"recommendedPrice":** Based on your research, you MUST provide a price **range** (e.g., "$100 - $125"). Your primary goal is to provide a range. Only if you have exhausted all search methods and cannot find any pricing information should you use "Could not determine". Do not invent a price.
    - **"priceRationale":** You MUST explain how you arrived at your price range, citing the types of sources you found. (e.g., "Based on recent eBay sold listings between $100-$115.", or "Based on active listings on Amazon and eBay, with an estimated used value derived from the $299 new price.").
6.  **Find Similar Listing:** Provide a direct URL to one of the most relevant listings (active or sold) that you used for your research. If you cannot find a suitable listing, the values for "url" and "title" must be empty strings.

Return the response as a single JSON object inside a markdown code block. Do not include any other text or explanation outside the JSON block.

The JSON structure must be:
\`\`\`json
{
  "title": "string",
  "description": "string (concise, with markdown for bullet points)",
  "pricingGuidance": {
    "recommendedPrice": "string (e.g., '$100 - $125' or 'Could not determine')",
    "priceRationale": "string (Explain your reasoning based on the search hierarchy)"
  },
  "similarListing": {
    "title": "string",
    "url": "string"
  }
}
\`\`\`
`;

    const textPart = { text: prompt };
    
    console.log('Sending image for product insight generation with search...');
    const response: GenerateContentResponse = await ai.models.generateContent({
        model: 'gemini-2.5-flash',
        contents: { parts: [imagePart, textPart] },
        config: {
          tools: [{googleSearch: {}}],
        },
    });
    
    console.log('Received response from model for product insights.', response);

    try {
        const textResponse = response.text.trim();
        // Extract JSON from the markdown code block
        const jsonMatch = textResponse.match(/```json\n([\s\S]*?)\n```/);
        if (!jsonMatch || !jsonMatch[1]) {
             throw new Error("The AI model did not return valid JSON in the expected format.");
        }
        
        const jsonText = jsonMatch[1];
        const insights = JSON.parse(jsonText);
        
        const groundingChunks = response.candidates?.[0]?.groundingMetadata?.groundingChunks ?? [];

        // Basic validation
        if (typeof insights.title === 'string' && typeof insights.description === 'string' && typeof insights.pricingGuidance === 'object') {
            return { ...insights, groundingChunks };
        } else {
            throw new Error("Parsed JSON does not match the expected structure.");
        }
    } catch (e) {
        console.error("Failed to parse JSON response for insights:", e, { responseText: response.text });
        throw new Error("The AI model returned an invalid response for the product details. Please try again.");
    }
};