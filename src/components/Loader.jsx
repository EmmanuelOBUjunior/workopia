import { BeatLoader } from "react-spinners/BeatLoader"

const customStyle = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
}

const Loader = () => {
  return (
    <BeatLoader
    color="#4338ca"
    size="15"
    cssOverride={customStyle}
    loading = {loading}
    />
  )
}

export default Loader