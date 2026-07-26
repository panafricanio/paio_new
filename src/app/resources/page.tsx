// src/app/resources/page.tsx
import ResourceTabs from "@/components/ui/ResourceTabs";
import React from "react";

interface ResourcesPageProps {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}

export default async function ResourcesPage({ searchParams }: ResourcesPageProps) {
  const params = await searchParams;
  const activeTab = typeof params.tab === 'string' ? params.tab : 'books';

  return (
    <main className="min-h-screen py-12 px-4 md:px-8 bg-white">
      <div className="max-w-5xl mx-auto">
        <header className="mb-6">
          <h1 className="text-3xl md:text-4xl font-bold text-amber-800">
            Resources
          </h1>
          <p className="text-gray-600 mt-2">
            Curated books, links, contests and problem sets to help prepare for
            PAIO and other olympiads.
          </p>
        </header>

        <ResourceTabs activeTab={activeTab} />
      </div>
    </main>
  );
}
