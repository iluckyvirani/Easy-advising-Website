import { useState, useEffect } from "react";
import { Briefcase, IndianRupee, Clock, Award, CheckCircle2, ArrowRight } from "lucide-react";
import { toast } from "sonner";
import emailjs from "@emailjs/browser";
import axios from "axios";
import { BASE_URL } from "@/lib/constants";

// Initialize EmailJS
emailjs.init(import.meta.env.VITE_EMAILJS_PUBLIC_KEY);

interface Category {
  id: number;
  name: string;
  icon: string;
  desc: string;
  isActive: boolean;
}

const perks = [
  { icon: IndianRupee, title: "Set your own pricing", text: "You decide your entry fee and per-question fee — keep what works for your expertise." },
  { icon: Clock, title: "Work on your schedule", text: "Go online whenever you're free. No fixed hours." },
  { icon: Award, title: "Build your reputation", text: "Earn ratings, badges and a verified expert profile." },
  { icon: Briefcase, title: "Weekly payouts", text: "Direct bank transfer every Friday. Zero chasing." },
];

export const BecomeAdvisor = () => {
  const [submitted, setSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [categories, setCategories] = useState<Category[]>([]);
  const [loadingCategories, setLoadingCategories] = useState(true);

  useEffect(() => {
    axios
      .get<Category[]>(`${BASE_URL}/api/categories/active`)
      .then((res) => setCategories(res.data))
      .catch((err) => console.error("Failed to fetch categories:", err))
      .finally(() => setLoadingCategories(false));
  }, []);

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const formData = new FormData(e.currentTarget);
      
      const templateParams = {
        to_email: import.meta.env.VITE_EMAILJS_TO_EMAIL,
        name: formData.get("name"),
        email: formData.get("email"),
        phone: formData.get("phone"),
        category: formData.get("category"),
        experience: formData.get("experience"),
        city: formData.get("city"),
        about: formData.get("bio"),
      };

      const apiPayload = {
        name: formData.get("name"),
        email: formData.get("email"),
        phone: formData.get("phone"),
        category: formData.get("category"),
        experience: Number(formData.get("experience")),
        city: formData.get("city"),
        bio: formData.get("bio"),
      };

      // Send both EmailJS and API request in parallel
      const [emailResult, apiResult] = await Promise.all([
        emailjs.send(
          import.meta.env.VITE_EMAILJS_SERVICE_ID,
          import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
          templateParams
        ),
        axios.post(`${BASE_URL}/api/advisor-leads`, apiPayload),
      ]);

      if (emailResult.status === 200 && apiResult.status === 201) {
        setSubmitted(true);
        toast.success("Application received! We'll reach out within 24 hours.");
        (e.target as HTMLFormElement).reset();
        setTimeout(() => setSubmitted(false), 4000);
      }
    } catch (error) {
      console.error("Submission error:", error);
      toast.error("Failed to submit application. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section id="advisors" className="py-20 lg:py-28">
      <div className="container">
        <div className="grid lg:grid-cols-5 gap-12 items-start">
          {/* Left — pitch */}
          <div className="lg:col-span-2">
            <span className="inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-wider text-brand-red">
              <Briefcase className="h-4 w-4" /> For Advisors
            </span>
            <h2 className="mt-3 text-3xl sm:text-4xl lg:text-5xl font-extrabold leading-tight">
              Share your expertise.<br />
              <span className="text-brand-gradient">Get paid for every question.</span>
            </h2>
            <p className="mt-5 text-muted-foreground text-lg">
              Join 200+ verified advisors helping people across India. Start in days, not months.
            </p>

            <div className="mt-8 space-y-4">
              {perks.map(({ icon: Icon, title, text }) => (
                <div key={title} className="flex gap-4">
                  <div className="h-11 w-11 shrink-0 rounded-xl bg-accent text-brand-red flex items-center justify-center">
                    <Icon className="h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="font-bold">{title}</h4>
                    <p className="text-sm text-muted-foreground">{text}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8 p-5 rounded-2xl bg-brand-radial text-white">
              <div className="text-sm opacity-80">Top advisors earn</div>
              <div className="text-3xl font-extrabold mt-1">₹80,000+ / month</div>
              <div className="text-xs opacity-75 mt-1">Working 2–3 hours per day · Verified data</div>
            </div>
          </div>

          {/* Right — form */}
          <div className="lg:col-span-3">
            <div className="relative p-8 sm:p-10 rounded-3xl bg-card border border-border shadow-card">
              <div className="absolute -top-3 -right-3 bg-brand-gradient text-white text-xs font-bold px-3 py-1.5 rounded-full shadow-soft">
                Free to join
              </div>
              <h3 className="text-2xl font-extrabold">Apply to become an advisor</h3>
              <p className="mt-1 text-sm text-muted-foreground">
                Takes 2 minutes. We review every application within 24 hours.
              </p>

              <form onSubmit={onSubmit} className="mt-6 grid sm:grid-cols-2 gap-4">
                <Field label="Full Name" name="name" placeholder="Dr. Priya Sharma" required />
                <Field label="Email" name="email" type="email" placeholder="you@email.com" required />
                <Field label="Phone (WhatsApp)" name="phone" type="tel" placeholder="+91 98765 43210" required />
                <div className="flex flex-col gap-1.5">
                  <label className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                    Category
                  </label>
                  <select
                    name="category"
                    required
                    disabled={loadingCategories}
                    className="px-4 py-3 rounded-xl bg-background border border-border focus:outline-none focus:ring-2 focus:ring-brand-red/40 focus:border-brand-red transition-smooth disabled:opacity-50"
                  >
                    <option value="">{loadingCategories ? "Loading categories..." : "Select a category"}</option>
                    {categories.map((c) => (
                      <option key={c.id} value={c.name}>{c.name}</option>
                    ))}
                  </select>
                </div>
                <Field label="Years of Experience" name="experience" type="number" min={0} placeholder="5" required />
                <Field label="City" name="city" placeholder="Mumbai" required />
                <div className="sm:col-span-2 flex flex-col gap-1.5">
                  <label className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                    Brief about you
                  </label>
                  <textarea
                    name="bio"
                    rows={3}
                    placeholder="Tell us about your expertise, qualifications, and why you want to advise on Easy Advising."
                    className="px-4 py-3 rounded-xl bg-background border border-border focus:outline-none focus:ring-2 focus:ring-brand-red/40 focus:border-brand-red transition-smooth resize-none"
                  />
                </div>

                <div className="sm:col-span-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-3 mt-2">
                  <button
                    type="submit"
                    disabled={submitted || isLoading}
                    className="group inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-2xl bg-brand-gradient text-white font-semibold shadow-soft hover:shadow-glow hover:scale-[1.02] transition-smooth disabled:opacity-70"
                  >
                    {submitted ? (
                      <>
                        <CheckCircle2 className="h-5 w-5" /> Application sent
                      </>
                    ) : isLoading ? (
                      <>
                        <div className="h-5 w-5 animate-spin border-2 border-white border-t-transparent rounded-full" />
                        Sending...
                      </>
                    ) : (
                      <>
                        Submit application
                        <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-smooth" />
                      </>
                    )}
                  </button>
                </div>

                <p className="sm:col-span-2 text-xs text-muted-foreground">
                  By applying, you agree to identity & credential verification. Your information is kept confidential.
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const Field = ({
  label,
  ...props
}: React.InputHTMLAttributes<HTMLInputElement> & { label: string }) => (
  <div className="flex flex-col gap-1.5">
    <label className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
      {label}
    </label>
    <input
      {...props}
      className="px-4 py-3 rounded-xl bg-background border border-border focus:outline-none focus:ring-2 focus:ring-brand-red/40 focus:border-brand-red transition-smooth"
    />
  </div>
);
