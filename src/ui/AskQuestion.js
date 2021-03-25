
import {withStyles} from '@material-ui/core';
import styles from "../styles/askquestion"
import listClass from "../util/Contants/listClass";
import listSubject from "../util/Contants/contentSlideBar"
import React, { useState, useEffect } from 'react';
import image from "../assets/images/icon-recipe3.png"

const AskQuestion = ({classes})=> {
    const [currentClass,setCurrentClass] = useState('Chọn lớp')
    const [currentSub,setCurrentSub] = useState('Chọn môn')
    
    const [open,setNav]= useState({
        class:false,
        subject:false
    })
    function handleOpenClose(){
        setNav(
            {
            class: false,
            subject: false,   
            }
        )
        return
    }
    function handleOutClass(e,text){
        e.stopPropagation()
        setNav(
            {
            class: false,
            subject: false,   
            }
        )
        setCurrentClass(text)
    }

    function handleOutSub(e,text){
        e.stopPropagation()
        setNav(
            {
            class: false,
            subject: false,   
            }
        )
        setCurrentSub(text)
    }
    function handleRenderClass(){
        const data = listClass.map((item,index)=>{
            return(
                <li key={index} data-key={index} onClick={(e)=>handleOutClass(e,item.text)} className={classes.itemFilter} key={index}>{item.text}</li>
            )
        })
        return data
    }
    function handleRenderSubject(){
        const data = listSubject.map((item,index)=>{
            return(
                <li key={index} data-key={index} onClick={(e)=>handleOutSub(e,item.text)}  className={classes.itemFilter} key={index}>{item.text}</li>
            )
        })
        return data
    }
    function handleChooseClass(){
        const a = open.subject;
        setNav({
            class:true,
            subject: a,
        })
       
    }
    function handleChooseSub(){
        const a = open.class
        setNav(
            {
            class:a,
            subject: true,   
            }
        )
        return
    }
    
    return(<div className={classes.overSection}>
        <div className={classes.overLayout}>
            <div className={classes.overTitle}>
            <span className={classes.title}>Đặt câu hỏi về bài tập của bạn</span>
            </div>
            <ul className={classes.filter}>
                <div onClick={(e)=>handleChooseClass()} className={classes.fiterSection1}>{currentClass}
                <ul style={open.class == true ? {display:'block'}:{}} className={classes.fiterSectionClass}>
                    {handleRenderClass()}
                </ul>
                </div>
                
                <div onClick={handleChooseSub} className={classes.fiterSection2}>{currentSub}
                <ul style={open.subject == true ? {display:'block'}:{}} className={classes.fiterSectionSub}>
                    {handleRenderSubject()}
                </ul>
             
                </div>     
            </ul>
            <div className={classes.inputText}>
            <textarea className={classes.framesText} placeholder="Nhập câu hỏi hoặc gửi hình ảnh, chú ý không yêu cầu giải toàn bộ đề và hãy chia nhỏ câu hỏi để có lời giải nhanh nhất.">  

            </textarea> 
            </div>
            <div className={classes.inputImage}>
                <div>Gửi ảnh: </div>
                <img className={classes.image} src={image} alt='import Image'></img>
            </div>
            <div className={classes.sendE}>
                <div className={classes.senQues}>Gửi câu hỏi</div>
            </div>
            <div style={open.class == true || open.subject == true ?{display:"block"}:{display:'none'}} onClick={handleOpenClose}className={classes.overOpen}></div>
        </div>
    </div>)
}
export default withStyles(styles)(AskQuestion)