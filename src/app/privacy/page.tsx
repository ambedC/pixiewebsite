"use client";

import { motion } from "framer-motion";
import { Sparkles, ArrowLeft, Mail, ShieldCheck, Lock, Eye, Users, Cookie, Globe, Bell, Scale } from "lucide-react";
import Link from "next/link";

export default function PrivacyPolicy() {
  const sections = [
    {
      id: "introduction",
      icon: <Eye className="w-5 h-5 text-purple-400" />,
      title: "Introduction",
      content: "At Pixie Webs, we value your trust and are committed to protecting your personal information. This Privacy Policy explains how we collect, use, and safeguard your data when you interact with our website and services. By using our services, you agree to the practices described in this policy."
    },
    {
      id: "information-we-collect",
      icon: <Users className="w-5 h-5 text-blue-400" />,
      title: "Information We Collect",
      content: "We collect information that you provide directly to us, such as your name, email address, phone number, and details regarding your project inquiries. Additionally, we automatically collect usage analytics and device information (such as browser type and IP address) to improve our website experience."
    },
    {
      id: "how-we-use-information",
      icon: <Sparkles className="w-5 h-5 text-yellow-400" />,
      title: "How We Use Information",
      content: "We use the collected information to provide and improve our services, communicate with you about your inquiries, personalize your experience, and analyze how our website is used. We may also use your contact details to send you important updates or promotional content, which you can opt out of at any time."
    },
    {
      id: "accounts-authentication",
      icon: <Lock className="w-5 h-5 text-green-400" />,
      title: "User Accounts & Authentication",
      content: "If you create an account or use our authentication systems, we securely store your credentials and profile information. We use industry-standard encryption and security protocols to ensure your account remains protected from unauthorized access."
    },
    {
      id: "cookies-analytics",
      icon: <Cookie className="w-5 h-5 text-orange-400" />,
      title: "Cookies & Analytics",
      content: "We use cookies and similar tracking technologies to enhance your browsing experience. These tools help us understand user behavior and optimize our site performance. We use third-party analytics providers to process this data anonymously."
    },
    {
      id: "third-party-services",
      icon: <Globe className="w-5 h-5 text-indigo-400" />,
      title: "Third-Party Services",
      content: "We integrate with trusted third-party providers for services such as hosting, authentication, payment processing, and cloud infrastructure. These partners have their own privacy policies, and we recommend reviewing them to understand how they handle your data."
    },
    {
      id: "international-data",
      icon: <Globe className="w-5 h-5 text-cyan-400" />,
      title: "International Data Usage",
      content: "As a global service, your information may be transferred to and processed in countries other than your own. We ensure that such transfers comply with applicable data protection laws and that your information remains adequately protected."
    },
    {
      id: "data-security",
      icon: <ShieldCheck className="w-5 h-5 text-red-400" />,
      title: "Data Security",
      content: "We implement robust technical and organizational measures to protect your data. While we strive to use commercially acceptable means to protect your personal information, no method of transmission over the Internet is 100% secure."
    },
    {
      id: "user-rights",
      icon: <Scale className="w-5 h-5 text-purple-400" />,
      title: "User Rights",
      content: "You have the right to access, correct, or delete your personal information. If you wish to exercise these rights or have any questions about your data, please contact us using the information provided below."
    },
    {
      id: "data-retention",
      icon: <Bell className="w-5 h-5 text-blue-400" />,
      title: "Data Retention",
      content: "We retain your personal information only for as long as necessary to fulfill the purposes for which it was collected, including legal, accounting, or reporting requirements."
    },
    {
      id: "childrens-privacy",
      icon: <Users className="w-5 h-5 text-pink-400" />,
      title: "Children's Privacy",
      content: "Our services are not intended for individuals under the age of 13. We do not knowingly collect personal information from children. If we become aware that a child has provided us with data, we will take steps to delete it immediately."
    },
    {
      id: "changes-to-policy",
      icon: <Bell className="w-5 h-5 text-yellow-400" />,
      title: "Changes to This Policy",
      content: "We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new policy on this page and updating the 'Effective Date' at the top."
    },
  ];

  return (
    <main className="relative min-h-screen overflow-hidden bg-[#050505] text-white selection:bg-purple-500/30">
      {/* Background Orbs */}
      <div className="absolute top-0 -left-1/4 w-[500px] h-[500px] bg-purple-600/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 -right-1/4 w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-[120px] pointer-events-none" />

      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 px-6 py-6 border-b border-white/5 backdrop-blur-md">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <Link href="/" className="flex items-center gap-2 group">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-purple-500 to-blue-500 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
              <Sparkles className="w-6 h-6 text-white" />
            </div>
            <span className="text-xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-white to-white/70">
              Pixie Webs
            </span>
          </Link>
          
          <div className="flex items-center gap-4 text-sm font-medium">
             <Link href="/" className="flex items-center gap-2 text-white/60 hover:text-white transition-colors">
                <ArrowLeft className="w-4 h-4" />
                Back to Home
             </Link>
          </div>
        </div>
      </nav>

      {/* Content */}
      <div className="pt-40 pb-32 px-6">
        <div className="max-w-4xl mx-auto">
          {/* Hero Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-20"
          >
            <span className="px-4 py-1.5 rounded-full border border-white/10 bg-white/5 text-sm font-medium text-purple-400 mb-6 inline-block">
              Effective Date: May 8, 2024
            </span>
            <h1 className="text-5xl md:text-7xl font-bold tracking-tighter mb-8 bg-clip-text text-transparent bg-gradient-to-b from-white to-white/40">
              Privacy <span className="italic font-serif">Policy</span>
            </h1>
            <p className="text-xl text-white/50 max-w-2xl leading-relaxed">
              Transparent, simple, and committed to your security. Here's how we handle your information at Pixie Webs.
            </p>
          </motion.div>

          {/* Policy Sections */}
          <div className="grid gap-8">
            {sections.map((section, i) => (
              <motion.div
                key={section.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="p-8 md:p-10 rounded-3xl border border-white/5 bg-white/5 hover:border-purple-500/30 transition-colors group relative overflow-hidden"
              >
                <div className="flex items-start gap-6 relative z-10">
                   <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform duration-500">
                      {section.icon}
                   </div>
                   <div>
                      <h2 className="text-2xl font-bold mb-4">{section.title}</h2>
                      <p className="text-white/60 leading-relaxed text-lg">
                        {section.content}
                      </p>
                   </div>
                </div>
                {/* Subtle Hover Effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </motion.div>
            ))}

            {/* Contact Section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="p-8 md:p-12 rounded-[2.5rem] bg-gradient-to-br from-purple-600/20 to-blue-600/20 border border-white/10 relative overflow-hidden group"
            >
               <div className="relative z-10">
                  <h2 className="text-3xl font-bold mb-6">Contact Information</h2>
                  <p className="text-white/70 text-lg mb-8 leading-relaxed">
                    If you have any questions or concerns regarding this Privacy Policy or our data practices, please feel free to reach out to us.
                  </p>
                  <a 
                    href="mailto:pixiewebsolution@gmail.com" 
                    className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-white text-black font-bold hover:scale-105 transition-transform"
                  >
                    <Mail className="w-5 h-5" />
                    pixiewebsolution@gmail.com
                  </a>
               </div>
               {/* Decorative Gradient Orb */}
               <div className="absolute -bottom-1/2 -right-1/4 w-64 h-64 bg-purple-500/20 rounded-full blur-3xl" />
            </motion.div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="py-12 px-6 border-t border-white/5 text-white/40">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex items-center gap-2">
            <Sparkles className="w-5 h-5 text-purple-500" />
            <span className="font-bold text-white">Pixie Webs</span>
          </div>
          <div className="flex gap-8 text-sm">
            <Link href="#" className="hover:text-white transition-colors">Twitter</Link>
            <Link href="#" className="hover:text-white transition-colors">LinkedIn</Link>
            <Link href="#" className="hover:text-white transition-colors">Instagram</Link>
            <Link href="/privacy" className="hover:text-white transition-colors underline underline-offset-4 decoration-white/10">Privacy Policy</Link>
          </div>
          <p className="text-sm">
            © 2024 Pixie Web Solutions. All rights reserved.
          </p>
        </div>
      </footer>
    </main>
  );
}
