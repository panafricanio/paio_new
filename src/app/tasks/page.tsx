// src/app/tasks/page.tsx
import React from "react";
import { Download, ExternalLink } from "lucide-react";

// PAIO Contest data (moved from resources)
const paioContestData = {
  year: "2025",
  livePracticeUrl: "https://basecamp.eolymp.com/en/contests?series=paio",
  days: [
    {
      day: "Day 1",
      problems: [
        {
          title: "CARDS",
          filename: "CARDS.pdf",
          downloadUrl: "/paio-contests/2025/day1/CARDS.pdf",
        },
        {
          title: "GCD",
          filename: "gcd day1.pdf",
          downloadUrl: "/paio-contests/2025/day1/gcd day1.pdf",
        },
        {
          title: "ROOKS",
          filename: "rooks day1.pdf",
          downloadUrl: "/paio-contests/2025/day1/rooks day1.pdf",
        },
        {
          title: "XOR",
          filename: "xor day1.pdf",
          downloadUrl: "/paio-contests/2025/day1/xor day1.pdf",
        },
      ],
    },
    {
      day: "Day 2",
      problems: [
        {
          title: "ADVENTURE",
          filename: "advanture day2.pdf",
          downloadUrl: "/paio-contests/2025/day2/advanture day2.pdf",
        },
        {
          title: "CAKE",
          filename: "cake day2.pdf",
          downloadUrl: "/paio-contests/2025/day2/cake day2.pdf",
        },
        {
          title: "EXHIBITION",
          filename: "exhibition day2.pdf",
          downloadUrl: "/paio-contests/2025/day2/exhibition day2.pdf",
        },
        {
          title: "TOWERS",
          filename: "towers day2.pdf",
          downloadUrl: "/paio-contests/2025/day2/towers day2.pdf",
        },
      ],
    },
  ],
};

function PAIOContestCard({ contest }: { contest: typeof paioContestData }) {
  return (
    <div className="bg-white rounded-lg border p-6">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-xl font-bold text-gray-800">PAIO {contest.year}</h3>
        {/* {contest.livePracticeUrl && (
          <a
            href={contest.livePracticeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-4 py-2 bg-amber-600 text-white rounded-md hover:bg-amber-700 transition-colors"
          >
            <ExternalLink size={16} />
            Live Practice
          </a>
        )} */}
      </div>

      <div className="space-y-6">
        {contest.days.map((day) => (
          <div key={day.day} className="border-l-4 border-amber-500 pl-4">
            <h4 className="font-semibold text-gray-700 mb-3">{day.day}</h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
              {day.problems.map((problem) => (
                <a
                  key={problem.filename}
                  href={problem.downloadUrl}
                  download={problem.filename}
                  className="flex items-center justify-between p-3 bg-gray-50 rounded-md hover:bg-gray-100 transition-colors border"
                >
                  <span className="font-medium text-gray-800">
                    {problem.title}
                  </span>
                  <Download size={16} className="text-amber-600" />
                </a>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default function TasksPage() {
  return (
    <main className="min-h-screen py-12 px-4 md:px-8 bg-gradient-to-br from-white to-amber-50">
      <div className="max-w-5xl mx-auto">
        <header className="mb-6">
          <h1 className="text-3xl md:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-amber-700 to-green-600">
            PAIO Contest Tasks
          </h1>
        </header>
        <PAIOContestCard contest={paioContestData} />
      </div>
    </main>
  );
}
