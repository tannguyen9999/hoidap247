import Question from '../../src/ui/Question'
import { useRouter } from 'next/router'
import productApi from "../../src/api/productApi"
import Err from "../../src/component/Error/Error"
import cookies from 'next-cookies'

const Ques = ({result,isLogin,result2,avatar})=>{
    if(!result){
        return <Err></Err>
    }
    return(<div>
        <Question isLogin={isLogin} result={result} result2={result2} avatar={avatar}></Question>
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
    let result2
    try {
    //   const res = await productApi.getPostById(id)
      const res = await Promise.all(
        [
            productApi.getPostById(id),
            productApi.getCommentByPostId(id)
        ]) 
      result = res[0].post,
      result2= res[1].comments
    } catch (error) {
      
    }
  
  
      return {
        result:result,
        result2:result2,
        isLogin:isLogin,
        name:name,
        startDay:startDay,
        avatar:avatar

      }
    }
export default Ques