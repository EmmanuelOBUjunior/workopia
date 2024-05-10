import { useState } from "react"
import { useEffect } from "react"
import { useParams } from "react-router-dom";


const JobPage = () => {
    const id = useParams()
    const [jobData, setjobData] = useState([]);
    useEffect(()=>{
        const fetchData = async() =>{
            const res = await fetch(`/api/jobs/${id}`)
            const data = res.json()
            setjobData(data)
        }

        fetchData()
    }, [])

    console.log(jobData)

  return (
    <div>JobPage</div>
  )
}

export default JobPage