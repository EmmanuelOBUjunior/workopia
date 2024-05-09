import { ThreeDots } from "react-loader-spinner"

const customStyle = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
}

const Loader = () => {
  return (
    <ThreeDots
    color="#4338ca"
    wrapperClass= {customStyle}
    visible = {true}
    height = "80"
    width = "80"
    ariaLabel="three-dots-loading"
    />
  )
}

export default Loader