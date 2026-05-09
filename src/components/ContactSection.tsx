import React from "react";
import { Contact2 } from "@/components/ui/contact-2";

export function ContactSection() {
  return (
    <section className="relative z-30 w-full overflow-hidden rounded-t-[3rem] shadow-[0_-20px_50px_rgba(0,0,0,0.05)] -mt-10 bg-white">
      <Contact2 
        title="Get in Touch"
        description="Have a project in mind? We'd love to help you build something amazing. Reach out to us through any of the channels below."
        phone="+1 (555) 000-0000"
        email="hello@pixiewebs.com"
        web={{ label: "pixiewebs.com", url: "https://pixiewebs.com" }}
      />
    </section>
  );
}
