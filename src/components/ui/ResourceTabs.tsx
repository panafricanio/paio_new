// src/components/ResourceTabs.tsx
"use client";

import React from "react";
import { useRouter, useSearchParams } from "next/navigation";
import Tabs from "./Tabs";
import { resources } from "../../../data/resources";

const tabsDef = [
  { id: "books", label: "Books" },
  { id: "Websites", label: "Websites" },
  { id: "contests", label: "Contests" },
  { id: "problemsets", label: "Problem Sets" },
];

interface ResourceTabsProps {
  activeTab?: string;
}

export default function ResourceTabs({ activeTab = "books" }: ResourceTabsProps) {
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
      case "books":
        return resources.books.map((b) => (
          <ResourceCard
            key={b.href}
            title={b.title}
            href={b.href}
            desc={b.desc}
          />
        ));
      case "Websites":
        return resources.websites.map((l) => (
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
      <div className="grid gap-4 grid-cols-1 md:grid-cols-2">
        {renderList()}
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
