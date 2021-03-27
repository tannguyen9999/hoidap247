import React, { useState, useEffect } from 'react';
import {withStyles} from '@material-ui/core';
import styles from "./style"
import listClass from '../../util/Contants/listClass'
import arrow1 from "../../assets/images/icon-arrow1.png"
import avatar from "../../assets/images/icon_user.png"
import iconDown from "../../assets/images/icon-dow2.png"
import anh1 from "../../assets/images/anh1.jpg"
let text = "tìm tập hợp A các số nguyên a sao ↵ cho : 1/2 + 1/34 bé hơn ↵ hoặc bằ  1/2 + 1/34 bé hơn ↵ hoặc b + 1/34 bé hơn ↵ hoặc bằ+ 1/34 bé hơn ↵ hoặc bằng a/17 < 15/17 - 3/17 ↵ các bạn giúp mik nhé !mik đang cần gấp tìm tập hợp A các số nguyên a sao ↵ cho : 1/2 + 1/34 bé hơn ↵ hoặc bằ  1/2 + 1/34 bé hơn ↵ hoặc b + 1/34 bé hơn ↵ hoặc bằ+ 1/34 bé hơn ↵ hoặc bằng a/17 < 15/17 - 3/17 ↵ các bạn giúp mik nhé !mik đang cần gấp"
let test = text.split("↵")

