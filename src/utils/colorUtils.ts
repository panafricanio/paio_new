import { ColorScheme, ColorConfig } from "@/types/committee";

export const getColorConfig = (scheme: ColorScheme): ColorConfig => {
  switch (scheme) {
    case "green":
      return {
        card: "bg-gradient-to-br from-white to-green-50 border border-green-100",
        border: "border-green-100",
        text: "bg-gradient-to-r from-green-700 to-emerald-500 bg-clip-text text-transparent",
        icon: "text-green-600",
      };
    case "orange":
      return {
        card: "bg-gradient-to-br from-white to-orange-50 border border-orange-100",
        border: "border-orange-100", 
        text: "bg-gradient-to-r from-orange-700 to-amber-600 bg-clip-text text-transparent",
        icon: "text-orange-600",
      };
    default: // amber
      return {
        card: "bg-gradient-to-br from-white to-amber-50 border border-amber-100",
        border: "border-amber-100",
        text: "bg-gradient-to-r from-amber-700 to-orange-600 bg-clip-text text-transparent",
        icon: "text-amber-600",
      };
  }
};

export const getTitleColorClass = (scheme: ColorScheme): string => {
  switch (scheme) {
    case "green":
      return "bg-gradient-to-r from-green-700 to-emerald-600 bg-clip-text text-transparent";
    case "orange":
      return "bg-gradient-to-r from-orange-700 to-amber-600 bg-clip-text text-transparent";
    default: // amber
      return "bg-gradient-to-r from-amber-700 to-green-600 bg-clip-text text-transparent";
  }
};

export const getBackgroundClass = (scheme: ColorScheme): string => {
  switch (scheme) {
    case "green":
      return "bg-gradient-to-b from-white to-green-50/50";
    case "orange":
      return "bg-gradient-to-b from-white to-orange-50/50";
    default: // amber
      return "bg-gradient-to-b from-white to-amber-50/50";
  }
};
