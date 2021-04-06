import Profile from '../../src/ui/Profile'
import cookies from 'next-cookies'
import Err from '../../src/component/Error/Error'
const profile = ({name,startDay,avatar,sex,isLogin})=>{
  if(isLogin ==false){
    return<Err></Err>
  }
    return(
        <Profile name={name} startDay={startDay} isAvatar={avatar} isSex={sex}></Profile>
    )
}

profile.getInitialProps = async (ctx) => {
    const allCookies = cookies(ctx);
    let isLogin = false; 
    const name = allCookies.name; 
    const startDay =  allCookies.startDay
    const avatar = allCookies.avatar
    const sex = allCookies.sex

    if(allCookies.token && name && startDay){
      isLogin = true;
    }
    
  
  
      return {
      isLogin:isLogin,
      name:name,
      startDay:startDay,
      avatar:avatar,
      sex:sex
      }
    }
export default profile