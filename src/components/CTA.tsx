import { PlayStoreButton } from "./PlayStoreButton";

export const CTA = () => {
  return (
    <section className="py-20 lg:py-24">
      <div className="container">
        <div className="relative overflow-hidden rounded-[2rem] bg-brand-radial p-10 sm:p-14 lg:p-20 text-center text-white shadow-glow">
          <div className="absolute inset-0 opacity-20 [background-image:radial-gradient(circle_at_1px_1px,white_1px,transparent_0)] [background-size:32px_32px]" />
          <div className="relative max-w-2xl mx-auto">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold leading-tight">
              Get answers from real experts today.
            </h2>
            <p className="mt-5 text-white/85 text-lg">
              Download Easy Advising on the Play Store and start your first session in under 60 seconds.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <PlayStoreButton variant="light" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
