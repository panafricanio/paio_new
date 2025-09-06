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

  return isValid;
};

export const getImageSrc = (imageUrl: string, fallbackName?: string): string => {
  if (validateImageUrl(imageUrl)) {
    return imageUrl;
  }
  
  // Return SVG placeholder for invalid images
  return "/placeholder-profile.svg";
};

// Common IOI stats base URL for easier management
export const IOI_STATS_BASE = "https://stats.ioinformatics.org/img/photos";

// Helper to create IOI stats URLs
export const createIOIStatsUrl = (year: number, photoId: number): string => {
  return `${IOI_STATS_BASE}/${year}/${photoId}.png`;
};

// Log missing images for debugging
export const logMissingImage = (memberName: string, imageUrl: string): void => {
  if (process.env.NEXT_PUBLIC_NODE_ENV === "development") {
    console.warn(`Missing or invalid image for ${memberName}:`, imageUrl);
  }
};
