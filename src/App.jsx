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
import JobPage from "./pages/JobPage";



const App = () => {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<MainLayout/>}>
        <Route index element={<Homepage/>}/>
        <Route path="/jobs" element={<JobsPage/>}/>
        <Route path="/add-job" element={<AddJobs/>}/>
        <Route path="/job/:id" element={<JobPage/>}/>
        <Route path="*" element={<NotFoundPage/>}/>
      </Route>
    )
  )

  return <RouterProvider router={router}/>
};

export default App;
