/* eslint-disable react/prop-types */

import  BeatLoader  from "react-spinners/BeatLoader"

const override= {
    display: "block",
    margin: "100px auto"
}

const Loader = ({loading}) => {
  return (
    <BeatLoader
    color="#4338ca"
    size={15}
    cssOverride={override}
    loading = {loading}
    aria-label = "Loading Spinner"
    />
  )
}
export default Loader

