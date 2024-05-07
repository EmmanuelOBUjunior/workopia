import Hero from "./components/Hero"
import HomeCards from "./components/HomeCards"
import Navbar from "./components/Navbar"

const App = () => {
  return (
    <>
    <Navbar/>
    <Hero
    title="Become a Software Engineer"
    subheadline="Find the perfect job that fits your skill set and interests"
    />
    <HomeCards/>

    <section className="m-auto max-w-lg my-10 px-6">
      <a
        href="jobs.html"
        className="block bg-black text-white text-center py-4 px-6 rounded-xl hover:bg-gray-700"
        >View All Jobs</a
      >
    </section>

    </>
  )
}

export default App