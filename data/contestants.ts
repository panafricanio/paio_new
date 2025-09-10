// src/mocks/contestants.ts
// This competition is the first edition — no past contestants yet.
// Keep the array here for future dynamism.
export type Contestant = {
  id: string;
  name: string;
  country?: string;
  bio?: string;
};

export const contestants: Contestant[] = [];
