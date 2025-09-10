// src/mocks/news.ts
export type NewsItem = {
  id: string;
  title: string;
  date: string; // ISO date
  excerpt?: string;
  href?: string;
};

export const news: NewsItem[] = [
  {
    id: "n1",
    title: "PAIO 2025: First Edition — Sept 12–14, 2025 (Online)",
    date: "2025-09-12",
    excerpt:
      "The Pan African Informatics Olympiad (PAIO) first edition will run online over three days with two rounds.",
  },
  {
    id: "n2",
    title: "Registration Open for Teams and Contestants",
    date: "2025-08-01",
    excerpt:
      "Participating countries — teams are encouraged to complete registration via the official portal.",
  },
];
