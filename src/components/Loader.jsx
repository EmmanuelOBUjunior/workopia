/* eslint-disable react/prop-types */

import  ClipLoader  from "react-spinners/ClipLoader"

const override= {
    display: "block",
    margin: "100px auto",
    border: '2px solid #4338ca'
}

const Loader = ({loading}) => {
  return (
    <ClipLoader
    color="#4338ca" 
    size={100}
    cssOverride={override}
    loading = {loading}
    aria-label = "Loading Spinner"
    />
  )
}
export default Loader

