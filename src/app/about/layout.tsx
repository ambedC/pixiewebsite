import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us | Web Design Agency Kochi | Pixie Web Solutions",
  description:
    "Pixie Web Solutions is a creative web design and development agency based in Kochi, Kerala. We build premium digital experiences for businesses that want to stand out online.",
  keywords: [
    "web design agency Kochi",
    "web development company Kerala",
    "digital agency Kochi",
    "website designers Kerala",
    "Pixie Web Solutions team",
    "Next.js agency India",
  ],
  alternates: { canonical: "https://pixiewebs.com/about" },
  openGraph: {
    title: "About Pixie Web Solutions | Web Agency Kochi, Kerala",
    description:
      "Creative web agency based in Kochi, Kerala building premium digital experiences for businesses across India.",
    url: "https://pixiewebs.com/about",
    images: [{ url: "https://pixiewebs.com/images/logo.png", alt: "Pixie Web Solutions" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "About Pixie Web Solutions | Web Agency Kochi",
    description: "Creative web agency based in Kochi, Kerala.",
    images: ["https://pixiewebs.com/images/logo.png"],
  },
};

export default function AboutLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
