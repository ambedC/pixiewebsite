import React from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Phone, Mail, Globe } from "lucide-react";

interface Contact2Props {
  title?: string;
  description?: string;
  phone?: string;
  email?: string;
  web?: { label: string; url: string };
}

export const Contact2 = ({
  title = "Contact Us",
  description = "We are available for questions, feedback, or collaboration opportunities. Let us know how we can help!",
  phone = "(123) 34567890",
  email = "email@example.com",
  web = { label: "shadcnblocks.com", url: "https://shadcnblocks.com" },
}: Contact2Props) => {
  return (
    <section className="py-32 bg-white">
      <div className="container mx-auto px-6 max-w-screen-xl">
        <div className="text-center max-w-3xl mx-auto mb-24">
          <h1 className="mb-6 text-5xl font-semibold lg:text-7xl text-neutral-900 tracking-tight">
            {title}
          </h1>
          <p className="text-xl text-neutral-600 leading-relaxed">{description}</p>
        </div>

        {/* Form Container */}
        <div className="mx-auto max-w-3xl rounded-[3rem] border border-neutral-200 bg-white p-8 md:p-16 shadow-xl shadow-neutral-100/50 mb-24">
          <form className="flex flex-col gap-8">
            <div className="flex flex-col sm:flex-row gap-8">
              <div className="grid w-full gap-3">
                <Label htmlFor="firstname" className="text-neutral-900 font-semibold ml-1">First Name</Label>
                <Input type="text" id="firstname" placeholder="John" className="h-14 rounded-2xl border-neutral-100 bg-neutral-50/50 px-6 focus:bg-white transition-all" />
              </div>
              <div className="grid w-full gap-3">
                <Label htmlFor="lastname" className="text-neutral-900 font-semibold ml-1">Last Name</Label>
                <Input type="text" id="lastname" placeholder="Doe" className="h-14 rounded-2xl border-neutral-100 bg-neutral-50/50 px-6 focus:bg-white transition-all" />
              </div>
            </div>
            
            <div className="grid w-full gap-3">
              <Label htmlFor="email" className="text-neutral-900 font-semibold ml-1">Email Address</Label>
              <Input type="email" id="email" placeholder="john@example.com" className="h-14 rounded-2xl border-neutral-100 bg-neutral-50/50 px-6 focus:bg-white transition-all" />
            </div>

            <div className="grid w-full gap-3">
              <Label htmlFor="message" className="text-neutral-900 font-semibold ml-1">Your Message</Label>
              <Textarea 
                placeholder="Tell us about your project..." 
                id="message" 
                className="rounded-2xl border-neutral-100 bg-neutral-50/50 p-6 focus:bg-white transition-all min-h-[180px] resize-none" 
              />
            </div>

            <div className="pt-4">
              <Button className="w-full h-16 rounded-2xl text-xl font-bold bg-neutral-900 hover:bg-neutral-800 text-white transition-all shadow-lg shadow-neutral-200">
                Send Message
              </Button>
            </div>
          </form>
        </div>

        {/* Contact Details Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-4xl mx-auto">
          <div className="flex flex-col items-center text-center p-8 rounded-3xl bg-neutral-50 border border-neutral-100 transition-all hover:shadow-md">
            <div className="h-14 w-14 rounded-2xl bg-white flex items-center justify-center shadow-sm mb-6">
              <Phone className="h-6 w-6 text-neutral-900" />
            </div>
            <h3 className="text-sm uppercase tracking-[0.2em] font-bold text-neutral-400 mb-3">Phone</h3>
            <p className="text-xl font-medium text-neutral-900">{phone}</p>
          </div>

          <div className="flex flex-col items-center text-center p-8 rounded-3xl bg-neutral-50 border border-neutral-100 transition-all hover:shadow-md">
            <div className="h-14 w-14 rounded-2xl bg-white flex items-center justify-center shadow-sm mb-6">
              <Mail className="h-6 w-6 text-neutral-900" />
            </div>
            <h3 className="text-sm uppercase tracking-[0.2em] font-bold text-neutral-400 mb-3">Email</h3>
            <a href={`mailto:${email}`} className="text-xl font-medium text-neutral-900 underline underline-offset-4 decoration-neutral-200 hover:decoration-neutral-900 transition-all">
              {email}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
