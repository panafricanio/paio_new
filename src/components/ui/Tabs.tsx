// src/components/Tabs.tsx
"use client";

import React from "react";

type Tab = { id: string; label: string };

interface TabsProps {
  tabs: Tab[];
  activeId?: string;
  onChange?: (id: string) => void;
}

export default function Tabs({ tabs, activeId, onChange }: TabsProps) {
  const [active, setActive] = React.useState(activeId ?? tabs[0]?.id);

  React.useEffect(() => {
    if (activeId) setActive(activeId);
  }, [activeId]);

  return (
    <div>
      <div className="flex flex-wrap gap-2 mb-4">
        {tabs.map((t) => (
          <button
            key={t.id}
            onClick={() => {
              setActive(t.id);
              onChange?.(t.id);
            }}
            className={`px-4 py-2 rounded-md font-medium transition ${
              active === t.id
                ? "bg-amber-600 text-white shadow-sm"
                : "bg-white border border-gray-200 text-gray-700"
            }`}
          >
            {t.label}
          </button>
        ))}
      </div>
      <div>{/* content slot: consumer will conditionally render */}</div>
    </div>
  );
}
