import {
  Sparkles, Brain, Briefcase, TrendingUp,
  Plane, Palette, Code2
} from "lucide-react";

const categories = [
  {
    icon: Sparkles,
    name: "Spirituality",
    desc: "Meditation, mindfulness, personal growth"
  },
  {
    icon: Brain,
    name: "Psychologist",
    desc: "Mental health, therapy, emotional wellbeing"
  },
  {
    icon: Briefcase,
    name: "Career",
    desc: "Jobs, skills, interview guidance, growth"
  },
  {
    icon: TrendingUp,
    name: "Finance & E-sports",
    desc: "Investing, trading, gaming industry insights"
  },
  {
    icon: Plane,
    name: "Travel",
    desc: "Destinations, planning, experiences"
  },
  {
    icon: Palette,
    name: "Creators",
    desc: "Content creation, design, social media"
  },
  {
    icon: Code2,
    name: "Other",
    desc: "Web, mobile, cloud, DevOps"
  },
];


export const Categories = () => {
  return (
    <section id="categories" className="py-20 lg:py-28 bg-secondary/40">
      <div className="container">
        <div className="max-w-2xl mx-auto text-center">
          <span className="text-sm font-semibold uppercase tracking-wider text-brand-red">Categories</span>
          <h2 className="mt-3 text-3xl sm:text-4xl lg:text-5xl font-extrabold">
            Experts & advisors across <span className="text-brand-gradient">every field</span> that matters
          </h2>
          <p className="mt-4 text-muted-foreground text-lg">
            Browse categories, find advisors, and connect in seconds.
          </p>
        </div>

        <div className="mt-14 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-5">
          {categories.map(({ icon: Icon, name, desc }) => (
            <div
              key={name}
              className="group p-6 rounded-2xl bg-card border border-border hover:border-brand-red/40 hover:-translate-y-1 transition-smooth cursor-pointer shadow-card"
            >
              <div className="h-12 w-12 rounded-xl bg-accent text-brand-red flex items-center justify-center group-hover:bg-brand-gradient group-hover:text-white transition-smooth">
                <Icon className="h-6 w-6" />
              </div>
              <h3 className="mt-4 font-bold text-lg">{name}</h3>
              <p className="text-sm text-muted-foreground mt-1">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
