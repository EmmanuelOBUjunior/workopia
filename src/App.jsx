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



const App = () => {
  
  //ADD NEW JOB
  const submitNewJob = async(newJob) =>{
    const res = await fetch('/api/jobs',{
      method: 'POST',
      headers:{
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(newJob)
    })
    if(res.ok) return
  }

  //DELETE LISTED JOB
  const deleteJob = async(jobId) =>{

  }


  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<MainLayout/>}>
        <Route index element={<Homepage/>}/>
        <Route path="/jobs" element={<JobsPage/>}/>
        <Route path="/add-job" element={<AddJobs submitNewJob={submitNewJob}/>}/>
        <Route path="/job/:id" element={<JobPage/>} loader={jobLoader}/>
        <Route path="*" element={<NotFoundPage/>}/>
      </Route>
    )
  )

  return <RouterProvider router={router}/>
};

export default App;
