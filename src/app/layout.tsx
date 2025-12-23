import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Crispy Kitchen | Madurai's Crunch King - Premium Fried Chicken",
  description:
    "Experience the crispiest, juiciest fried chicken in Madurai. Fresh oil, secret spices, and that perfect golden crunch. Order now via WhatsApp!",
  keywords: [
    "fried chicken",
    "crispy chicken",
    "Madurai",
    "fast food",
    "wings",
    "burgers",
    "Korean chicken",
    "Nashville hot chicken",
  ],
  authors: [{ name: "Crispy Kitchen" }],
  creator: "Crispy Kitchen",
  openGraph: {
    title: "Crispy Kitchen | Madurai's Crunch King",
    description:
      "Premium fried chicken crafted with passion. Fresh oil, secret spices, and that perfect golden crunch.",
    url: "https://crispykitchen.in",
    siteName: "Crispy Kitchen",
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Crispy Kitchen | Madurai's Crunch King",
    description:
      "Premium fried chicken crafted with passion. Fresh oil, secret spices, and that perfect golden crunch.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.variable} font-sans antialiased`}>
        {children}
      </body>
    </html>
  );
}
