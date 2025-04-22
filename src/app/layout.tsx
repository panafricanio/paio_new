import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import LanguageSelector from "@/components/LanguageSelector";
import ClientBody from "./ClientBody";

// Updated font system with display font for headings and body font for text
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-poppins",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Pan African Informatics Olympiad",
  description:
    "Pan African Informatics Olympiad (PAIO) 2025 - Africa's premier informatics competition",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <body
        className={`${poppins.variable} ${inter.variable} font-sans bg-background text-foreground antialiased`}
      >
        <div className="flex flex-col min-h-screen">
          <Navbar />
          <ClientBody>{children}</ClientBody>
          <Footer />
          <LanguageSelector />
        </div>
      </body>
    </html>
  );
}
