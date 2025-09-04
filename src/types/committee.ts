// Types for committee members and related components

export interface CommitteeMember {
  name: string;
  image: string;
  roles: string[];
}

export type ColorScheme = "amber" | "green" | "orange";

export interface ColorConfig {
  card: string;
  border: string;
  text: string;
  icon: string;
}

export interface SectionConfig {
  title: string;
  description: string;
  colorScheme: ColorScheme;
  gridCols?: string;
}
