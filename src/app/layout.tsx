import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Whiskey River TX — Texas Alcohol Sales Intelligence",
  description:
    "Texas TABC data and CRM intelligence for alcohol sales reps. Target the right accounts faster with beer, wine, and spirits receipts.",
  icons: {
    icon: "/favicon.svg",
    apple: "/favicon.svg",
  },
  openGraph: {
    title: "Whiskey River TX — Texas Alcohol Sales Intelligence",
    description:
      "Texas TABC data and CRM intelligence for alcohol sales reps. Target the right accounts faster with beer, wine, and spirits receipts.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${jetbrainsMono.variable}`}>
      <body className="font-sans antialiased">{children}</body>
    </html>
  );
}
