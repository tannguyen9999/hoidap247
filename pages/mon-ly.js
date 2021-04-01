import React, { useEffect } from 'react';
import {withStyles} from '@material-ui/core';
import styles from "../src/styles/header"
import cookies from 'next-cookies'
import {setCookie} from '../src/util/cookies'
import Head from "next/head";
import MainBoard from "../src/ui/Main"

const Home = ({token ,classes,isLogin,query }) => {  
    useEffect(() => {
    setCookie('token','a')
  });
    return (
    <div style={{background:'#ECEFF1'}}>
       <Head>
        <title>Hoidap247.com - Hỏi đáp bài tập nhanh, chính xác, miễn phí</title>
        
      </Head>
  
      <MainBoard isActive={2} />
    </div>
)};
Home.getInitialProps = async (ctx) => {
  const _id = ctx?.pathname;
  const allCookies = cookies(ctx);

    return { token: 'a',
    query:_id,
    isLoginb:'isLogin'
    }
  }

export default  withStyles(styles)(Home)
// export default withStyles<Props>(styles)(MessagesContainer);