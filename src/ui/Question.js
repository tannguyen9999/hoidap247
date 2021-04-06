import React, { useState, useRef } from 'react';

import {withStyles} from '@material-ui/core';
import styles from "../styles/question"
import Event from "../component/Event/Event"
import anh1 from "../assets/images/chipu.jpg";
import anh2 from "../assets/images/lazada.jpg";
import anh3 from "../assets/images/lazada2.jpg";
import anhvip from "../assets/images/anhvip2.jpeg"
import TimeAgo from 'javascript-time-ago';
import vi from 'javascript-time-ago/locale/vi';
import productApi from '../api/productApi'
import { useRouter } from 'next/router'
import { nanoid } from 'nanoid';

TimeAgo.addLocale(vi);
const timeAgo = new TimeAgo('vi-VN');


const Question = ({classes,result,isLogin,result2,avatar})=>{
    const router = useRouter()

    const inputEl = useRef(null);

    function handleRenderTextMain(){

        let text = result.content;
        
        let test = text.split("↵")
        const res =  test.map((item)=>{
            return(
                <div key={nanoid(10)}>{item}<br/></div>
            )
        })

        return res

    }
    function handleRenderTextComment(text){

        
        let test = text.split("↵")
        const res =  test.map((item)=>{
            return(
                <div key={nanoid(10)}>{item}<br/></div>
            )
        })

        return res

    }

    function hanldelRenderSection1(){
        return(
            <div className = {classes.overContai}>
                <ul className={classes.headerQuestion} >
                        <li className={classes.itemHeaderQuestion}><img className = {classes.avatar} src={result.userId.avatar !== ""? result.userId.avatar:anhvip} alt='avatarUser'></img></li>
                        <li className={classes.itemHeaderQuestion}>{result.subject}</li>
                        <li className={classes.itemHeaderQuestion}>{`Lớp ${result.class}`}</li>
                        <li className={classes.itemHeaderQuestion}>{
                            timeAgo.format(new Date(result.createdAt), 'round')
                        }</li>
                    </ul>
                <div className = {classes.mainContenr} style={{wordWrap:'break-word'}}>
                    <div>
                    {handleRenderTextMain()}
                    </div>
                </div>
                <div className={classes.contentImage}>
                    <img src={result.picture} className={classes.contentImage2}></img>
                </div>
            </div>
        )
    }

    function handleRenderAnser(){
        const anserSection = result2.map((item)=>{
            return(
                <div key={nanoid(10)} className={classes.dataAnser}>
                    <div key={nanoid(12)} className={classes.headerAnser}>
                        <img key={nanoid(7)} src={item.userCommentId.avatar !==''? item.userCommentId.avatar:anhvip} className = {classes.avatarCurrent}></img>
                        <strong key={nanoid(7)} style={{paddingLeft:'12px'}}>{item.userCommentId.name}</strong>
                    </div>
                    <div key={nanoid(7)} style={{paddingLeft: '45px',width:'90%',wordWrap: 'break-word'}}>
                        {handleRenderTextComment(item.contentComment)}
                        
    
                    </div>
                </div>
            )
        })
        return anserSection
        
    }
    async function handleSenComment(){
        const file = inputEl.current.value;
        if(!file){
            return
        }
        const value2 = file.replaceAll('\n','↵');
        const data = {
            postId:result._id,
            contentComment:value2
        }
        try {
            const res = await productApi.postComment(data)
            router.push(`/cauhoi/${result._id}`)
            
        } catch (error) {
            
        }
        return
    }
    return(
        <div className = {classes.overMain}>
            <div className={classes.rentPage}>
                <img style={{display:'block'}} className={classes.image} src={anh1}></img>
                <img className={classes.image} src={anh2}></img>
                <img className={classes.image} src={anh3}></img>
                <img className={classes.image} src={anh1}></img>
                <img className={classes.image} src={anh2}></img>
                <img className={classes.image} src={anh3}></img>
                
            </div>
            
            <div className={classes.mainPage} >
                <div className={classes.section1}>
                    {hanldelRenderSection1()}
                </div>
                <div style = {!isLogin ? {display:'none'}:{}} className={classes.section2}>
                    <div className={classes.writeComment}>
                        <img src={avatar == ''?anhvip:avatar} className={classes.avatarCurrent}></img>
                        <textarea ref={inputEl} className={classes.framesText} placeholder="Viết bình luận..."></textarea> 
                        <i onClick={handleSenComment} style={{color:'#458ea7',marginTop:'auto',marginLeft:'-36px',cursor:'pointer',paddingBottom:'12px',fontSize:'20px',zIndex:'5'}} className="fas fa-paper-plane"></i>
                    </div>
                    
                </div>
                <div className={classes.section3}>
                    <div style={{

fontSize: '27px',
marginBottom: '12px',
fontWeight: '700',
color: '#458EA7'
                    }
                    }>Trả lời</div>
                    {handleRenderAnser()}
                </div>

            </div>
            <Event></Event>
        </div>
    )
}

export default withStyles(styles)(Question)
