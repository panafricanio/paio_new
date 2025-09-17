// src/components/ResourceTabs.tsx
"use client";

import React from "react";
import { useRouter, useSearchParams } from "next/navigation";
import Tabs from "./Tabs";
import { resources, ContestYear } from "../../../data/resources";
import { Download, ExternalLink } from "lucide-react";

const tabsDef = [
  { id: "paio-contests", label: "Past PAIO Contest" },
  { id: "books", label: "Books" },
  { id: "links", label: "Useful Links" },
  { id: "contests", label: "Contests" },
  { id: "problemsets", label: "Problem Sets" },
];

interface ResourceTabsProps {
  activeTab?: string;
}

export default function ResourceTabs({ activeTab = "paio-contests" }: ResourceTabsProps) {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [active, setActive] = React.useState<string>(activeTab);

  React.useEffect(() => {
    setActive(activeTab);
  }, [activeTab]);

  const handleTabChange = (tabId: string) => {
    setActive(tabId);
    const params = new URLSearchParams(searchParams);
    params.set('tab', tabId);
    router.push(`/resources?${params.toString()}`);
  };

  const renderList = () => {
    switch (active) {
      case "paio-contests":
        return resources.pastPAIOContests.map((contest) => (
          <PAIOContestCard key={contest.year} contest={contest} />
        ));
      case "books":
        return resources.books.map((b) => (
          <ResourceCard
            key={b.href}
            title={b.title}
            href={b.href}
            desc={b.desc}
          />
        ));
      case "links":
        return resources.usefulLinks.map((l) => (
          <ResourceCard
            key={l.href}
            title={l.title}
            href={l.href}
            desc={l.desc}
          />
        ));
      case "contests":
        return resources.contests.map((c) => (
          <ResourceCard
            key={c.href}
            title={c.title}
            href={c.href}
            desc={c.desc}
          />
        ));
      case "problemsets":
        return resources.problemSets.map((p) => (
          <ResourceCard
            key={p.href}
            title={p.title}
            href={p.href}
            desc={p.desc}
          />
        ));
      default:
        return null;
    }
  };

  return (
    <div>
      <Tabs tabs={tabsDef} activeId={active} onChange={handleTabChange} />
      <div className={`grid gap-4 ${active === "paio-contests" ? "grid-cols-1" : "grid-cols-1 md:grid-cols-2"}`}>
        {renderList()}
      </div>
    </div>
  );
}

function PAIOContestCard({ contest }: { contest: ContestYear }) {
  return (
    <div className="col-span-full bg-white rounded-lg border p-6">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-xl font-bold text-gray-800">PAIO {contest.year}</h3>
        {contest.livePracticeUrl && (
          <a
            href={contest.livePracticeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-4 py-2 bg-amber-600 text-white rounded-md hover:bg-amber-700 transition-colors"
          >
            <ExternalLink size={16} />
            Live Practice
          </a>
        )}
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
                  <span className="font-medium text-gray-800">{problem.title}</span>
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

function ResourceCard({
  title,
  href,
  desc,
}: {
  title: string;
  href: string;
  desc?: string;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="block p-4 bg-white rounded-lg border hover:shadow transition"
    >
      <div className="font-semibold">{title}</div>
      {desc && <div className="text-sm text-gray-500 mt-1">{desc}</div>}
      <div className="text-xs text-amber-600 mt-2">
        {new URL(href).hostname}
      </div>
    </a>
  );
}
