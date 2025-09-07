// Image utilities for committee members
export const validateImageUrl = (imageUrl: string): boolean => {
  if (!imageUrl || imageUrl === "") {
    return false;
  }
  
  // Check for valid image URL patterns
  const isValid = (
    imageUrl.startsWith("http") ||        // External URLs
    imageUrl.startsWith("/") ||           // Local paths from public folder
    imageUrl.startsWith("data:image")     // Base64 data URIs
  );

  // Additional validation for base64 images
  if (imageUrl.startsWith("data:image")) {
    // Check if base64 data is complete (not truncated)
    if (imageUrl.includes("...") || imageUrl.includes("truncated") || imageUrl.length < 100) {
      return false;
    }
  }

  // For local paths, check if it's a supported image format including webp
  if (imageUrl.startsWith("/")) {
    const supportedFormats = ['.jpg', '.jpeg', '.png', '.gif', '.webp', '.svg'];
    const hasValidExtension = supportedFormats.some(format => 
      imageUrl.toLowerCase().endsWith(format)
    );
    return hasValidExtension;
  }

  return isValid;
};

export const getImageSrc = (imageUrl: string, fallbackName?: string): string => {
  if (validateImageUrl(imageUrl)) {
    return imageUrl;
  }
  
  // Return SVG placeholder for invalid images
  return "/placeholder-profile.svg";
};

// Check if image file actually exists (for development)
export const checkImageExists = async (imagePath: string): Promise<boolean> => {
  if (typeof window === 'undefined') return true; // Skip check on server
  
  try {
    const response = await fetch(imagePath, { method: 'HEAD' });
    return response.ok;
  } catch {
    return false;
  }
};

// Common IOI stats base URL for easier management
export const IOI_STATS_BASE = "https://stats.ioinformatics.org/img/photos";

// Helper to create IOI stats URLs
export const createIOIStatsUrl = (year: number, photoId: number): string => {
  return `${IOI_STATS_BASE}/${year}/${photoId}.png`;
};

// Log missing images for debugging
export const logMissingImage = (memberName: string, imageUrl: string): void => {
  if (process.env.NODE_ENV === "development") {
    console.warn(`Missing or invalid image for ${memberName}: ${imageUrl}`);
  }
};

// List of known missing images that should use placeholders
export const knownMissingImages = new Set([
  '/images/jehovanis.webp',
  '/images/jado.webp'
]);

// Enhanced image source getter that handles known missing images
export const getImageSrcWithFallback = (imageUrl: string, memberName: string): string => {
  // If it's a known missing image, return placeholder immediately
  if (knownMissingImages.has(imageUrl)) {
    return "/placeholder-profile.svg";
  }
  
  return getImageSrc(imageUrl, memberName);
};
