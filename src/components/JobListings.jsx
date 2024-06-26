/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import JobListing from "../components/JobListing";
import Loader from "../components/Loader";

const JobListings = ({ isHome = false }) => {
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);


  useEffect(() => {
    const fetchJobs = async () => {
      try {
        const res = await fetch("https://job-api-ri32.onrender.com/api/jobs");
        // console.log(res)
        const data = await res.json();
        const fetchedJobs = data.jobs
        console.log(fetchedJobs)
        setJobs(fetchedJobs);
      } catch (error) {
        console.log("Error fetching data!!", error);
      } finally {
        setLoading(false);
      }
    };
    fetchJobs();
  }, []);

  // console.log(jobs);

  const jobList = isHome ? jobs.slice(0, 3) : jobs;

  return (
    <section className="bg-blue-50 px-4 py-10">
      <div className="container-xl lg:container m-auto">
        <h2 className="text-3xl font-bold text-indigo-500 mb-6 text-center">
          {isHome ? "Recent Jobs" : "Browse Jobs"}
        </h2>
        {loading ? (
          <Loader loading={loading} />
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {jobList.map((job) => (
              <JobListing key={job._id} job={job} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default JobListings;
