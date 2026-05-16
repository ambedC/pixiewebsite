"use client";

import Link from "next/link";
import { ArrowLeft, Cookie } from "lucide-react";

const sections = [
  {
    title: "What Are Cookies?",
    content:
      "Cookies are small text files placed on your device by websites you visit. They are widely used to make websites work more efficiently and provide information to site owners.",
  },
  {
    title: "How We Use Cookies",
    content:
      "We use cookies to understand how visitors interact with our website, remember your preferences, and improve overall performance. We do not use cookies to collect personally identifiable information without your consent.",
  },
  {
    title: "Types of Cookies We Use",
    content:
      "Essential cookies: Required for the website to function correctly. Analytics cookies: Help us understand page usage and visitor behaviour (e.g., Google Analytics). Preference cookies: Remember your settings and choices for a better experience.",
  },
  {
    title: "Third-Party Cookies",
    content:
      "Some of our pages may include content from third-party services (such as embedded maps or analytics providers) that may set their own cookies. We do not control these cookies and recommend reviewing those providers' policies.",
  },
  {
    title: "Managing Cookies",
    content:
      "You can control and delete cookies through your browser settings. Disabling cookies may affect the functionality of our website. Most browsers allow you to refuse or delete cookies via the settings menu.",
  },
  {
    title: "Changes to This Policy",
    content:
      "We may update this Cookie Policy from time to time. Any changes will be posted on this page with an updated effective date.",
  },
];

export default function CookiesPage() {
  return (
    <main className="relative min-h-screen bg-[#fafafa] text-[#1a1a1a]">
      <div className="pt-36 pb-32 px-6 max-w-4xl mx-auto">
        <Link href="/" className="inline-flex items-center gap-2 text-sm text-gray-500 hover:text-black transition-colors mb-12">
          <ArrowLeft size={16} /> Back to Home
        </Link>

        <div className="mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-black/5 border border-black/10 mb-6">
            <Cookie size={14} />
            <span className="text-sm font-medium">Effective Date: May 1, 2025</span>
          </div>
          <h1 className="text-5xl md:text-6xl font-bold tracking-tight mb-6">Cookie Policy</h1>
          <p className="text-xl text-gray-500 leading-relaxed max-w-2xl">
            We believe in transparency. Here's exactly how we use cookies on pixiewebs.com.
          </p>
        </div>

        <div className="space-y-6">
          {sections.map((s, i) => (
            <div key={i} className="p-8 rounded-3xl bg-white border border-black/[0.05] hover:shadow-md transition-all duration-300">
              <h2 className="text-xl font-semibold mb-3">{s.title}</h2>
              <p className="text-gray-500 leading-relaxed">{s.content}</p>
            </div>
          ))}
        </div>

        <div className="mt-12 p-8 rounded-3xl bg-[#111] text-white">
          <h2 className="text-2xl font-bold mb-3">Questions about cookies?</h2>
          <p className="text-gray-400 mb-6">We're happy to help clarify our data practices.</p>
          <a
            href="mailto:hello@pixiewebs.com"
            className="inline-flex items-center gap-2 bg-white text-black px-6 py-3 rounded-full font-medium hover:scale-105 transition-transform"
          >
            hello@pixiewebs.com
          </a>
        </div>
      </div>
    </main>
  );
}
