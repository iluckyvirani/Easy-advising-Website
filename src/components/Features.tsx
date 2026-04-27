import audio from "@/assets/screen-audio.webp";
import video from "@/assets/screen-video.webp";
import billing from "@/assets/screen-billing.webp";

const features = [
  {
    img: audio,
    tag: "Audio Calls",
    title: "Voice-to-voice expert advice",
    text: "Crystal-clear instant or scheduled audio calls with any verified advisor. Perfect when you need quick guidance on the go.",
  },
  {
    img: video,
    tag: "Video Sessions",
    title: "Private & secure video consultations",
    text: "End-to-end encrypted, HD in-app video calls. See your advisor, share documents, and get face-to-face clarity.",
  },
  // {
  //   img: billing,
  //   tag: "Entry + Per-Question Fee",
  //   title: "Predictable, upfront pricing",
  //   text: "Pay a small entry fee to start the session, then a flat per-question fee for each question you ask. No timers, no surprises — you always know what you'll pay.",
  // },
];

export const Features = () => {
  return (
    <section id="features" className="py-20 lg:py-28 bg-secondary/40">
      <div className="container">
        <div className="max-w-2xl mx-auto text-center mb-16">
          <span className="text-sm font-semibold uppercase tracking-wider text-brand-red">Features</span>
          <h2 className="mt-3 text-3xl sm:text-4xl lg:text-5xl font-extrabold">
            Built for <span className="text-brand-gradient">real conversations</span>
          </h2>
        </div>

        <div className="space-y-24">
          {features.map((f, i) => (
            <div
              key={f.tag}
              className={`grid lg:grid-cols-2 gap-12 lg:gap-16 items-center ${i % 2 ? "lg:[direction:rtl]" : ""}`}
            >
              <div className="relative flex justify-center lg:[direction:ltr]">
                <div className="absolute inset-0 bg-brand-gradient opacity-20 blur-3xl rounded-full" />
                <img src={f.img} alt={f.title} className="relative w-[260px] sm:w-[300px] drop-shadow-2xl rounded-3xl" />
              </div>
              <div className="lg:[direction:ltr]">
                <span className="inline-block text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full bg-brand-red/10 text-brand-red">
                  {f.tag}
                </span>
                <h3 className="mt-4 text-2xl sm:text-3xl lg:text-4xl font-extrabold">{f.title}</h3>
                <p className="mt-4 text-muted-foreground text-lg leading-relaxed">{f.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
