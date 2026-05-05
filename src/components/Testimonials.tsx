import { Star, Quote } from "lucide-react";

import img from '../assets/user.png';


const testimonials = [
  {
    name: "Riya Sharma",
    role: "MBBS Student, Delhi",
    avatar: img,
    rating: 5,
    quote:
      "Got instant doubt clarification from a senior doctor at 11 PM before my exam. Paid just the entry fee plus ₹20 for two questions. Game changer!",
  },
  {
    name: "Dr. Aman Verma",
    role: "Cardiologist · Advisor",
    avatar: img,
    rating: 5,
    quote:
      "Easy Advising lets me consult patients in my free time without a clinic overhead. Earned ₹40K in my first month part-time.",
  },
  {
    name: "Sneha Patil",
    role: "Startup Founder, Pune",
    avatar: img,
    rating: 5,
    quote:
      "Spoke to a CA and a corporate lawyer back-to-back before my funding round. Saved me weeks of email back-and-forth.",
  },
  {
    name: "Arjun Iyer",
    role: "GATE Aspirant, Chennai",
    avatar: img,
    rating: 5,
    quote:
      "The IIT mentor I called broke down a tough topology problem in 12 minutes. Better than 3 hours of YouTube.",
  },
  {
    name: "CA Priya Sharma",
    role: "Tax Advisor · Expert",
    avatar: img,
    rating: 5,
    quote:
      "Verification was smooth, payouts hit my account every Friday. Best part — I set my own rates and hours.",
  },
  {
    name: "Karan Mehta",
    role: "Engineering Student, Mumbai",
    avatar: img,
    rating: 5,
    quote:
      "Live webinars are gold. Joined a free founder Q&A and ended up booking a 1:1 the same evening.",
  },
  {
    name: "Anjali Rao",
    role: "Working Professional, Bangalore",
    avatar: img,
    rating: 5,
    quote:
      "The dietitian I consulted built me a full plan over a video call. The flat per-question pricing felt super fair.",
  },
  {
    name: "Adv. Vikram Singh",
    role: "Property Lawyer · Expert",
    avatar: img,
    rating: 5,
    quote:
      "Verified clients, secure calls, no chasing payments. This is what consulting should feel like in 2025.",
  },
];

const Card = ({ t }: { t: (typeof testimonials)[number] }) => (
  <div className="w-[320px] sm:w-[380px] shrink-0 p-7 rounded-3xl bg-card border border-border shadow-card mx-3 flex flex-col">
    <Quote className="h-7 w-7 text-brand-red opacity-70" />
    <p className="mt-4 text-foreground/90 leading-relaxed flex-1">"{t.quote}"</p>
    <div className="flex items-center gap-1 text-yellow-500 mt-5">
      {Array.from({ length: t.rating }).map((_, i) => (
        <Star key={i} className="h-4 w-4 fill-current" />
      ))}
    </div>
    <div className="mt-4 flex items-center gap-3 pt-4 border-t border-border">
      <img src={t.avatar} alt={t.name} className="h-11 w-11 rounded-full object-cover" />
      <div>
        <div className="font-bold text-sm">{t.name}</div>
        <div className="text-xs text-muted-foreground">{t.role}</div>
      </div>
    </div>
  </div>
);

const Row = ({ reverse = false }: { reverse?: boolean }) => {
  const items = reverse ? [...testimonials].reverse() : testimonials;
  return (
    <div className="relative overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_8%,black_92%,transparent)]">
      <div
        className={`flex w-max ${reverse ? "animate-marquee-reverse" : "animate-marquee"}`}
      >
        {[...items, ...items].map((t, i) => (
          <Card key={`${t.name}-${i}`} t={t} />
        ))}
      </div>
    </div>
  );
};

export const Testimonials = () => {
  return (
    <section id="testimonials" className="py-20 lg:py-28 bg-secondary/40 overflow-hidden">
      <div className="container">
        <div className="max-w-2xl mx-auto text-center mb-14">
          <span className="text-sm font-semibold uppercase tracking-wider text-brand-red">
            Testimonials
          </span>
          <h2 className="mt-3 text-3xl sm:text-4xl lg:text-5xl font-extrabold">
            Loved by <span className="text-brand-gradient">students & experts</span> alike
          </h2>
          <p className="mt-4 text-muted-foreground text-lg">
            Real stories from learners getting answers and advisors growing their practice.
          </p>
        </div>
      </div>

      <div className="space-y-6">
        <Row />
        <Row reverse />
      </div>
    </section>
  );
};
