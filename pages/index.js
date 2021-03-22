import React, { useEffect } from 'react';
import {withStyles} from '@material-ui/core';
import styles from "../src/styles/header"
import cookies from 'next-cookies'
import {setCookie} from '../src/util/cookies'
import Head from "next/head";



const HelloUA = ({token ,classes,isLogin }) => {     
    useEffect(() => {
    setCookie('token','a')
  });
    return (
    <div>
       <Head>
        <title>Hoidap247.com - Hỏi đáp bài tập nhanh, chính xác, miễn phí</title>
        
      </Head>
      <div className={classes.a} style={{height:'10000px'}}>Number of post:{token}</div>
      
    </div>
)};
HelloUA.getInitialProps = async (ctx) => {
  const allCookies = cookies(ctx);

    return { token: 'a',
    isLoginb:'isLogin'
    }
  }

export default  withStyles(styles)(HelloUA)
// export default withStyles<Props>(styles)(MessagesContainer);