import { useState } from "react"
import { useEffect } from "react"
import { useSearchParams } from "react-router-dom"

const JobPage = () => {
    const id = useSearchParams('id')
    const [jobData, setjobData] = useState([]);
    useEffect(()=>{

    }, [])


  return (
    <div>JobPage</div>
  )
}

export default JobPage