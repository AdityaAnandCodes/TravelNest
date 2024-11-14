import Hero from "../components/Hero"
import Navbar from "../components/Navbar"

const Home = () => {
  return (
    <section className="w-full min-h-screen bg-gradient-to-r from-zinc-950 to-gray-900">
        <Navbar />
        <Hero />
    </section>
  )
}

export default Home