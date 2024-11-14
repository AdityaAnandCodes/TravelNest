import Footer from "../components/Footer";
import Hero from "../components/Hero";
import Navbar from "../components/Navbar";

const Home = () => {
  return (
    <section className="w-full min-h-screen bg-neutral-100">
      <Navbar />
      <Hero />
      <Footer />
    </section>
  );
};

export default Home;
