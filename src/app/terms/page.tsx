"use client";

import Link from "next/link";
import { ArrowLeft, FileText } from "lucide-react";

const sections = [
  {
    title: "Acceptance of Terms",
    content:
      "By accessing or using pixiewebs.com and our services, you agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use our services.",
  },
  {
    title: "Services Provided",
    content:
      "Pixie Web Solutions provides web design, web development, UI/UX design, branding, SEO, and e-commerce services. The scope and deliverables for each engagement are defined in a separate project agreement or proposal.",
  },
  {
    title: "Payment Terms",
    content:
      "All projects require a 50% deposit before work begins. The remaining balance is due upon project completion and before final files or live deployment are delivered. Milestone-based payments may be arranged for larger projects.",
  },
  {
    title: "Intellectual Property",
    content:
      "Upon full payment, the client owns all rights to the final deliverables. Pixie Web Solutions retains the right to showcase the completed work in our portfolio unless expressly agreed otherwise in writing.",
  },
  {
    title: "Revisions & Scope",
    content:
      "Each package includes a defined number of revision rounds. Changes that fall outside the agreed scope will be quoted and billed separately. Scope changes must be agreed upon in writing before implementation.",
  },
  {
    title: "Limitation of Liability",
    content:
      "Pixie Web Solutions shall not be liable for any indirect, incidental, or consequential damages arising from the use of our services or deliverables. Our total liability shall not exceed the amount paid for the specific project.",
  },
  {
    title: "Termination",
    content:
      "Either party may terminate an engagement with written notice. In the event of termination, the client is responsible for payment of all work completed to that point. The deposit is non-refundable.",
  },
  {
    title: "Governing Law",
    content:
      "These terms are governed by the laws of Kerala, India. Any disputes shall be subject to the exclusive jurisdiction of the courts in Kochi, Kerala.",
  },
  {
    title: "Changes to Terms",
    content:
      "We may update these Terms of Service from time to time. Continued use of our services after changes are posted constitutes acceptance of the revised terms.",
  },
];

export default function TermsPage() {
  return (
    <main className="relative min-h-screen bg-[#fafafa] text-[#1a1a1a]">
      <div className="pt-36 pb-32 px-6 max-w-4xl mx-auto">
        {/* Back link */}
        <Link href="/" className="inline-flex items-center gap-2 text-sm text-gray-500 hover:text-black transition-colors mb-12">
          <ArrowLeft size={16} /> Back to Home
        </Link>

        {/* Header */}
        <div className="mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-black/5 border border-black/10 mb-6">
            <FileText size={14} />
            <span className="text-sm font-medium">Effective Date: May 1, 2025</span>
          </div>
          <h1 className="text-5xl md:text-6xl font-bold tracking-tight mb-6">Terms of Service</h1>
          <p className="text-xl text-gray-500 leading-relaxed max-w-2xl">
            Please read these terms carefully before engaging with Pixie Web Solutions. They govern our relationship and protect both parties.
          </p>
        </div>

        {/* Sections */}
        <div className="space-y-6">
          {sections.map((s, i) => (
            <div key={i} className="p-8 rounded-3xl bg-white border border-black/[0.05] hover:shadow-md transition-all duration-300">
              <h2 className="text-xl font-semibold mb-3">{s.title}</h2>
              <p className="text-gray-500 leading-relaxed">{s.content}</p>
            </div>
          ))}
        </div>

        {/* Contact */}
        <div className="mt-12 p-8 rounded-3xl bg-[#111] text-white">
          <h2 className="text-2xl font-bold mb-3">Questions about our terms?</h2>
          <p className="text-gray-400 mb-6">Reach out and we'll be happy to clarify anything.</p>
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
