import { ReactNode } from "react";
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import logo from "@/assets/logo.webp";
import { Footer } from "./Footer";

interface PolicyLayoutProps {
  title: string;
  subtitle?: string;
  updated?: string;
  children: ReactNode;
}

export const PolicyLayout = ({ title, subtitle, updated, children }: PolicyLayoutProps) => {
  return (
    <div className="min-h-screen flex flex-col">
      <header className="border-b border-border bg-background/95 backdrop-blur sticky top-0 z-40">
        <div className="container flex items-center justify-between h-16">
          <Link to="/" className="flex items-center gap-2.5">
            <img src={logo} alt="Easy Advising" className="h-9 w-9 rounded-lg bg-white p-0.5" />
            <span className="font-extrabold text-lg">Easy Advising</span>
          </Link>
          <Link
            to="/"
            className="inline-flex items-center gap-1.5 text-sm font-medium text-muted-foreground hover:text-foreground transition-smooth"
          >
            <ArrowLeft className="h-4 w-4" /> Back to home
          </Link>
        </div>
      </header>

      <main className="flex-1 py-14 lg:py-20">
        <div className="container max-w-3xl">
          <div className="mb-10">
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-red">
              Easy Advising
            </span>
            <h1 className="mt-3 text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight">
              {title}
            </h1>
            {subtitle && (
              <p className="mt-4 text-muted-foreground text-lg leading-relaxed">{subtitle}</p>
            )}
            {updated && (
              <p className="mt-3 text-sm text-muted-foreground">Last updated: {updated}</p>
            )}
          </div>

          <article
            className="prose prose-slate max-w-none
              prose-headings:font-extrabold prose-headings:tracking-tight
              prose-h2:text-2xl prose-h2:mt-10 prose-h2:mb-3
              prose-h3:text-lg prose-h3:mt-6 prose-h3:mb-2
              prose-p:text-muted-foreground prose-p:leading-relaxed
              prose-li:text-muted-foreground prose-li:my-1
              prose-strong:text-foreground
              prose-a:text-brand-red prose-a:no-underline hover:prose-a:underline"
          >
            {children}
          </article>
        </div>
      </main>

      <Footer />
    </div>
  );
};
