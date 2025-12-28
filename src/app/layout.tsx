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
    "Crispy Kitchen",
    "food delivery Madurai",
    "best chicken Madurai",
  ],
  authors: [{ name: "Crispy Kitchen" }],
  creator: "Crispy Kitchen",
  publisher: "Crispy Kitchen",
  metadataBase: new URL("https://crispykitchen.in"),
  alternates: {
    canonical: "/",
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "32x32" },
      { url: "/icon-192.png", sizes: "192x192", type: "image/png" },
      { url: "/icon-512.png", sizes: "512x512", type: "image/png" },
    ],
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" }],
  },
  manifest: "/manifest.json",
  openGraph: {
    title: "Crispy Kitchen | Madurai's Crunch King",
    description:
      "Premium fried chicken crafted with passion. Fresh oil, secret spices, and that perfect golden crunch.",
    url: "https://crispykitchen.in",
    siteName: "Crispy Kitchen",
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: "/images/hero-bg.jpg",
        width: 1200,
        height: 630,
        alt: "Crispy Kitchen - Premium Fried Chicken",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Crispy Kitchen | Madurai's Crunch King",
    description:
      "Premium fried chicken crafted with passion. Fresh oil, secret spices, and that perfect golden crunch.",
    images: ["/images/hero-bg.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "google-site-verification-code",
  },
  category: "restaurant",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <meta name="theme-color" content="#1A1A1A" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
        <link rel="preload" as="image" href="/images/hero-bg.jpg" fetchPriority="high" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body className={`${inter.variable} font-sans antialiased`}>
        {children}
      </body>
    </html>
  );
}
