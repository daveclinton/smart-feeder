import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: {
    template: "%s | Seep Baby - Smart Feeding Made Simple",
    default: "Seep Baby - Smart Feeding Made Simple",
  },
  description:
    "Seep Baby is an AI-powered smart feeding solution that helps parents track, monitor, and optimize their baby's feeding experience through intelligent insights, device connectivity, and the Seep mobile app.",
  keywords: [
    "Seep Baby",
    "Seep",
    "smart feeder",
    "baby feeding device",
    "AI baby feeding",
    "baby care technology",
    "smart baby bottle",
    "feeding analytics",
    "parenting technology",
    "Seep app",
    "baby feeding tracker",
    "IoT baby product",
    "Bluetooth smart bottle",
    "baby wellness tracking",
    "AI parenting assistant",
    "feeding automation",
  ],
  authors: [{ name: "Seep Baby", url: "https://seepbaby.com" }],
  generator: "Next.js",
  applicationName: "Seep Baby",
  alternates: {
    canonical: "https://seepbaby.com",
  },
  openGraph: {
    title: "Seep Baby - Smart Feeding Made Simple",
    description:
      "Meet Seep Baby — the world’s first AI-powered baby feeding assistant. Track, analyze, and enhance your baby’s nutrition journey with real-time insights, Bluetooth connectivity, and smart feeding analytics.",
    url: "https://seepbaby.com",
    siteName: "Seep Baby",
    type: "website",
    locale: "en_US",
    images: [
      {
        url: "https://seepbaby.com/og-image.png",
        width: 1200,
        height: 630,
        alt: "Seep Baby - Smart Feeding Made Simple",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Seep Baby - Smart Feeding Made Simple",
    description:
      "Seep Baby combines AI technology and smart design to revolutionize baby feeding. Track feeding habits, monitor milk levels, and stay connected with our Seep app and device.",
    site: "@seepbaby",
    creator: "@seepbaby",
    images: ["https://seepbaby.com/og-image.png"],
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
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
