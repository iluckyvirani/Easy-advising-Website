import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { HelpCircle, Mail, MessageCircle, Sparkles } from "lucide-react";
import { SUPPORT_EMAIL, WHATSAPP_URL } from "@/lib/constants";

const faqs = [
  {
    q: "How does pricing work on Easy Advising?",
    a: "Each session has two simple components: a one-time entry fee to start the session with the advisor, and a flat per-question fee for every question you ask. Both amounts are set by the advisor and shown clearly on their profile before you connect — no per-minute timers, no surprise totals.",
  },
  {
    q: "What types of sessions can I have?",
    a: "Three formats: Audio calls (voice-only, fastest to start), Video calls (HD in-app, secure for face-to-face advice), and Live Webinars (one-to-many sessions, sometimes free). You can also schedule a session for later instead of going instant.",
  },
  {
    q: "How is billing calculated?",
    a: "When the session connects, the entry fee is deducted from your wallet. After that, each question you submit deducts the per-question fee. You'll see the running total live during the session, and you can end the session any time.",
  },
  {
    q: "What is your refund policy?",
    a: "If a call drops due to a technical issue before you get value, the entry fee and any unused question fees are auto-refunded to your wallet within 24 hours. Unsatisfied with a session? Raise a dispute within 48 hours from the call history screen and our support team reviews every case fairly.",
  },
  {
    q: "How do I get started?",
    a: "Three steps: 1) Download Easy Advising from the Play Store, 2) Sign up with your phone number and add wallet balance (UPI, cards, net banking), 3) Pick a category, choose an advisor, pay the entry fee and start asking questions. You can be on a session with an expert in under 60 seconds.",
  },
  {
    q: "Are the advisors really verified?",
    a: "Yes. Every advisor goes through identity verification (Aadhaar/PAN), credential checks (degrees, licenses, certifications), and a skill screening before being listed. You'll see a green verified badge on their profile.",
  },
  {
    q: "Is my conversation private and secure?",
    a: "All calls are end-to-end encrypted and never recorded by Easy Advising. Your phone number is never shared with the advisor — calls route through our secure infrastructure.",
  },
  {
    q: "Can I become an advisor on the platform?",
    a: "Absolutely. Tap 'Become an Advisor' in the footer or from the app menu. Submit your credentials, complete the verification process, set your entry fee and per-question fee, and start earning. Payouts happen weekly to your bank account.",
  },
];

export const FAQ = () => {
  return (
    <section id="faq" className="py-20 lg:py-28">
      <div className="container">
        <div className="max-w-3xl mx-auto text-center mb-14">
          <span className="inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-wider text-brand-red">
            <HelpCircle className="h-4 w-4" /> FAQ
          </span>
          <h2 className="mt-3 text-3xl sm:text-4xl lg:text-5xl font-extrabold">
            Everything you need to <span className="text-brand-gradient">know</span>
          </h2>
          <p className="mt-4 text-muted-foreground text-lg">
            Quick answers about pricing, sessions, billing, refunds, and getting started.
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((f, i) => (
              <AccordionItem
                key={i}
                value={`item-${i}`}
                className="bg-card border border-border rounded-2xl px-6 shadow-card data-[state=open]:shadow-soft data-[state=open]:border-brand-red/30 transition-smooth"
              >
                <AccordionTrigger className="text-left font-bold text-base sm:text-lg hover:no-underline py-5">
                  {f.q}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground text-base leading-relaxed pb-5">
                  {f.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>

        <div className="mt-14 max-w-3xl mx-auto">
          <div className="relative overflow-hidden rounded-3xl bg-brand-radial p-8 sm:p-10 text-white shadow-glow">
            <div className="absolute inset-0 opacity-20 [background-image:radial-gradient(circle_at_1px_1px,white_1px,transparent_0)] [background-size:28px_28px]" />
            <div className="relative flex flex-col md:flex-row md:items-center gap-6 md:gap-8">
              <div className="flex-1">
                <span className="inline-flex items-center gap-2 bg-white/15 backdrop-blur px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider">
                  <Sparkles className="h-3.5 w-3.5" /> We're here to help
                </span>
                <h3 className="mt-3 text-2xl sm:text-3xl font-extrabold leading-tight">
                  Didn't find your answer? Ask us directly.
                </h3>
                <p className="mt-2 text-white/80">
                  Our support team usually replies within a few hours.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row md:flex-col gap-3 md:min-w-[220px]">
                <a
                  href={`mailto:${SUPPORT_EMAIL}?subject=${encodeURIComponent(
                    "Question about Easy Advising"
                  )}&body=${encodeURIComponent("Hi team,\n\nI have a question about ")}`}
                  className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-2xl bg-white text-foreground font-semibold shadow-soft hover:scale-[1.03] transition-smooth"
                >
                  <Mail className="h-4 w-4" /> Ask a question
                </a>
                {/* {WHATSAPP_URL && (
                  <a
                    href={WHATSAPP_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-2xl bg-[#25D366] text-white font-semibold shadow-soft hover:scale-[1.03] transition-smooth"
                  >
                    <MessageCircle className="h-4 w-4" /> Chat on WhatsApp
                  </a>
                )} */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
