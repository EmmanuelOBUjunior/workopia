/* eslint-disable react-refresh/only-export-components */
import { useParams, useLoaderData } from "react-router-dom"

const JobPage = () => {
    const params = useParams()
    const job = useLoaderData()
  return (
    <div>{job.title}</div>
  )
}

const jobLoader = async({params}) =>{
    const res = await fetch(`/api/jobs/${params.id}`)
    const data = await res.json()
    return data
}

export {JobPage as default, jobLoader}