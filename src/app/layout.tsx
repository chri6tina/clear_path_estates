import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.clearpathestates.com"),
  title: "Clear Path Estates | Jacksonville Estate Sales & Cleanouts",
  description:
    "Clear Path Estates delivers premium estate sales, compassionate cleanouts, donation coordination, and home buyouts across Jacksonville and Northeast Florida.",
  keywords: [
    "Jacksonville estate sales",
    "estate cleanout services",
    "donation coordination Jacksonville",
    "home buyout services Florida",
  ],
  openGraph: {
    title: "Clear Path Estates | Jacksonville Estate Sales & Cleanouts",
    description:
      "Premier estate liquidation, turnkey cleanouts, donation coordination, and buyout guidance for families in Jacksonville, Florida.",
    url: "https://www.clearpathestates.com",
    siteName: "Clear Path Estates",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Clear Path Estates | Jacksonville Estate Sales & Cleanouts",
    description:
      "Estate sale pros focused on Jacksonville families, complete cleanouts, donation coordination, and quick buyouts.",
  },
  icons: {
    icon: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${playfair.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
