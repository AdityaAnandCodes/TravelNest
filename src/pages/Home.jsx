import Hero from "../components/Hero"
import Navbar from "../components/Navbar"

const Home = () => {
  return (
    <section className="w-full min-h-screen">
        <Navbar />
        <Hero />
    </section>
  )
}

export default Home