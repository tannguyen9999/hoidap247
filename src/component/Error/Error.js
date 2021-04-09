import Lottie from "react-lottie";
// import error from "../../assets/animation/error.json"
import notFound from "../../assets/animation/notfound.json"
import { useDispatch } from 'react-redux';
import { isLoading } from './../../app/loadingSile';
const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: notFound,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice"
    }
  };
const Error = ()=>{
  const dispatch = useDispatch();

  useEffect(() => {
    const changeIsLoading2 = {
      isLoading: false
    };
  const action2 = isLoading(changeIsLoading2);
  dispatch(action2);
  });
    return(
        <div style={{marginBottom:'-25px',marginTop:'100px',}}>
        <Lottie  
            options={defaultOptions}
           
            style={{ width: "40%"}}
        ></Lottie>
        </div>
    )
}
export default Error
