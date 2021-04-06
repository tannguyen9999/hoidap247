
import {withStyles} from '@material-ui/core';
import styles from "../styles/askquestion"
import listClass from "../util/Contants/listClass";
import listSubject from "../util/Contants/contentSlideBar"
import React, { useState, useRef,useEffect } from 'react';
import image from "../assets/images/icon-recipe3.png";
import imagetem from "../assets/images/anh1.jpg"
import {UploadAvatar} from "../util/test"
import { isLoading } from './../app/loadingSile';

import { useDispatch, useSelector } from 'react-redux';
import { nanoid } from '@reduxjs/toolkit';
import productApi from '../api/productApi'
import { useRouter } from 'next/router'
const AskQuestion = ({classes})=> {
    const [currentClass,setCurrentClass] = useState('Chọn lớp')
    const [currentSub,setCurrentSub] = useState('Chọn môn')
    const inputEl = useRef(null);
    const inputEl2 = useRef(null);
    const dispatch = useDispatch();
    const router = useRouter()

    const [open,setNav]= useState({
        class:false,
        subject:false
    })
    const [loading,setLoading]= useState(false)
    const [imageInput,setImageInput] = useState({
        src:'',
    })
    useEffect(() => {
        
        const changeIsLoading2 = {
            isLoading: false
          };
        const action2 = isLoading(changeIsLoading2);
        dispatch(action2);
      });
    

    function handleInputImage(){
        if(imageInput.src !== ''){
            return(
                    <div className={classes.listImage}>
                <div style= {{position:'relative'}}>
                    {/* <i className={classes.cancleImage}>x</i> */}
                    <img src={imageInput.src} alt="" className={classes.imageInput}></img>
                </div>
            </div>
            )
        }
        return
    }
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
            if(index!== 0){
                return(
                    <li key={nanoid(10)} data-key={index} onClick={(e)=>handleOutClass(e,index)} className={classes.itemFilter} key={nanoid(7)}>{item.text}</li>
                )
            }
        })
        return data
    }
    function handleRenderSubject(){
        const data = listSubject.map((item,index)=>{
            if(index !==0){
                return(
                    <li key={nanoid(10)} data-key={index} onClick={(e)=>handleOutSub(e,item.text)}  className={classes.itemFilter} key={nanoid(5)}>{item.text}</li>
                )
            }
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
    function handleSendImage(){
         inputEl.current.click();
       return; 
    }
     function  handleFileInput(e){
        const file = e.target.files[0];
        if(file && (file.type == "image/jpeg" || file.type == "image/png")){
            const fileReader = new FileReader();
    
            fileReader.readAsDataURL(file);
            setLoading(true);
             fileReader.onload = (e) => {
                 
                const result = fileReader.result;
                
                if(result){
                    
                    setLoading(false);
                    setImageInput({
                        src:result
                    })
                    
                }
                return 
            };
        }else{
            alert('Vui lòng chọn định dạng hình ảnh')
        }
            
        return
    }

    async function handleSendConten(){
        if(currentClass == 'Chọn lớp'){
            alert("Bạn quên chọn lớp rồi kìa")
            return
        }
        if(currentSub == 'Chọn môn'){
            alert("Bạn quên chọn môn rồi kìa")
            return
        }
        const file = inputEl.current.files[0];
        const file2 = inputEl2.current.value;
        const value2 = file2.replaceAll('\n','↵')
        if(!value2){
            alert("Bạn chưa có nội dung câu hỏi")
        }
        let url=""
        
       try {
        if(file){
            const form = new FormData();
                    form.append('picture', file);
              const data = await productApi.uploadpicture(form)
            url = data.url
        }
        let datasend = {
            class:currentClass.toString(),
            subject:currentSub,
            content:value2
        }

        if(url !== ""){
            datasend.picture = url
        }
        
        const res = await productApi.uploadpost(datasend)
        console.log(res)
        const id = res.post._id;
        router.push(`/cauhoi/${id}`)

       } catch (error) {
           console.log(error)
        router.push(`/login`)

       }
        
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
            <textarea ref={inputEl2} className={classes.framesText} placeholder="Nhập câu hỏi hoặc gửi hình ảnh, chú ý không yêu cầu giải toàn bộ đề và hãy chia nhỏ câu hỏi để có lời giải nhanh nhất.">  

            </textarea> 
            </div>
            <div className={classes.inputImage} onClick={handleSendImage}>
               
                <div>Gửi ảnh: </div>
                
                <img className={classes.image} src={image} alt='import Image'></img>
                <div style={{position:'relative'}}>
                <div className={classes.loader} style={loading ? {display:'block'}:{}}><style>{`
            @keyframes spin {
                 0% { transform: rotate(0deg); }
                 100% { transform: rotate(360deg); }
            }
            @-webkit-keyframes spin {
                0% { -webkit-transform: rotate(0deg); }
                100% { -webkit-transform: rotate(360deg); }
              }
        `}</style></div>
                </div>
                
                {handleInputImage()}
                
                <input ref={inputEl} type="file" accept=".jpg, .jpeg, .png" onChange={(e)=>{handleFileInput(e)}} hidden/>
            </div>
           
        
          
            <div className={classes.sendE} onClick={handleSendConten}>
                <div className={classes.senQues}>Gửi câu hỏi</div>
            </div>
            <div style={open.class == true || open.subject == true ?{display:"block"}:{display:'none'}} onClick={handleOpenClose}className={classes.overOpen}></div>
        </div>
    </div>)
}
export default withStyles(styles)(AskQuestion)