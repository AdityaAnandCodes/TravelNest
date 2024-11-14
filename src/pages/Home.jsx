import Features from "../components/Features";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import Testimonials from "../components/Testimonial";

const Home = () => {
  return (
    <section className="w-full min-h-screen bg-neutral-100">
      <Navbar />
      <Hero />
      <Testimonials />
      <Features />
      <Footer />
    </section>
  );
};

export default Home;
