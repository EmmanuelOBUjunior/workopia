import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";
import Homepage from "./pages/Homepage";
import MainLayout from "./layouts/MainLayout";
import JobsPage from "./pages/JobsPage";
import NotFoundPage from "./pages/NotFoundPage";
import AddJobs from "./pages/AddJobs";
import JobPage,{jobLoader} from "./pages/JobPage";
import EditJob from "./pages/EditJob";



const App = () => {
  
  //ADD NEW JOB
  const submitNewJob = async(job) =>{
    const res = await fetch(`/api/jobs/${id}`,{
      method: 'POST',
      headers:{
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(job)
    })
    if(res.ok) return
  
  }
  //UPDATE JOB
  const submitJob = async(updateJob) =>{
    const res = await fetch('/api/jobs',{
      method: 'PUT',
      headers:{
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(updateJob)
    })
    if(res.ok) return
  }

  //DELETE LISTED JOB
  const deleteJob = async(jobId) =>{
    const res = await fetch(`/api/jobs/${jobId}`,{
      method: 'DELETE'
    })
    if(res.ok)
    return
  }


  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<MainLayout/>}>
        <Route index element={<Homepage/>}/>
        <Route path="/jobs" element={<JobsPage/>}/>
        <Route path="/add-job" element={<AddJobs submitNewJob={submitNewJob}/>}/>
        <Route path="/job/:id" element={<JobPage deleteJob={deleteJob}/>} loader={jobLoader}/>
        <Route path="*" element={<NotFoundPage/>}/>
        <Route path="/edit-job/:id" element={<EditJob submitJob={submitJob}/>} loader={jobLoader}/>
      </Route>
    )
  )

  return <RouterProvider router={router}/>
};

export default App;
