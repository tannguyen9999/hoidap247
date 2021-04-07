import React, { useEffect } from 'react';
import {withStyles} from '@material-ui/core';
import styles from "../src/styles/header"
import cookies from 'next-cookies'
import Head from "next/head";
import MainBoard from "../src/ui/Main"
import productApi from "../src/api/productApi"

const Home = ({isLogin ,name,startDay,avatar,result, }) => {    
    return (
    <div style={{background:'#ECEFF1'}}>
       <Head>
       <title key="title">
        Hoidap247.com - Hỏi đáp bài tập nhanh, chính xác, miễn phí
        </title>
        <meta
          name="description"
          key="description"
          content="Cutting-edge custom software development with gorgeous designs from scratch - let us optimize your business, solving problems instead of creating new ones."
        />
        <meta
          property="og:title"
          content="Bringing West Coast Technology to the Midwest | Custom Software Development"
          key="og:title"
        />
        <meta property="og:url" key="og:url" content="arc.com/customsoftware" />
        
      </Head>
  
      <MainBoard isActive={4} isLogin={isLogin} isName = {name} isStartDay={startDay} isAvatar={avatar} isResult = {result} />
    </div>
)};
Home.getInitialProps = async (ctx) => {
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
    const res = await productApi.getListPostOption({
      offset:'0',
      limit:'10',
      subject:'Ngoại Ngữ'
    })
    result = res.posts
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

export default  withStyles(styles)(Home)
// export default withStyles<Props>(styles)(MessagesContainer);