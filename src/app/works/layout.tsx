import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Our Work & Portfolio | Web Design Projects Kerala | Pixie Web Solutions",
  description:
    "Explore Pixie Web Solutions' portfolio of premium websites and digital experiences built for startups, SMEs, and enterprises across Kerala and India.",
  keywords: [
    "web design portfolio Kerala",
    "website projects Kochi",
    "Next.js projects India",
    "digital agency portfolio Kerala",
    "UI/UX design showcase",
    "e-commerce projects Kerala",
  ],
  alternates: { canonical: "https://pixiewebs.com/works" },
  openGraph: {
    title: "Our Work & Portfolio | Pixie Web Solutions",
    description:
      "Premium websites and digital experiences built for businesses across Kerala and India.",
    url: "https://pixiewebs.com/works",
    images: [{ url: "https://pixiewebs.com/images/logo.png", alt: "Pixie Web Solutions" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Our Work & Portfolio | Pixie Web Solutions",
    description: "Premium websites built for businesses across Kerala and India.",
    images: ["https://pixiewebs.com/images/logo.png"],
  },
};

export default function WorksLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
