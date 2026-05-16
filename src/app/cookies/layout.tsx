import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Cookie Policy | Pixie Web Solutions",
  description:
    "Learn how Pixie Web Solutions uses cookies and similar technologies to improve your browsing experience.",
  alternates: { canonical: "https://pixiewebs.com/cookies" },
  robots: { index: false, follow: false },
};

export default function CookiesLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
