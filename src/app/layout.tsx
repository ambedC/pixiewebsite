import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { SmoothScrollProvider } from "@/components/SmoothScrollProvider";
import { ScrollToTopButton } from "@/components/ScrollToTopButton";

const clashDisplay = localFont({
  src: "../../public/fonts/ClashDisplay_Complete/Fonts/WEB/fonts/ClashDisplay-Variable.woff2",
  variable: "--font-clash-display",
  weight: "200 700",
  display: "swap",
});

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://pixiewebs.com"),
  title: {
    default: "Pixie Web Solutions | Make Pixel Perfect Websites.",
    template: "%s | Pixie Web Solutions",
  },
  description:
    "Premium web design and development services. We create stunning, high-performance websites that help your business grow. Magic that connects you with your audience.",
  keywords: [
    "Web Design",
    "Web Development",
    "Pixie Web Solutions",
    "Next.js Development",
    "UI/UX Design",
    "Business Websites",
  ],
  authors: [{ name: "Pixie Web Solutions" }],
  creator: "Pixie Web Solutions",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://pixiewebs.com",
    title: "Pixie Web Solutions — Websites That Work. Magic That Connects.",
    description:
      "Premium web design and development services. We create stunning, high-performance websites that help your business grow.",
    siteName: "Pixie Web Solutions",
  },
  twitter: {
    card: "summary_large_image",
    title: "Pixie Web Solutions — Websites That Work. Magic That Connects.",
    description:
      "Premium web design and development services. We create stunning, high-performance websites that help your business grow.",
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
    <html
      lang="en"
      className={`${clashDisplay.variable} ${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <SmoothScrollProvider>
          <Navbar />
          <main className="flex-grow flex flex-col">{children}</main>
          <Footer />
          <ScrollToTopButton />
        </SmoothScrollProvider>
      </body>
    </html>
  );
}
