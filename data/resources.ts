// src/mocks/resources.ts
export type LinkItem = { title: string; href: string; desc?: string };

export const resources = {
  books: [
    {
      title: "Competitive Programmer’s Handbook",
      href: "https://drive.google.com/file/d/16SljCkH38meglyDxmqlNudyFV-Ulr7Ld/view",
      desc: "Classic CP book with problems and techniques.",
    },
  ],
  links: [
    {
      title: "CP-Algorithms (e-maxx)",
      href: "https://cp-algorithms.com/",
      desc: "Clear articles on fundamental CP algorithms and data structures.",
    },
    {
      title: "USACO Guide",
      href: "https://usaco.guide/",
      desc: "Structured competitive programming learning paths and problems.",
    },
    {
      title: "IOI — International Olympiad in Informatics (official)",
      href: "https://ioinformatics.org/",
      desc: "Official IOI site — past tasks and information.",
    },
    {
      title: "Codeforces EDU",
      href: "https://codeforces.com/edu/courses",
      desc: "Step-by-step tutorials and practice problems.",
    },
    {
      title: "QOJ.ac - PAIO Problems",
      href: "https://qoj.ac/problems?search=PAIO",
      desc: "PAIO contest problems on QOJ.ac online judge platform.",
    },
  ],
  contests: [
    {
      title: "IOI — Training & Past Problems",
      href: "https://ioinformatics.org/",
      desc: "Official IOI tasks and archives (useful for year-to-year training).",
    },
    {
      title: "Codeforces — Gym & Contests",
      href: "https://codeforces.com/",
      desc: "Regular contests and community problemsets.",
    },
    {
      title: "AtCoder Regular Contests",
      href: "https://atcoder.jp/contests/",
      desc: "Contests with quality problems suitable for olympiad prep.",
    },
  ],
  problemSets: [
    {
      title: "UVa Online Judge (Problem Archive)",
      href: "https://onlinejudge.org/",
      desc: "Large archive of classical competitive programming problems.",
    },
    {
      title: "Kattis",
      href: "https://open.kattis.com/",
      desc: "Judge used by many competitions; good practice problems.",
    },
    {
      title: "SPOJ (Problems)",
      href: "https://www.spoj.com/problems/",
      desc: "Archive of algorithmic problems sorted by category.",
    },
    {
        title: "CSES Problem Set",
        href: "https://cses.fi/problemset",
        desc: "CSES Problem Set is a collection of algorithmic programming problems",
    },
  ],
};
