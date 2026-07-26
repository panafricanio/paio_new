import { ColorScheme, ColorConfig } from "@/types/committee";

/** Unified brand palette: amber accents + gray neutrals. */
const brandColors: ColorConfig = {
  card: "bg-white border border-amber-100",
  border: "border-amber-100",
  text: "text-amber-900",
  icon: "text-amber-700",
};

export const getColorConfig = (_scheme: ColorScheme): ColorConfig => brandColors;

export const getTitleColorClass = (_scheme: ColorScheme): string => "text-amber-900";

export const getBackgroundClass = (_scheme: ColorScheme): string => "bg-white";
