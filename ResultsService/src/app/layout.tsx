import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-poppins",
  display: "swap",
});

export const metadata: Metadata = {
  title: "PAIO 2025 Results | Pan African Informatics Olympiad",
  description: "Official results for the Pan African Informatics Olympiad (PAIO) 2025. View complete competition standings and medal winners.",
  keywords: "PAIO, Pan African Informatics Olympiad, 2025, results, competition, programming, Africa",
  authors: [{ name: "PAIO Organizing Committee" }],
  openGraph: {
    title: "PAIO 2025 Results",
    description: "Official results for the Pan African Informatics Olympiad 2025",
    type: "website",
    locale: "en_US",
  },
  robots: {
    index: true,
    follow: true,
  },
  viewport: "width=device-width, initial-scale=1",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${poppins.variable}`}>
      <body className="font-sans antialiased" suppressHydrationWarning={true}>
        {children}
      </body>
    </html>
  );
}
