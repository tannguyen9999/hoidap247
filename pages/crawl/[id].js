
import productApi from "../../src/api/productApi"
import Err from "../../src/component/Error/Error"
import cookies from 'next-cookies'
import Lottie from "react-lottie";
// import error from "../../assets/animation/error.json"
import complete from "../../src/assets/animation/data.json"
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    main:{
        margin:'0'
    },
  }));
const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: complete,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice"
    }
  };

const Ques = ({result,isLogin})=>{
  const classes = useStyles();

    if(
        isLogin == false ||!result
    )return(
        <Err></Err>
    )
    return(<div className={classes.main}>
        <Lottie  
            options={defaultOptions}
            style={{ width: "40%"}}
        ></Lottie>
    </div>)
}

Ques.getInitialProps = async (ctx) => {
    const id = ctx?.query.id ;
    const allCookies = cookies(ctx);
    let isLogin = false; 
    const name = allCookies.name; 
    const startDay =  allCookies.startDay
    const avatar = allCookies.avatar
    if(allCookies.token && name && startDay){
      isLogin = true;
    }
   

    let result
    try {
    //   const res = await productApi.getPostById(id)
      const res = await productApi.getCrawDataById(id)
       result = res
    } catch (error) {
      
    }
  
  
      return {
        result:result,
        isLogin:isLogin,
        name:name,
        startDay:startDay,
        avatar:avatar

      }
    }
export default Ques