import CallToAction from "../components/CTA";
import Features from "../components/Features";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import Testimonials from "../components/Testimonial";

const Home = () => {
  return (
    <section className="w-full min-h-screen bg-neutral-100 overflow-hidden">

      <Hero />
      <Testimonials />
      <Features />
      <CallToAction />
      <Footer />
    </section>
  );
};

export default Home;
