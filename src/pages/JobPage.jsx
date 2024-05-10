import { useState } from "react"
import { useEffect } from "react"
import { useSearchParams } from "react-router-dom"

const JobPage = () => {
    const id = useSearchParams('id')
    const [jobData, setjobData] = useState([]);
    useEffect(()=>{
        const fetchData = async() =>{
            const res = await fetch(`/api/jobs/${id}`)
            const data = res.json()
        }

        fetchData()
    }, [])


  return (
    <div>JobPage</div>
  )
}

export default JobPage