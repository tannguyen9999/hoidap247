import { ThemeProvider } from "@material-ui/core/styles";
import Theme from '../src/ui/Theme';
import React from "react";
import Header from '../src/ui/Header';
import Head from "next/head";
import "../assets/style.css";
import cookies from 'next-cookies'; 



function MyApp({ Component, pageProps,isLogin }) {
  return (
    <React.Fragment>
      <Head>
        <title>My page</title>
        <link rel="preconnect" href="https://fonts.gstatic.com"/>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.1/css/all.min.css" />

        <script src="https://use.fontawesome.com/d1d4d11dce.js"></script>
        

<link href="https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,800;1,400&display=swap" rel="stylesheet"></link>
      </Head>
      <ThemeProvider theme = {Theme}>
      <Header isLog={isLogin} ></Header>
        <Component
          {...pageProps}
        />
        
      </ThemeProvider>
    </React.Fragment>
  );
}

MyApp.getStaticProps = async ({ Component, ctx }) => {
  const allCookies = cookies(ctx);
  let isLogin = false;     
  try {
    if(allCookies.token == 'a'){
      isLogin = true;
    }
  } catch (error) {
    
  }
  return {
    isLogin:isLogin,
    pageProps: {
      ...(Component.getInitialProps
        ? await Component.getInitialProps(ctx)
        : {}),
    },
  }
  
}



export default MyApp