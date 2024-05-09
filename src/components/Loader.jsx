import { BsDisplay } from "react-icons/bs"
import { ThreeDots } from "react-loader-spinner"

const customStyle = {
    display: 'block',
    margin: '100 auto'
}

const Loader = () => {
  return (
    <ThreeDots
    color="#4338ca"
    wrapperClass= {customStyle}
    visible = {true}
    height = "150"
    width = "150"
    
    />
  )
}

export default Loader