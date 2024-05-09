import Hero from '../components/Hero'
import HomeCards from '../components/HomeCards'
import ViewAllJobs from '../components/ViewAllJobs'
import JobListings from '../components/JobListings'

const Homepage = () => {
  return (
    <>
    <Hero/>
    <HomeCards/>
    <JobListings isHome= {true}/>
    <ViewAllJobs/>
    </>
  )
}

export default Homepage