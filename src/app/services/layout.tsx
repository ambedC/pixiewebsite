import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Web Design & Development Services Kochi | Pixie Web Solutions",
  description:
    "Affordable web design and development services in Kochi, Kerala. Packages from ₹5,000. We build fast, SEO-optimised, mobile-friendly websites for businesses across India.",
  keywords: [
    "web design services Kochi",
    "website development Kerala",
    "affordable web design India",
    "UI/UX design Kochi",
    "e-commerce website Kerala",
    "Next.js development India",
    "web agency Kochi",
    "website packages Kerala",
  ],
  alternates: { canonical: "https://pixiewebs.com/services" },
  openGraph: {
    title: "Web Design & Development Services | Pixie Web Solutions Kochi",
    description:
      "Affordable web design packages starting at ₹5,000. Premium websites built for businesses in Kerala and across India.",
    url: "https://pixiewebs.com/services",
    images: [{ url: "https://pixiewebs.com/images/logo.png", alt: "Pixie Web Solutions" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Web Design & Development Services | Pixie Web Solutions",
    description: "Affordable packages from ₹5,000. Premium websites for businesses in Kerala and India.",
    images: ["https://pixiewebs.com/images/logo.png"],
  },
};

export default function ServicesLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
