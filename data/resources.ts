// src/mocks/resources.ts
export type LinkItem = { title: string; href: string; desc?: string };

export const resources = {
  books: [
    {
      title: "Competitive Programmer’s Handbook",
      href: "https://drive.google.com/file/d/16SljCkH38meglyDxmqlNudyFV-Ulr7Ld/view",
      desc: "Classic CP book with problems and techniques.",
    },
    {
      title: "Introduction to Algorithms",
      href: "https://drive.google.com/file/d/1PwHRRkkjiE4tQJl5m1MOq6cNqAGSKPmV/view",
      desc: "This book provides a comprehensive introduction to the modern study of computer algorithms.",
    },
    {
      title: "Algorithm Design",
      href: "https://drive.google.com/file/d/1wKy-wGuCYfRx1DH48vZHl5JA4nkhOmwC/view",
      desc: "Convey approach to algorithms as a design process that begins with problems arising across the full range of computing applications.",
    },
    {
      title: "Algorithmics: The Spirit of Computing",
      href: "https://drive.google.com/file/d/1m9-9Kw8EM4sahuWgF8UONigmyXFad6Mz/view",
      desc: "The book is intended to fill a rather disturbing gap in the literature related to the computer revolution.",
    },
  ],
  websites: [
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
      title: "Codeforces EDU",
      href: "https://codeforces.com/edu/courses",
      desc: "Step-by-step tutorials and practice problems.",
    }
  ],
  contests: [
    {
      title: "Codeforces",
      href: "https://codeforces.com/",
      desc: "Regular contests and community problemsets.",
    },
    {
      title: "AtCoder Regular Contests",
      href: "https://atcoder.jp/contests/",
      desc: "Contests with quality problems suitable for olympiad prep.",
    },
    {
      title: "QOJ",
      href: "https://qoj.ac/contest/2525",
      desc: "PAIO 2025 day 1 contest problems on QOJ.",
    },
    {
      title: "QOJ",
      href: "https://qoj.ac/contest/2526",
      desc: "PAIO 2025 day 2 contest problems on QOJ.",
    },
    {
      title: "EOLYMP",
      href: " https://basecamp.eolymp.com/en/contests?series=paio",
      desc: "PAIO contest problems on EOLYMP.",
    },
    {
      title: "Kattis",
      href: "https://open.kattis.com/",
      desc: "Judge used by many competitions; good practice problems.",
    },
  ],
  problemSets: [
    {
      title: "IOI — International Olympiad in Informatics (official)",
      href: "https://ioinformatics.org/",
      desc: "Official IOI site — past tasks and information.",
    },
    {
        title: "Junior Traning Sheet",
        href: "https://docs.google.com/spreadsheets/d/1-499z-WtsthQPYU_rmJ3PNCGALA4NBaEodBYyPhmjx8/edit?gid=84654839#gid=84654839",
        desc: "The goal of this sheet is to enhance algorthmic probem solving skills for programming competitions",
    },
    {
      title: "UVa Online Judge (Problem Archive)",
      href: "https://onlinejudge.org/",
      desc: "Large archive of classical competitive programming problems.",
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
