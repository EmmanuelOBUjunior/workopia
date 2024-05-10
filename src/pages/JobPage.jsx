import { useState } from "react"
import { useEffect } from "react"
import { useParams } from "react-router-dom";


const JobPage = () => {
    const params = useParams()
    const id  = +params.id
    console.log(id)
    const [jobData, setjobData] = useState([]);
    useEffect(()=>{
        const fetchData = async() =>{
            const res = await fetch(`/api/jobs/${id}`)
            const data = await res.json()
            setjobData(data)
        }

        fetchData()
    }, [id])

    console.log(jobData)

  return (
    <div>Job Page for job {id}</div>
  )
}

export default JobPage