import Hero from "../components/Hero";
import Navbar from "../components/Navbar";

const Home = () => {
  return (
    <section className="w-full min-h-screen bg-neutral-100">
      <Navbar />
      <Hero />
    </section>
  );
};

export default Home;
