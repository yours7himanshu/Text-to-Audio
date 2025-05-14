import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Script from "next/script";
import Link from "next/link";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Free Text to Speech Converter | Accessibility Tool",
  description: "Convert text to speech for free. Our accessible tool helps visually impaired users and anyone who prefers audio content over reading. No account required.",
  keywords: ["text to speech", "free text to speech", "accessibility", "visually impaired", "voice generator", "audio converter"],
  authors: [{ name: "Text to Speech Service" }],
  creator: "Text to Speech Service",
  publisher: "Text to Speech Service",
  formatDetection: {
    email: false,
    telephone: false,
  },
  metadataBase: new URL("https://text-to-audio-black.vercel.app"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Free Text to Speech Converter | Accessibility Tool",
    description: "Convert text to speech for free. Our accessible tool helps visually impaired users and anyone who prefers audio content over reading.",
    url: "https://text-to-audio-black.vercel.app",
    siteName: "Text to Speech Converter",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Free Text to Speech Converter | Accessibility Tool",
    description: "Convert text to speech for free. Our accessible tool helps visually impaired users and anyone who prefers audio content over reading.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  other: {
    "google-adsense-account": "ca-pub-3122566948334354",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta name="google-adsense-account" content="ca-pub-3122566948334354" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <Script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-3122566948334354"
          crossOrigin="anonymous"
        />
        {/* Structured data for better SEO */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebApplication",
              "name": "Free Text to Speech Converter",
              "description": "Convert text to speech for free. Our accessible tool helps visually impaired users and anyone who prefers audio content over reading.",
              "applicationCategory": "Accessibility",
              "operatingSystem": "Web",
              "datePublished": "2025-05-14",
              "offers": {
                "@type": "Offer",
                "price": "0",
                "priceCurrency": "USD"
              }
            })
          }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased flex flex-col min-h-screen bg-gray-900 text-gray-100`}
      >
        <main className="flex-grow">
          {children}
        </main>
        
        <footer className="bg-gray-800 text-gray-400 py-3 text-sm">
          <div className="container mx-auto px-4">
            <div className="flex justify-center items-center gap-6">
              <Link href="/about" className="hover:text-blue-400 transition-colors">
                About
              </Link>
              <Link href="/privacy" className="hover:text-blue-400 transition-colors">
                Privacy
              </Link>
              <Link href="/terms" className="hover:text-blue-400 transition-colors">
                Terms
              </Link>
              <div>
                © {new Date().getFullYear()} Text to Speech
              </div>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
