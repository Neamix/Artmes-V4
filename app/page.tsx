import Hero from "@/components/ui/hero";
import Navbar from "@/components/ui/navbar";
import Feature from "@/components/ui/feature";
import Features from "@/components/ui/features";
import Blog from "@/components/ui/blog";
import Footer from "@/components/ui/footer";
import TrustLogos from "@/components/ui/trust-logos";
import Stats from "@/components/ui/stats";
import Testimonials from "@/components/ui/testimonials";
import Integrations from "@/components/ui/integrations";
import FinalCTA from "@/components/ui/final-cta";

export default function Home() {
  return (
    <div className="home-wrapper">
      <Navbar />
      <Hero />
      <TrustLogos />
      <Features />
      <Feature />
      <Stats />
      <Testimonials />
      <Integrations />
      <Blog />
      <FinalCTA />
      <Footer />
    </div>
  );
}
