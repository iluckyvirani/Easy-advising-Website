import { Target, Users, Sparkles } from "lucide-react";

export const About = () => {
  return (
    <section id="about" className="py-20 lg:py-28">
      <div className="container">
        <div className="max-w-3xl mx-auto text-center">
          <span className="text-sm font-semibold uppercase tracking-wider text-brand-red">About Us</span>
          <h2 className="mt-3 text-3xl sm:text-4xl lg:text-5xl font-extrabold">
            India's most trusted platform <span className="text-brand-gradient">for live webinars, sessions & expert</span> connections
          </h2>
          <p className="mt-5 text-lg text-muted-foreground">
            Join live webinars, ask questions in sessions, or connect 1-on-1 with experts and creators all in one simple platform. just real conversations when you need them.          </p>
        </div>

        <div className="mt-14 grid md:grid-cols-3 gap-6">
          {[
            { icon: Target, title: "Our Mission", text: "Make professional advice instantly accessible to every Indian, regardless of city or schedule." },
            { icon: Users, title: "Verified Network", text: "Every advisor is identity-verified and skill-screened before joining the platform." },
            { icon: Sparkles, title: "Fair Billing", text: "Small entry fee + flat per-question fee. No subscriptions, no surprise charges, ever." },
          ].map(({ icon: Icon, title, text }) => (
            <div key={title} className="group relative p-8 rounded-3xl bg-card border border-border shadow-card hover:shadow-glow hover:-translate-y-1 transition-smooth">
              <div className="h-14 w-14 rounded-2xl bg-brand-gradient flex items-center justify-center text-white mb-5">
                <Icon className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-bold">{title}</h3>
              <p className="mt-2 text-muted-foreground">{text}</p>
            </div>
          ))}
        </div>

        <div className="mt-16 grid grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            ["50K+", "Active Users"],
            ["1,200+", "Verified Experts"],
            ["12", "Categories"],
            ["4.8★", "App Rating"],
          ].map(([n, l]) => (
            <div key={l} className="text-center p-6 rounded-2xl bg-secondary">
              <div className="text-3xl lg:text-4xl font-extrabold text-brand-gradient">{n}</div>
              <div className="mt-1 text-sm text-muted-foreground font-medium">{l}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
