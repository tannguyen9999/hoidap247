

import { useRouter } from 'next/router'
import productApi from "../../src/api/productApi"
import Err from "../../src/component/Error/Error"
import cookies from 'next-cookies'
import MainBoard from "../../src/ui/Main"

const Search = ({isLogin ,name,startDay,avatar,result,content })=>{
    if(!result || result.length == 0){
        return <Err></Err>
    }
    return(<div>
        <MainBoard isSearch={true} isActive={0} isLogin={isLogin} isName = {name} isStartDay={startDay} isAvatar={avatar} isResult = {result}></MainBoard>
    </div>)
}

Search.getInitialProps = async (ctx) => {
    const allCookies = cookies(ctx);
    let id = ctx?.query.id ;
    const content = id.replaceAll('%',' ')
    let isLogin = false; 
    const name = allCookies.name; 
    const startDay =  allCookies.startDay
    const avatar = allCookies.avatar
    if(allCookies.token && name && startDay){
      isLogin = true;
    }
    let result
    try {
      const res = await productApi.search(
        {
          content:content
        }
      )
      result = res.posts
    } catch (error) {
      
    }
  
  
      return {
        content:content,
        result:result,
      isLogin:isLogin,
      name:name,
      startDay:startDay,
      avatar:avatar,
    
      }
    }
export default Search