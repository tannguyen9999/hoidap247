import Question from '../../src/ui/Question'
import { useRouter } from 'next/router'
import productApi from "../../src/api/productApi"
import Err from "../../src/component/Error/Error"
import cookies from 'next-cookies'
import Head from "next/head";

const Ques = ({result,isLogin,result2,avatar})=>{
    if(!result){
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
        <script src="https://polyfill.io/v3/polyfill.min.js?features=es6"></script>
        <script src="https://polyfill.io/v3/polyfill.min.js?features=es6"></script>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/mathjax/2.7.4/latest.js?config=AM_CHTML"></script>
<script id="MathJax-script" async src="https://cdn.jsdelivr.net/npm/mathjax@3.0.1/es5/tex-mml-chtml.js"></script>

        
      </Head>
      <Err></Err>

          </div>
        ) 
        
    }
    return(<div>
        <Head>
        <title key="title">
        {result.content}
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
        <script src="https://cdnjs.cloudflare.com/ajax/libs/mathjax/2.7.4/latest.js?config=AM_CHTML"></script>
        <script src="https://polyfill.io/v3/polyfill.min.js?features=es6"></script>
<script id="MathJax-script" async src="https://cdn.jsdelivr.net/npm/mathjax@3.0.1/es5/tex-mml-chtml.js"></script>
  
      </Head>
        <Question isLogin={isLogin} result={result} result2={result2} avatar={avatar}></Question>
    </div>)
}

Ques.getInitialProps = async (ctx) => {
    const id = ctx?.query.id ;
    const allCookies = cookies(ctx);
    let isLogin = false; 
    const name = allCookies.name; 
    const startDay =  allCookies.startDay
    const avatar = allCookies.avatar
    if(allCookies.token && name && startDay){
      isLogin = true;
    }
   

    let result
    let result2
    try {
    //   const res = await productApi.getPostById(id)
      const res = await Promise.all(
        [
            productApi.getPostById(id),
            productApi.getCommentByPostId(id)
        ]) 
      result = res[0].post,
      result2= res[1].comments
    } catch (error) {
      
    }
  
  
      return {
        result:result,
        result2:result2,
        isLogin:isLogin,
        name:name,
        startDay:startDay,
        avatar:avatar

      }
    }
export default Ques