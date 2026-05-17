import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { SmoothScrollProvider } from "@/components/SmoothScrollProvider";
import { ScrollToTopButton } from "@/components/ScrollToTopButton";
import faqData from "@/data/faq.json";

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

export const viewport: Viewport = {
  themeColor: "#ffffff",
  colorScheme: "light",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  metadataBase: new URL("https://pixiewebs.com"),
  title: {
    default: "Pixie Web Solutions | Web Design Agency in Kochi, Kerala",
    template: "%s | Pixie Web Solutions",
  },
  description:
    "Pixie Web Solutions is a premium web design and development agency in Kochi, Kerala. We build pixel-perfect, high-performance websites for businesses across India. Starting at ₹5,000.",
  keywords: [
    "web design agency Kochi",
    "website development Kerala",
    "Next.js developer India",
    "affordable web design Kerala",
    "UI/UX design Kochi",
    "web development company Kerala",
    "e-commerce website Kerala",
    "digital agency Kochi",
    "Pixie Web Solutions",
    "website designers Kerala",
  ],
  authors: [{ name: "Pixie Web Solutions", url: "https://pixiewebs.com" }],
  creator: "Pixie Web Solutions",
  publisher: "Pixie Web Solutions",
  alternates: { canonical: "https://pixiewebs.com" },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://pixiewebs.com",
    title: "Pixie Web Solutions — Web Design Agency in Kochi, Kerala",
    description:
      "Premium web design and development agency in Kochi, Kerala. We build stunning, high-performance websites starting at ₹5,000.",
    siteName: "Pixie Web Solutions",
    images: [
      {
        url: "https://pixiewebs.com/images/logo.png",
        width: 1200,
        height: 630,
        alt: "Pixie Web Solutions — Web Design Agency Kochi",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Pixie Web Solutions — Web Design Agency Kochi, Kerala",
    description:
      "Premium web design and development. Affordable packages from ₹5,000 for businesses across Kerala and India.",
    images: ["https://pixiewebs.com/images/logo.png"],
  },
  icons: {
    icon: "/images/logo.png",
    shortcut: "/images/logo.png",
    apple: "/images/logo.png",
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
};

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": "https://pixiewebs.com/#organization",
  name: "Pixie Web Solutions",
  url: "https://pixiewebs.com",
  logo: "https://pixiewebs.com/images/logo.png",
  image: "https://pixiewebs.com/images/logo.png",
  email: "hello@pixiewebs.com",
  telephone: "+91-9188777807",
  priceRange: "₹₹",
  description:
    "Premium web design and development agency based in Kochi, Kerala. We build high-performance websites for businesses across India.",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Kochi",
    addressRegion: "Kerala",
    addressCountry: "IN",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 9.9312,
    longitude: 76.2673,
  },
  areaServed: [
    { "@type": "City", name: "Kochi" },
    { "@type": "State", name: "Kerala" },
    { "@type": "Country", name: "India" },
  ],
  serviceType: [
    "Web Design",
    "Web Development",
    "UI/UX Design",
    "E-commerce Development",
    "SEO Optimization",
    "Branding",
  ],
  openingHoursSpecification: {
    "@type": "OpeningHoursSpecification",
    dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
    opens: "09:00",
    closes: "18:00",
  },
  sameAs: [
    "https://www.instagram.com/pixiewebs",
    "https://www.linkedin.com/company/pixiewebs",
  ],
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqData.map((faq) => ({
    "@type": "Question",
    name: faq.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: faq.answer,
    },
  })),
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
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />
      </head>
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
