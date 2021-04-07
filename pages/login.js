import Login from '../src/component/Login/Login'
import Head from "next/head";

const login = ()=>{
    return(
        <div>
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
            <Login></Login>
        </div>
    )
}

export default login