const Submenu = ({classes})=>{
    const [openNav,setOpenNav] = useState({
        openStatus:false,
        openClass:false,
        open:false
    })
    const [currentClass,setCurrentClass] = useState('0')
   
    const [currentStatus,setCurrentStatus] = useState({
        index:'0',
        value:'Tất cả'
    })

    const handleListClass = ()=>{
        const data =  listClass.map((item,index)=>{
            return(
                <li key={index} data-key={index} onClick={(e)=>handleClickClass(e)} className={classes.itemSeclectClass}>{item.text}</li>
            ) 
        })
        return data
        
    }
    const handleDta = ()=>{
        const data =  test.map((temp,i)=>{
            return(
                <span key={i}>{temp}<br/></span>
            )
        })
        return data
        
    }
   
    function handleCloseNav(){
        setOpenNav(
            {
                openStatus:false,
                openClass:false,
                open:false
            }
        )
    }
    function handleOpenClass(){
        setOpenNav(
            {
                openStatus:false,
                openClass:true,
                open:true
            }
        )
    }
    function handleOpenStatus(){
        setOpenNav(
            {
                openStatus:true,
                openClass:false,
                open:true
            }
        )
    }
    
    function handleClickStatus(e){
        const key = e.target.dataset.key;
        setOpenNav({
            openStatus:false,
            openClass:false,
            open:false
        })

       
        if(key == 0){
            setCurrentStatus({
                index:'0',
                value:'Tất cả'
            })
        }
        if(key == 1){
            setCurrentStatus({
                index:'1',
                value:'Chưa trả lời'
            })
        }
        if(key == 2){
            setCurrentStatus({
                index:'2',
                value:'Đã trả lời'
            })
        }
        if(key == 3){
            setCurrentStatus({
                index:'3',
                value:'Lần đầu hỏi'
            })
        }
        return;

    }
    function handleClickClass(e){
        const key = e.target.dataset.key;
        setOpenNav({
            openStatus:false,
            openClass:false,
            open:false
        })
        setCurrentClass(`${key}` )
        return;

    }
    return(
        (
            <div className={classes.homePage}>
            <div className={classes.bannerResponse}>10000000 câu hỏi đã được trả lời !</div>
            <ul className={classes.customFilter}>
                <li onClick={handleOpenClass} className={classes.filterClass}><span>{`${currentClass == '0'? 'Tất cả': 'Lớp ' + currentClass}`}</span> <img className={classes.filterDown} src={iconDown} alt='icon down'></img>
                </li>
                <div style={openNav.open ? {right:'0'}:{}} onClick={handleCloseNav} className={classes.overNav}></div>
                <ul style={openNav.openClass ? {display:''} : {display:'none'}} className='selectClass'>
                       {handleListClass()}
                    </ul> 
                <li onClick={handleOpenStatus} className={classes.filterStatus}><span>{currentStatus.value}</span> <img className={classes.filterDown} src={iconDown} alt='icon down'></img></li>
                <ul className='selectStatus' style={openNav.openStatus ? {display:''} : {display:'none'}} >
                        <li data-key='0' onClick={(e)=>handleClickStatus(e)} className={classes.filterStatusItem}>Tất cả</li>
                        <li data-key='1' onClick={(e)=>handleClickStatus(e)} className={classes.filterStatusItem}>Đã trả lời</li>
                        <li data-key='2' onClick={(e)=>handleClickStatus(e)} className={classes.filterStatusItem}>Chưa trả lời</li>
                        <li data-key='3' onClick={(e)=>handleClickStatus(e)} className={classes.filterStatusItem}>Lần đầu hỏi</li>
                    </ul>
            </ul>
            <div className = {classes.listQuestion}>
                <div className={classes.itemQuestion}>
                    <ul className={classes.headerQuestion} >
                        <li className={classes.itemHeaderQuestion}><img className = {classes.avatar} src={avatar} alt='avatarUser'></img></li>
                        <li className={classes.itemHeaderQuestion}>Toán Học</li>
                        <li className={classes.itemHeaderQuestion}>Lop 7</li>
                        <li className={classes.itemHeaderQuestion}>vai giay truoc</li>
                    </ul>
                    <div className={classes.textQuestion} >    

                    {handleDta()}
                    </div>
                    <a className={classes.replayButton}>Trả lời</a>
                </div>
                 <div className={classes.itemQuestion}>
                    <ul className={classes.headerQuestion} >
                        <li className={classes.itemHeaderQuestion}><img className = {classes.avatar} src={avatar} alt='avatarUser'></img></li>
                        <li className={classes.itemHeaderQuestion}>Toán Học</li>
                        <li className={classes.itemHeaderQuestion}>Lop 7</li>
                        <li className={classes.itemHeaderQuestion}>vai giay truoc</li>
                    </ul>
                    <div className={classes.textQuestion} >    

                    {handleDta()}
                    </div>
                    <a className={classes.replayButton}>Trả lời</a>
                </div>
                <div className={classes.itemQuestion}>
                    <ul className={classes.headerQuestion} >
                        <li className={classes.itemHeaderQuestion}><img className = {classes.avatar} src={avatar} alt='avatarUser'></img></li>
                        <li className={classes.itemHeaderQuestion}>Toán Học</li>
                        <li className={classes.itemHeaderQuestion}>Lop 7</li>
                        <li className={classes.itemHeaderQuestion}>vai giay truoc</li>
                    </ul>
                    <div className={classes.textQuestion} >    

                    {handleDta()}
                    </div>
                    <a className={classes.replayButton}>Trả lời</a>
                </div>
                <div className={classes.itemQuestion}>
                    <ul className={classes.headerQuestion} >
                        <li className={classes.itemHeaderQuestion}><img className = {classes.avatar} src={avatar} alt='avatarUser'></img></li>
                        <li className={classes.itemHeaderQuestion}>Toán Học</li>
                        <li className={classes.itemHeaderQuestion}>Lop 7</li>
                        <li className={classes.itemHeaderQuestion}>vai giay truoc</li>
                    </ul>
                    <div className={classes.textQuestion} >    

                    {handleDta()}
                    </div>
                    <a className={classes.replayButton}>Trả lời</a>
                </div>
                <div className={classes.itemQuestion}>
                    <ul className={classes.headerQuestion} >
                        <li className={classes.itemHeaderQuestion}><img className = {classes.avatar} src={anh1} alt='avatarUser'></img></li>
                        <li className={classes.itemHeaderQuestion}>Toán Học</li>
                        <li className={classes.itemHeaderQuestion}>Lop 7</li>
                        <li className={classes.itemHeaderQuestion}>vai giay truoc</li>
                    </ul>
                    <div className={classes.textQuestion} >    

                    {handleDta()}
                    </div>
                    <a className={classes.replayButton}>Trả lời</a>
                </div>
            </div>
            <div className={classes.seeMore}>Xem thêm<img className={classes.arrow1} src={arrow1} alt='arrow 1'></img></div>
        </div>
        )
    )

}

export default withStyles(styles)(Submenu)