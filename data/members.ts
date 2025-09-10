// src/mocks/members.ts
export type Member = {
  name: string;
  iso2: string; // 2-letter code for flag generation
  note?: string;
};

export const members: Member[] = [
  { name: "Algeria", iso2: "DZ" },
  { name: "Angola", iso2: "AO" },
  { name: "Botswana", iso2: "BW" },
  { name: "Djibouti", iso2: "DJ" },
  { name: "Egypt", iso2: "EG" },
  { name: "Ghana", iso2: "GH" },
  { name: "Kenya", iso2: "KE" },
  { name: "Libya", iso2: "LY" },
  { name: "Mali", iso2: "ML" },
  { name: "Morocco", iso2: "MA" },
  { name: "Nigeria", iso2: "NG" },
  { name: "Pakistan", iso2: "PK" }, // explicitly listed on homepage
  { name: "Rwanda", iso2: "RW" },
  { name: "South Africa", iso2: "ZA" },
  { name: "Tunisia", iso2: "TN" },
];
