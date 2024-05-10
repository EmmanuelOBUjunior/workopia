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
    return
}

export default JobPage