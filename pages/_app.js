import { ThemeProvider } from "@material-ui/core/styles";
import Theme from '../src/ui/Theme';
import React from "react";
import Header from '../src/ui/Header';
import Footer from '../src/ui/Footer'
import Head from "next/head";
import "../assets/style.css";
import cookies from 'next-cookies'; 
import { Provider } from 'react-redux';
import store from '../src/app/store';
import Loading from '../src/component/Loading.js/Loading'


function MyApp({ Component, pageProps,isLogin,idAudth}) {
  return (
    <Provider store={store}>
    <React.Fragment>
      <Head>
        <title>My page</title>
        <link rel="preconnect" href="https://fonts.gstatic.com"/>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.1/css/all.min.css" />

        <script src="https://use.fontawesome.com/d1d4d11dce.js"></script>
        
        <link rel="preconnect" href="https://fonts.gstatic.com"/>
<link href="https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,400;0,600;0,700;0,800;1,300;1,400;1,600;1,700&display=swap" rel="stylesheet"></link>
      </Head>
      <ThemeProvider theme = {Theme}>
      <Header isAudth={idAudth} isLog={isLogin} ></Header>
        <Component
          {...pageProps}
        />
        <Footer></Footer>
        <Loading></Loading>
      </ThemeProvider>
    </React.Fragment>
    </Provider>
  );
}

MyApp.getInitialProps = async ({ Component, ctx}) => {
  const idAuth = ctx?.pathname == '/login' || ctx?.pathname == '/signup' ? true:false ;

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
    idAudth:idAuth,
    pageProps: {
      ...(Component.getInitialProps
        ? await Component.getInitialProps(ctx)
        : {}),
    },
  }
  
}



export default MyApp