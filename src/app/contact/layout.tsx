import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us | Get a Free Quote | Pixie Web Solutions Kochi",
  description:
    "Get in touch with Pixie Web Solutions, Kochi. Request a free web design quote for your business. We serve clients across Kerala and all of India.",
  keywords: [
    "contact web designer Kochi",
    "free web design quote Kerala",
    "hire web developer India",
    "web agency contact Kochi",
    "website quote Kerala",
  ],
  alternates: { canonical: "https://pixiewebs.com/contact" },
  openGraph: {
    title: "Contact Pixie Web Solutions | Free Quote | Kochi, Kerala",
    description:
      "Request a free web design quote. We serve businesses across Kerala and India.",
    url: "https://pixiewebs.com/contact",
    images: [{ url: "https://pixiewebs.com/images/logo.png", alt: "Pixie Web Solutions" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact Pixie Web Solutions | Free Quote",
    description: "Request a free web design quote. Serving Kerala and India.",
    images: ["https://pixiewebs.com/images/logo.png"],
  },
};

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
