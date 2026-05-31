import logo from "@/assets/logo.webp";
import { Mail, Twitter, Instagram, Facebook, Linkedin } from "lucide-react";
import { Link } from "react-router-dom";

type FooterLink = { label: string; href: string; external?: boolean };


const socialLinks = [
  {
    Icon: Instagram,
    url: "https://www.instagram.com/easy.advising.app?igsh=a280MTl5dzR0N250",
  },
  {
    Icon: Linkedin,
    url: "https://www.linkedin.com/company/easy-advising/", // replace with your real LinkedIn page
  },
];


export const Footer = () => {
  return (
    <footer className="bg-foreground text-background pt-16 pb-8">
      <div className="container grid md:grid-cols-2 lg:grid-cols-4 gap-10">
        <div>
          <div className="flex items-center gap-2">
            <img src={logo} alt="Easy Advising" className="h-10 w-10 rounded-lg bg-white" />
            <span className="font-bold text-xl">Easy Advising</span>
          </div>
          <p className="mt-4 text-sm text-background/70 max-w-xs">
            Easy Advising is a platform where experts and creators host live webinars, run interactive sessions, and connect 1-on-1 with you.
          </p>
          <div className="mt-5 flex gap-3">
            {socialLinks.map(({ Icon, url }, i) => (
              <a
                key={i}
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                data-track-name={`Social Link ${i + 1}`}
                data-track-category="Footer"
                className="h-9 w-9 rounded-full bg-background/10 hover:bg-brand-red flex items-center justify-center transition-smooth"
                aria-label="Social media"
              >
                <Icon className="h-4 w-4" />
              </a>
            ))}
          </div>
        </div>

        {([
          {
            title: "Product",
            links: [
              { label: "Home", href: "/#home" },
              { label: "About", href: "/#about" },
              { label: "Categories", href: "/#categories" },
              { label: "Live Sessions", href: "/#sessions" },
              { label: "Features", href: "/#features" },
            ],
          },
          {
            title: "For Experts",
            links: [
              { label: "Become an Advisor", href: "/#advisors" },
              { label: "Verification", href: "/#advisors" },
              { label: "Earnings", href: "/#advisors" },
              { label: "Resources", href: "/#advisors" },
            ],
          },
          {
            title: "Support",
            links: [
              { label: "Help Center", href: "/#faq" },
              { label: "Privacy Policy", href: "/privacy-policy" },
              { label: "Terms & Conditions", href: "/terms" },
              { label: "Refund Policy", href: "/refund-policy" },
            ],
          },
        ] as { title: string; links: FooterLink[] }[]).map((col) => (
          <div key={col.title}>
            <h4 className="font-bold text-base mb-4">{col.title}</h4>
            <ul className="space-y-2.5 text-sm text-background/70">
              {col.links.map((l) =>
                l.href.startsWith("/#") || l.external ? (
                  <li key={l.label}>
                    <a
                      href={l.href}
                      data-track-name={l.label}
                      data-track-category="Footer"
                      className="hover:text-background transition-smooth"
                    >
                      {l.label}
                    </a>
                  </li>
                ) : (
                  <li key={l.label}>
                    <Link
                      to={l.href}
                      data-track-name={l.label}
                      data-track-category="Footer"
                      className="hover:text-background transition-smooth"
                    >
                      {l.label}
                    </Link>
                  </li>
                )
              )}
            </ul>
          </div>
        ))}
      </div>

      <div className="container mt-12 pt-6 border-t border-background/10 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs text-background/60">
        <p>© {new Date().getFullYear()} Easy Advising. All rights reserved.</p>
        <a
          href="mailto:contact@easyadvising.com"
          data-track-name="Contact Email"
          data-track-category="Footer"
          className="inline-flex items-center gap-2 hover:text-background transition-smooth"
        >
          <Mail className="h-3.5 w-3.5" /> contact@easyadvising.com
        </a>
      </div>
    </footer>
  );
};
