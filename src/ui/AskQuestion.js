
import {withStyles} from '@material-ui/core';
import styles from "../styles/askquestion"
import listClass from "../util/Contants/listClass";
import listSubject from "../util/Contants/contentSlideBar"
import React, { useState, useRef } from 'react';
import image from "../assets/images/icon-recipe3.png";
import imagetem from "../assets/images/anh1.jpg"
const AskQuestion = ({classes})=> {
    const [currentClass,setCurrentClass] = useState('Chọn lớp')
    const [currentSub,setCurrentSub] = useState('Chọn môn')
    const inputEl = useRef(null);
    const [open,setNav]= useState({
        class:false,
        subject:false
    })
    const [loading,setLoading]= useState(false)
    const [imageInput,setImageInput] = useState({
        src:'',
    })
    function handleInputImage(){
        if(imageInput.src !== ''){
            return(
                    <div className={classes.listImage}>
                <div style= {{position:'relative'}}>
                    {/* <i className={classes.cancleImage}>x</i> */}
                    <img src={imagetem} alt="" className={classes.imageInput}></img>
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
    function handleSendImage(){
         inputEl.current.click();
       return; 
    }
    async function handleFileInput(e){
        const file = e.target.files[0];
        // if(file.type == "image/jpeg" || file.type == "image/png"){
        //     const reader = new FileReader();
        //     reader.onload = function(){
        //         const result = reader.result;
        //         console.log(result)
        //        alert('aaa')
                
        //     }
        //     reader.readAsDataURL(file)
        if(file){
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
            <textarea className={classes.framesText} placeholder="Nhập câu hỏi hoặc gửi hình ảnh, chú ý không yêu cầu giải toàn bộ đề và hãy chia nhỏ câu hỏi để có lời giải nhanh nhất.">  

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
           
        
          
            <div className={classes.sendE}>
                <div className={classes.senQues}>Gửi câu hỏi</div>
            </div>
            <div style={open.class == true || open.subject == true ?{display:"block"}:{display:'none'}} onClick={handleOpenClose}className={classes.overOpen}></div>
        </div>
    </div>)
}
export default withStyles(styles)(AskQuestion)