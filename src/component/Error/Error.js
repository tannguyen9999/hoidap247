import Lottie from "react-lottie";
// import error from "../../assets/animation/error.json"
import notFound from "../../assets/animation/notfound.json"

const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: notFound,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice"
    }
  };
const Error = ()=>{
    return(
        <div style={{marginBottom:'-25px',marginTop:'100px',}}>
        <Lottie  
            options={defaultOptions}
            isStopped={true}
            style={{ width: "40%"}}
        ></Lottie>
        </div>
    )
}
export default Error
