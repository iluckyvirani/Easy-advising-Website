import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Categories } from "@/components/Categories";
import { LiveSessions } from "@/components/LiveSessions";
import { Features } from "@/components/Features";
import { Testimonials } from "@/components/Testimonials";
import { BecomeAdvisor } from "@/components/BecomeAdvisor";
import { CTA } from "@/components/CTA";
import { FAQ } from "@/components/FAQ";
import { Footer } from "@/components/Footer";
import { useEffect } from "react";
import { trackEvent } from "@/lib/metaPixel";

const Index = () => {
  
  useEffect(() => {
    trackEvent("ViewContent", {
      content_name: "Homepage",
      content_category: "Page",
    });
  }, []);

  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Categories />
        <LiveSessions />
        <Features />
        <Testimonials />
        <BecomeAdvisor />
        <FAQ />
        <CTA />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
