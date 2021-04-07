import SignUp from '../src/component/Signup/Signup'
import Head from "next/head";

const signup = ()=>{
    return(
        <div style={{zIndex:'50'}}>
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
            <SignUp></SignUp>
        </div>
    )
}

export default signup