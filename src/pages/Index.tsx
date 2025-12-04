import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Process from "@/components/Process";
import Benefits from "@/components/Benefits";
import Testimonials from "@/components/Testimonials";
import SectionDivider from "@/components/SectionDivider";
import Services from "@/components/Services";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      <Hero />
      <Process />
      <Benefits />
      <Testimonials />
      <SectionDivider />
      <Services />
      <Footer />
    </main>
  );
};

export default Index;
