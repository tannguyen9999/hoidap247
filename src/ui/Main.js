import React, { useState, useEffect } from 'react';

import {ListItem, withStyles} from '@material-ui/core';
import styles from "../styles/main"
import iconDown from "../assets/images/icon-dow2.png"
import avatar from "../assets/images/icon_user.png"
import anh1 from "../assets/images/anh1.jpg"
import arrow1 from "../assets/images/icon-arrow1.png"
import game from "../assets/images/game.jpg"
import game2 from "../assets/images/game2.jpg"
import AskQuestion from "../component/AskQuestion/AskQuestion"
import PropTypes, { func } from 'prop-types';
import { useRouter } from 'next/router'
import Loading from "../component/Loading.js/Loading"
import { useDispatch, useSelector } from 'react-redux';
import { isLoading } from './../app/loadingSile';
import contentSlideBar from '../util/Contants/contentSlideBar'
import listClass from '../util/Contants/listClass'
let text = "tìm tập hợp A các số nguyên a sao ↵ cho : 1/2 + 1/34 bé hơn ↵ hoặc bằ  1/2 + 1/34 bé hơn ↵ hoặc b + 1/34 bé hơn ↵ hoặc bằ+ 1/34 bé hơn ↵ hoặc bằng a/17 < 15/17 - 3/17 ↵ các bạn giúp mik nhé !mik đang cần gấp tìm tập hợp A các số nguyên a sao ↵ cho : 1/2 + 1/34 bé hơn ↵ hoặc bằ  1/2 + 1/34 bé hơn ↵ hoặc b + 1/34 bé hơn ↵ hoặc bằ+ 1/34 bé hơn ↵ hoặc bằng a/17 < 15/17 - 3/17 ↵ các bạn giúp mik nhé !mik đang cần gấp"
let test = text.split("↵")




const MainBoard = ({ classes,isActive })=> {

    const dispatch = useDispatch();

    const router = useRouter()
    
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

    
        setTimeout(function(){
            const changeIsLoading2 = {
                isLoading: false
              };
            const action2 = isLoading(changeIsLoading2);
            dispatch(action2);
         }, 300);

        
    

    const handleContenSileBar = ()=>{
        const data = contentSlideBar.map((item,index)=>{
            return(
                <li key={index} data-keyprops={index} style={isActive == index ? {background:'#e7b712'}:{} } className={classes.subCatego}>
                    <i className={`${classes.kihieu} ${item.iconCLass}`}></i>
                    <span className={classes.subMenuText}>{item.text}</span>
                </li>

            )
            
        }   
        )
        return data       
    }
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

    function handleChangeCategory(e){
    try {
        const key = e.target.closest("li");
        const keyprops = key.dataset.keyprops;
        
        console.log(keyprops)
        const pust = contentSlideBar[keyprops];
        const {link} = pust;
        if(link){
            const changeIsLoading = {
                isLoading: true
              };
            const action = isLoading(changeIsLoading);
            dispatch(action);
            router.push(link)
        }
        return
    } catch (error) {
        
    }
}


    return(<div className = {classes.overMain}>
        <div className={classes.subMenu}>
            <ul className={classes.subMenu2} onClick={(e)=>handleChangeCategory(e)}>
                {handleContenSileBar()}
            </ul>
        </div>
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
        <div className={classes.event}>
            <div className={classes.evenSection1}>
            <div className={classes.user}>
                <img src={anh1} alt='avatar' className={classes.avatarUser}></img>
                <div className={classes.infoUser}>
                    <div><strong>N16dcdt076</strong></div>
                    <div>Hạng: <span style={{color:'rgb(80, 157, 101)'}}>Linh moi</span></div>
                </div>
            </div>
            <div className={classes.advertisement}>
                <img src={game} alt='vo lam' className={classes.game}></img>
                <img src={game2} alt='vo lam' className={classes.game}></img>
                <a href="tel:0326693535" className={classes.contact}>
                    <strong>Liên hệ đặt quảng cáo ngay:</strong>
                    <div style={{textAlign:'center',lineHeight:'60px'}}><strong>0326693535</strong>
                    {/* <Lottie src="https://assets10.lottiefiles.com/packages/lf20_tlzxty4j.json"></Lottie> */}
                    </div>
                </a>
                </div>
            </div>
    
            
        </div>
        <AskQuestion></AskQuestion>
       
    </div>)
}

MainBoard.propTypes = {
    isActive: PropTypes.number
  };
  
export default withStyles(styles)(MainBoard)