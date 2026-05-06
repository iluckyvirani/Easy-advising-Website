import { Star, ShieldCheck } from "lucide-react";
import { PlayStoreButton, AppStoreButton } from "./PlayStoreButton";
import heroPhone from "@/assets/screen-experts.png";

export const Hero = () => {
  return (
    <section id="home" className="relative pt-28 pb-20 lg:pt-36 lg:pb-28 overflow-hidden bg-brand-radial text-white">
      <div className="absolute inset-0 opacity-30 pointer-events-none [background-image:radial-gradient(circle_at_1px_1px,white_1px,transparent_0)] [background-size:32px_32px]" />
      <div className="container relative grid lg:grid-cols-2 gap-12 items-center">
        <div className="animate-fade-up">
          <span className="inline-flex items-center gap-2 rounded-full bg-white/10 backdrop-blur px-4 py-1.5 text-xs font-medium border border-white/20">
            <ShieldCheck className="h-3.5 w-3.5" /> Verified Experts · Secure Sessions
          </span>
          <h1 className="mt-6 text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-[1.05]">
            Join live Sessions.<br />
            <span className="bg-gradient-to-r from-[hsl(354_90%_70%)] via-white to-[hsl(20_90%_70%)] bg-clip-text text-transparent">
              Ask Anything. Connect with experts & creators.
            </span>
          </h1>
          <p className="mt-6 text-lg text-white/80 max-w-xl">
            Easy Advising is a platform where experts and creators host live webinars, run interactive sessions, and connect 1-on-1 with you.          </p>

          <div className="mt-8 flex flex-wrap items-center gap-4">
            <PlayStoreButton variant="light" />
            <AppStoreButton variant="light" />
            <a href="#sessions" className="inline-flex items-center px-5 py-3 rounded-2xl border border-white/30 hover:bg-white/10 transition-smooth font-medium">
              Browse live sessions
            </a>
          </div>

         <div className="mt-10 flex items-center gap-6">
  <div className="flex -space-x-3">
    {[
      "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg",
      "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg",
      "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg",
      "https://images.pexels.com/photos/762020/pexels-photo-762020.jpeg",
    ].map((src, index) => (
      <img
        key={index}
        src={src}
        alt={`Indian user ${index + 1}`}
        className="h-10 w-10 rounded-full border-2 border-background object-cover"
      />
    ))}
  </div>

  <div>
    <div className="flex items-center gap-1 text-yellow-300">
      {Array.from({ length: 5 }).map((_, i) => (
        <Star key={i} className="h-4 w-4 fill-current" />
      ))}
      <span className="ml-1 text-sm font-semibold text-white">4.8</span>
    </div>

    <p className="text-xs text-white/70">
      Trusted by 50,000+ users across India
    </p>
  </div>
</div>
        </div>

        <div className="relative flex justify-center lg:justify-end animate-fade-up [animation-delay:200ms]">
          <div className="absolute -inset-10 bg-gradient-to-tr from-brand-red/30 to-primary/30 blur-3xl rounded-full" />
          <img
            src={heroPhone}
            alt="Easy Advising app screenshot showing verified advisors"
            className="relative w-[280px] sm:w-[340px] lg:w-[380px] animate-float drop-shadow-2xl"
          />
        </div>
      </div>
    </section>
  );
};
