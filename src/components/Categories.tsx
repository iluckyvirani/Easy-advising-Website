import { useEffect, useState } from "react";
import axios from "axios";
import {
  Sparkles, Brain, Briefcase, TrendingUp,
  Plane, Palette, Code2, Gamepad2, LucideIcon
} from "lucide-react";
import { BASE_URL } from "@/lib/constants";

const iconMap: Record<string, LucideIcon> = {
  Brain,
  Briefcase,
  TrendingUp,
  Plane,
  Palette,
  Code2,
  Gamepad2,
  Sparkles,
};

interface Category {
  id: number;
  icon: string;
  name: string;
  desc: string;
  isActive: boolean;
}

export const Categories = () => {
  const [categories, setCategories] = useState<Category[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get<Category[]>(`${BASE_URL}/api/categories/active`)
      .then((res) => setCategories(res.data))
      .catch((err) => console.error("Failed to fetch categories:", err))
      .finally(() => setLoading(false));
  }, []);

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
          {loading
            ? Array.from({ length: 6 }).map((_, i) => (
                <div
                  key={i}
                  className="p-6 rounded-2xl bg-card border border-border shadow-card animate-pulse"
                >
                  <div className="h-12 w-12 rounded-xl bg-accent" />
                  <div className="mt-4 h-5 w-2/3 rounded bg-accent" />
                  <div className="mt-2 h-4 w-full rounded bg-accent" />
                </div>
              ))
            : categories.map(({ id, icon, name, desc }) => {
                const Icon = iconMap[icon] ?? Sparkles;
                return (
                  <div
                    key={id}
                    className="group p-6 rounded-2xl bg-card border border-border hover:border-brand-red/40 hover:-translate-y-1 transition-smooth cursor-pointer shadow-card"
                  >
                    <div className="h-12 w-12 rounded-xl bg-accent text-brand-red flex items-center justify-center group-hover:bg-brand-gradient group-hover:text-white transition-smooth">
                      <Icon className="h-6 w-6" />
                    </div>
                    <h3 className="mt-4 font-bold text-lg">{name}</h3>
                    <p className="text-sm text-muted-foreground mt-1">{desc}</p>
                  </div>
                );
              })}
        </div>
      </div>
    </section>
  );
};
