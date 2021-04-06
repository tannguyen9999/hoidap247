import AskQuestion from "../src/ui/AskQuestion"
import cookies from 'next-cookies'
import { useRouter } from 'next/router'
import React, {  useEffect } from 'react';

const AskQues= ({isLogin})=>{
    const router = useRouter()
    useEffect(() => {
        if(!isLogin){
            router.push('/login')
        }
      });
    
    
    return(<div>
        <AskQuestion isLogin={isLogin}></AskQuestion>
    </div>)
}

AskQues.getInitialProps = async (ctx) => {
    const allCookies = cookies(ctx);
    let isLogin = false; 
    const name = allCookies.name; 
    const startDay =  allCookies.startDay
    if(allCookies.token && name && startDay){
      isLogin = true;
    }
      return {
      isLogin:isLogin,
      }
    }
  


export default AskQues