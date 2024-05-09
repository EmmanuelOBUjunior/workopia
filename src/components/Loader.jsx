/* eslint-disable react/prop-types */
import  BeatLoader  from "react-spinners/BeatLoader"

const customStyle = {
    display: "block",
    margin: "100 auto"
}

const Loader = ({loading}) => {
  return (
    <BeatLoader
    color="#4338ca"
    size={15}
    cssOverride={customStyle}
    loading = {loading}
    aria-label = "Loading Spinner"
    />
  )
}
export default Loader

