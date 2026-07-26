import { SectionConfig } from "@/types/committee";

export const committeeSections: SectionConfig[] = [
  {
    title: "International Scientific Committee",
    description: "Committee members who brought extensive experience and expertise to ensure the highest standards of competition",
    colorScheme: "amber",
  },
  {
    title: "Host Committee", 
    description: "The team behind the organization and website of PAIO 2025",
    colorScheme: "amber",
  },
  {
    title: "International Committee",
    description: "International committee members who provided global perspective and expertise", 
    colorScheme: "amber",
    gridCols: "grid-cols-1 md:grid-cols-2 lg:grid-cols-5",
  },
  {
    title: "Team Leaders",
    description: "Team leaders from the countries that participated in PAIO 2025",
    colorScheme: "amber",
  },
  /**{
    title: "Coaches",
    description: "Pan-African Informatic Olympiad coaches.",
    colorScheme: "amber"
  }
    */
];
