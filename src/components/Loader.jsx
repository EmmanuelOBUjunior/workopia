/* eslint-disable react/prop-types */

import  ClipLoader  from "react-spinners/ClipLoader"

const override= {
    color:"#4338ca",
    display: "block",
    margin: "100px auto",
    borderColor: "red"
}

const Loader = ({loading}) => {
  return (
    <ClipLoader
    size={100}
    cssOverride={override}
    loading = {loading}
    aria-label = "Loading Spinner"
    />
  )
}
export default Loader

