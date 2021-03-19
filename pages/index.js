import React, { useEffect } from 'react';
import {withStyles} from '@material-ui/core';
import styles from "../src/styles/header"
import {checkUserdata} from '../src/util/check'
import cookies from 'next-cookies'
import {setCookie} from '../src/util/cookies'

const HelloUA = ({token ,isLogin,classes }) => {
  setCookie('token','a')
  useEffect(async () => {
        const a = await checkUserdata();
        console.log(a[6]['value'][1])
      });
     
    return (
    <div><div className={classes.a}>Number of post:{token}</div>
    </div>
)};
HelloUA.getInitialProps = async (ctx) => {
  const allCookies = cookies(ctx);
  let isLogin = {
    section1:{
      display:'auto'
    },
    section2:{
      display:'none'
    },
  }

  try {
    if(!allCookies.token) return{ token: 'a',
    isLogin:isLogin
    }
    if(allCookies.token == 'a'){
      isLogin = {
        section1:{
          display:'none'
        },
        section2:{
          display:'auto'
        },
      }
    }
    return { token: 'a',
    isLogin:isLogin
    }
  } catch (error) {
    
  }

    return { token: 'a',
    isLogin:isLogin
    }
  }

export default  withStyles(styles)(HelloUA)
// export default withStyles<Props>(styles)(MessagesContainer);