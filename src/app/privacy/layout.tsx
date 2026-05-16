import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy | Pixie Web Solutions",
  description:
    "Read the Privacy Policy of Pixie Web Solutions. Understand how we collect, use, and protect your personal data.",
  alternates: { canonical: "https://pixiewebs.com/privacy" },
  robots: { index: false, follow: false },
};

export default function PrivacyLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
