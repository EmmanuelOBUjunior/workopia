/* eslint-disable react-refresh/only-export-components */
import { useParams } from "react-router-dom"

const JobPage = () => {
    const params = useParams()
  return (
    <div>Job Page</div>
  )
}

const jobLoader = async({params}) =>{
    const res = await fetch(`/api/jobs/${params.id}`)
    const data = await res.json()
    return data
}

export {JobPage as default, jobLoader}