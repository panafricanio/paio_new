// Image recovery and placeholder management
// This file contains strategies for handling missing committee member images

export const missingImagePlaceholders = {
  "Dr. Papias Niyigena": {
    // This member had a base64 image that got truncated
    // TODO: Restore the full base64 image data
    fallback: "/images/logo.png"
  },
  "Sébastian Diarra": {
    // Mali representative - no image available
    fallback: "/images/logo.png"
  },
  "Noah Jacobsen": {
    // South Africa representative - no image available  
    fallback: "/images/logo.png"
  },
  "Etienne Kagaba": {
    // This member had a base64 image that got truncated
    // TODO: Restore the full base64 image data
    fallback: "/images/logo.png"
  }
};

// Helper function to get the best available image for a member
export const getImageForMember = (memberName: string, originalImage: string): string => {
  // If we have a valid image, use it
  if (originalImage && originalImage !== "" && !originalImage.includes("truncated")) {
    return originalImage;
  }
  
  // Check if we have a specific placeholder for this member
  const placeholder = missingImagePlaceholders[memberName as keyof typeof missingImagePlaceholders];
  if (placeholder) {
    return placeholder.fallback;
  }
  
  // Default fallback
  return "/images/logo.png";
};
