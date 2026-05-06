import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import logo from "@/assets/logo.webp";
import { PlayStoreButton, AppStoreButton } from "./PlayStoreButton";
import { cn } from "@/lib/utils";

const links = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#categories", label: "Categories" },
  { href: "#sessions", label: "Sessions" },
  { href: "#testimonials", label: "Reviews" },
  { href: "#advisors", label: "For Advisors" },
  { href: "#faq", label: "FAQ" },
];

export const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("#home");

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 20);
      const sections = links.map((l) => document.querySelector(l.href));
      const y = window.scrollY + 120;
      for (let i = sections.length - 1; i >= 0; i--) {
        const el = sections[i] as HTMLElement | null;
        if (el && el.offsetTop <= y) {
          setActive(links[i].href);
          break;
        }
      }
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 inset-x-0 z-50 transition-smooth",
        scrolled
          ? "backdrop-blur-xl bg-background/85 border-b border-border shadow-soft"
          : "bg-transparent"
      )}
    >
      <nav className="container flex items-center justify-between h-16 lg:h-20">
        <a href="#home" className="flex items-center gap-2.5 group">
          <div className="relative">
            <div className="absolute inset-0 bg-brand-gradient blur-md opacity-40 group-hover:opacity-70 transition-smooth rounded-full" />
            <img src={logo} alt="Easy Advising logo" className="relative h-10 w-10 rounded-lg bg-white p-0.5" />
          </div>
          <div className={cn("leading-tight transition-smooth", scrolled ? "text-foreground" : "text-white")}>
            <div className="font-extrabold text-lg tracking-tight">Easy Advising</div>
            <div className={cn("text-[10px] uppercase tracking-[0.18em] -mt-0.5", scrolled ? "text-muted-foreground" : "text-white/70")}>
              Talk to experts
            </div>
          </div>
        </a>

        <ul className={cn(
          "hidden lg:flex items-center gap-1 rounded-full p-1.5 border backdrop-blur transition-smooth",
          scrolled ? "bg-secondary/60 border-border/60" : "bg-white/10 border-white/20"
        )}>
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className={cn(
                  "relative px-4 py-2 rounded-full text-sm font-medium transition-smooth",
                  active === l.href
                    ? "text-white bg-brand-gradient shadow-soft"
                    : scrolled
                      ? "text-muted-foreground hover:text-foreground"
                      : "text-white/80 hover:text-white"
                )}
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="hidden lg:flex items-center gap-2">
          <PlayStoreButton className="!py-2 !px-4" />
          <AppStoreButton className="!py-2 !px-4" />
        </div>

        <button
          className={cn(
            "lg:hidden p-2 rounded-lg transition-smooth",
            scrolled ? "text-foreground hover:bg-secondary" : "text-white hover:bg-white/10"
          )}
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? <X /> : <Menu />}
        </button>
      </nav>

      {open && (
        <div className="lg:hidden border-t border-border bg-background/95 backdrop-blur-xl animate-fade-up">
          <ul className="container py-4 flex flex-col gap-1">
            {links.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className={cn(
                    "block py-3 px-4 rounded-xl font-medium transition-smooth",
                    active === l.href
                      ? "bg-brand-gradient text-white"
                      : "hover:bg-secondary"
                  )}
                >
                  {l.label}
                </a>
              </li>
            ))}
            <li className="pt-3 flex flex-wrap gap-3">
              <PlayStoreButton />
              <AppStoreButton />
            </li>
          </ul>
        </div>
      )}
    </header>
  );
};
