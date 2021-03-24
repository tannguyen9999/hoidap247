import React, { useState, useEffect } from 'react';

import {withStyles} from '@material-ui/core';
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

let text = "tìm tập hợp A các số nguyên a sao ↵ cho : 1/2 + 1/34 bé hơn ↵ hoặc bằ  1/2 + 1/34 bé hơn ↵ hoặc b + 1/34 bé hơn ↵ hoặc bằ+ 1/34 bé hơn ↵ hoặc bằng a/17 < 15/17 - 3/17 ↵ các bạn giúp mik nhé !mik đang cần gấp tìm tập hợp A các số nguyên a sao ↵ cho : 1/2 + 1/34 bé hơn ↵ hoặc bằ  1/2 + 1/34 bé hơn ↵ hoặc b + 1/34 bé hơn ↵ hoặc bằ+ 1/34 bé hơn ↵ hoặc bằng a/17 < 15/17 - 3/17 ↵ các bạn giúp mik nhé !mik đang cần gấp"
let test = text.split("↵")




const MainBoard = ({ classes,isActive })=> {
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
    const handleDta = ()=>{
        const data =  test.map((temp,i)=>{
            return(
                <span key={i}>{temp}<br/></span>
            )
        })
        return data
        // console.log(a,'hiihih')
        // return a
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
        if(keyprops == 0){
        router.push('/');
        return}
        if(keyprops == 1){
        router.push('/mon-toan');
        return}
        if(keyprops == 2){
        router.push('/mon-ly');
        return}
        if(keyprops == 3){
        router.push('/mon-hoa');
        return}
        if(keyprops == 4){
        router.push('/mon-ngoaingu');
        return}
        if(keyprops == 5){
        router.push('/mon-van');
        return}
        if(keyprops == 6){
        router.push('/mon-sinh');
        return}
        if(keyprops == 7){
        router.push('/mon-su');
        return}
        if(keyprops == 8){
        router.push('/mon-dia');
        return}
        if(keyprops == 9){
        router.push('/mon-congdan');
        return}
        if(keyprops == 10){
        router.push('/mon-tin');
        return}
        if(keyprops == 11){
        router.push('/mon-congnghe');
        return}
        if(keyprops == 12){
        router.push('/mon-nhac');
        return}
    return
    } catch (error) {
        
    }
}

    return(<div className = {classes.overMain}>
        <div className={classes.subMenu}>
            <ul className={classes.subMenu2} onClick={(e)=>handleChangeCategory(e)}>
                <li data-keyprops='0' style={isActive == 0 ? {background:'#e7b712'}:{} } className={classes.subCatego}><i className={`${classes.kihieu} fas fa-border-all`}></i><span className={classes.subMenuText}>Tất cả</span></li>
                <li data-keyprops='1' style={isActive == 1 ? {background:'#e7b712'}:{} } className={classes.subCatego}><i className={`${classes.kihieu} fas fa-calculator`}></i><span className={classes.subMenuText}>Toán Học</span></li>
                <li data-keyprops='2' style={isActive == 2 ? {background:'#e7b712'}:{} } className={classes.subCatego}><i className={`${classes.kihieu} fab fa-reacteurope`}></i><span className={classes.subMenuText}>Vật Lý</span></li>
                <li data-keyprops='3' style={isActive == 3 ? {background:'#e7b712'}:{} } className={classes.subCatego}><i className={`${classes.kihieu} fab fa-angular`}></i><span className={classes.subMenuText}>Hóa Học</span></li>
                <li data-keyprops='4' style={isActive == 4 ? {background:'#e7b712'}:{} } className={classes.subCatego}><i className={`${classes.kihieu} fas fa-language`}></i><span className={classes.subMenuText}>Ngoại Ngữ</span></li>
                <li data-keyprops='5' style={isActive == 5 ? {background:'#e7b712'}:{} } className={classes.subCatego}><i className={`${classes.kihieu} far fa-bookmark`}></i><span className={classes.subMenuText}>Ngữ Văn</span></li>
                <li data-keyprops='6' style={isActive == 6 ? {background:'#e7b712'}:{} } className={classes.subCatego}><i className={`${classes.kihieu} fab fa-pagelines`}></i><span className={classes.subMenuText}>Sinh Học</span></li>
                <li data-keyprops='7' style={isActive == 7 ? {background:'#e7b712'}:{} } className={classes.subCatego}><i className={`${classes.kihieu} fas fa-hat-cowboy`}></i><span className={classes.subMenuText}>Lịch Sử</span></li>
                <li data-keyprops='8' style={isActive == 8 ? {background:'#e7b712'}:{} } className={classes.subCatego}><i className={`${classes.kihieu} fas fa-globe-asia`}></i><span className={classes.subMenuText}>Địa Lý</span></li>
                <li data-keyprops='9' style={isActive == 9 ? {background:'#e7b712'}:{} } className={classes.subCatego}><i className={`${classes.kihieu} fab fa-fort-awesome`}></i><span className={classes.subMenuText}>GDCD</span></li>
                <li data-keyprops='10' style={isActive == 10 ? {background:'#e7b712'}:{} } className={classes.subCatego}><i className={`${classes.kihieu} fas fa-laptop-code`}></i><span className={classes.subMenuText}>Tin Học</span></li>
                <li data-keyprops='11' style={isActive == 11 ? {background:'#e7b712'}:{} } className={classes.subCatego}><i className={`${classes.kihieu} fas fa-tachometer-alt`}></i><span className={classes.subMenuText}>Công Nghệ</span></li>
                <li data-keyprops='12' style={isActive == 12 ? {background:'#e7b712'}:{} } className={classes.subCatego}><i className={`${classes.kihieu} fas fa-music`}></i><span className={classes.subMenuText}>Nhạc Họa</span></li>
            </ul>
        </div>
        <div className={classes.homePage}>
            <div className={classes.bannerResponse}>10000000 câu hỏi đã được trả lời !</div>
            <ul className={classes.customFilter}>
                <li onClick={handleOpenClass} className={classes.filterClass}><span>{`${currentClass == '0'? 'Tất cả': 'Lớp ' + currentClass}`}</span> <img className={classes.filterDown} src={iconDown} alt='icon down'></img>
                </li>
                <div style={openNav.open ? {right:'0'}:{}} onClick={handleCloseNav} className={classes.overNav}></div>
                <ul style={openNav.openClass ? {display:''} : {display:'none'}} className='selectClass'>
                        <li data-key='0' onClick={(e)=>handleClickClass(e)} className={classes.itemSeclectClass}>Tất cả</li>
                        <li data-key='1' onClick={(e)=>handleClickClass(e)} className={classes.itemSeclectClass}>Lớp 1</li>
                        <li data-key='2' onClick={(e)=>handleClickClass(e)} className={classes.itemSeclectClass}>Lớp 2</li>
                        <li data-key='3' onClick={(e)=>handleClickClass(e)} className={classes.itemSeclectClass}>Lớp 3</li>
                        <li data-key='4' onClick={(e)=>handleClickClass(e)} className={classes.itemSeclectClass}>Lớp 4</li>
                        <li data-key='5' onClick={(e)=>handleClickClass(e)} className={classes.itemSeclectClass}>Lớp 5</li>
                        <li data-key='6' onClick={(e)=>handleClickClass(e)} className={classes.itemSeclectClass}>Lớp 6</li>
                        <li data-key='7' onClick={(e)=>handleClickClass(e)} className={classes.itemSeclectClass}>Lớp 7</li>
                        <li data-key='8' onClick={(e)=>handleClickClass(e)} className={classes.itemSeclectClass}>Lớp 8</li>
                        <li data-key='9' onClick={(e)=>handleClickClass(e)} className={classes.itemSeclectClass}>Lớp 9</li>
                        <li data-key='10' onClick={(e)=>handleClickClass(e)} className={classes.itemSeclectClass}>Lớp 10</li>
                        <li data-key='11' onClick={(e)=>handleClickClass(e)} className={classes.itemSeclectClass}>Lớp 11</li>
                        <li data-key='12' onClick={(e)=>handleClickClass(e)} className={classes.itemSeclectClass}>Lớp 12</li>
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