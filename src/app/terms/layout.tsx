import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service | Pixie Web Solutions",
  description:
    "Read the Terms of Service for using Pixie Web Solutions' website and digital services.",
  alternates: { canonical: "https://pixiewebs.com/terms" },
  robots: { index: false, follow: false },
};

export default function TermsLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
