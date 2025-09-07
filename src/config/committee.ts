import { SectionConfig } from "@/types/committee";

export const committeeSections: SectionConfig[] = [
  {
    title: "International Scientific Committee",
    description: "Our committee members bring extensive experience and expertise to ensure the highest standards of competition",
    colorScheme: "amber",
  },
  {
    title: "Host Committee", 
    description: "Meet the team behind the organization and website of PAIO 2025",
    colorScheme: "green",
  },
  {
    title: "International Committee",
    description: "Our international committee members providing global perspective and expertise", 
    colorScheme: "orange",
    gridCols: "grid-cols-1 md:grid-cols-2 lg:grid-cols-5",
  },
  {
    title: "Team Leaders",
    description: "Meet the team leaders from participating countries",
    colorScheme: "amber",
  },
  /**{
    title: "Coaches",
    description: "Pan-African Informatic Olympiad coaches.",
    colorScheme: "orange"
  }
    */
];
