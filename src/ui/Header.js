import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';

import {withStyles} from '@material-ui/core';
import styles from "../styles/header"
import {
  isMobile,
  isBrowser,
  isTablet,
} from "react-device-detect";
import iconUser from "../assets/images/icon_user.png"
import iconMenu from "../assets/images/icon-menu2.png"
import systemAvatar from "../assets/images/system_avatar.png"
import backHeader from "../assets/images/back_header.png"
import iconSearchMini from "../assets/images/icon_search.png"
import {removeCookie} from "../util/cookies"
import productApi from '../api/productApi'
import PropTypes from 'prop-types';
import { useRouter } from 'next/router'
import { isLoading } from './../app/loadingSile';
import { useDispatch, useSelector } from 'react-redux';
import Link from 'next/link'




const ButtonAppBar = ({ classes,isLog,isAudth,isName,isStartDay })=> {


  const dispatch = useDispatch();
  const router = useRouter()

  const [openNav, setOpenNav] = useState({
    right:'-700px'
  });
  const [openNav2, setOpenNav2] = useState({
    right:''
  });
  const [valuePlaceSearch, setValuePlaceSearch] = useState('Câu hỏi của bạn là gì ?');
  const [styleRepo,setStyleRepo] = useState(
    {
      
    } 
  ) 

  const [valueInputSearch, setValueInputSearch] = useState('');

  async function hanldeOpenNav(){
    try {
      await productApi.getUserById('122dasd');
    } catch (error) {
      
    }
    if(openNav.right !== '-700px'){
      setOpenNav({
      right:'-700px',
      
    })
    }else{
      setOpenNav({
      right:'0',
      
        
      })
    }
  }
  async function hanldeOpenNav2(){
    
    if(openNav2.right !== ''){
      setOpenNav2({
      right:'',
      
    })
    }else{
      setOpenNav2({
      right:'0',
      
        
      })
    }
  }
  function clearNav(){
    setOpenNav2({
      right:'',
      
    })
  }
  useEffect(() => {
    if(isMobile){
      setValuePlaceSearch('Tìm kiếm')
    }
    if(isBrowser){
      setValuePlaceSearch('Câu hỏi của bạn là gì ?')
    }
  });


  function handleRepo(){
    if(isMobile && isTablet == false){
      setStyleRepo(
        {
          position:'fixed',
          left:'0px',
          right:'0px',
          top:'10px',
          paddingLeft:'10px',
          paddingRight:'10px',
          backgroundColor:'white',
          ['@media (max-width:649px)']: {
            
          }
          
      }
      )
    }
    return
  }

function handleExit(){
  removeCookie("token");
  removeCookie("startDay");
  removeCookie("name");
  removeCookie("avatar");
}
function handleRepo2(){
  setStyleRepo({})
}
function handleLoading(){
  
  setTimeout(function(){
    const changeIsLoading = {
        isLoading: true
      };
    const action = isLoading(changeIsLoading);
    dispatch(action);
 }, 100);
  return;
}
function handleSearch(){
  if(valueInputSearch !== ''){
    const content = valueInputSearch.replaceAll('\n','↵');
    router.push(`/search/${content}`)
    return
  }
  return
}
function handleChangeInputSearch(e){
  const value = e.target.value;
  setValueInputSearch(value)
  return
}
  return (
    <div  className ={classes.header}>
        <div className={classes.center}>
          <Link href="/" passHref>
          <div className={classes.logo} onClick={handleLoading}></div>
            
          </Link>

        {/* <img src={logo} alt="Logo" className={classes.logo}></img> */}
        <div className={classes.sectionSearch} style={isAudth ? {display:'none'} :{}}>
            <input value={valueInputSearch} onKeyPress={event => {
                if (event.key === 'Enter') {
                  if(valueInputSearch !== ''){
                  const content = valueInputSearch.replaceAll('\n','↵');

                    router.push(`/search/${content}`)
                    return
                  }
                  return
                }
              }} onChange={(e)=>{handleChangeInputSearch(e)}} onFocus={handleRepo} onBlur={handleRepo2} placeholder={valuePlaceSearch} type="text"  className={classes.searchInput}/>
            <img src={iconSearchMini} alt="icon search" className={classes.iconSearchMini}></img>
            <button onClick={handleSearch} className={classes.searchButton}>Tìm</button>
        </div>
        <div className={classes.navSmall} style={isLog || isAudth ? {display:'none'}:{} }>
          <img src={iconMenu} alt="menu icon" className={classes.navIconMenu} onClick={hanldeOpenNav}></img>
          <div className={classes.navSidebar} style={openNav}>
            <div className={classes.navSidebar1}>
            <img src={systemAvatar} alt="system on avatar" className={classes.systemAvatar}></img>
            <p className={classes.textHeader}><strong>Hoidap247.com <br/>Nhanh chóng, chính xác</strong></p>
            <img 
            src={backHeader} 
            alt="back header" 
            className={classes.backHeader}
            onClick={hanldeOpenNav}
            ></img>
            </div>
            <div className={classes.navSidebar2}>
            <h4 className = {classes.textHeader2}>Hãy đăng nhập hoặc tạo tài khoản miễn phí!</h4>
            <Link href="/login" passHref>
            <button className={classes.buttonSignin}>Đăng nhập</button>
            </Link>
            <Link href="/signup" passHref>
            <button className={classes.buttonSignup}>Đăng ky</button>

            </Link>
            </div>
          </div>
        </div>
        <ul className ={classes.navAuth} style={isLog || isAudth ?  {display:'none'}:{} }>
            <li className= {classes.navLogo}>
              <img src={iconUser} alt="logo icon user"></img>
            </li>
            <Link href="/login" passHref>
            <li className={classes.navSignin}><a href="" className ={classes.navAuthText}>Đăng nhập </a></li>
            </Link>
            <Link href="/signup" passHref>
            <li className={classes.navSignup}><a href="" className ={classes.navAuthText}>Đăng ky</a></li>

            </Link>
        </ul>
        
        <ul className ={classes.navAuth2} style={isLog ? {}:{display:'none'} }>
            <li className= {classes.navMess}>
            <i className="far fa-comment-dots"></i>
            </li>
            <li className={classes.navBell}>
            <i className="far fa-bell"></i>
            </li>
            <li className={classes.navUser} onClick={hanldeOpenNav2}>
            <i className="far fa-user"></i>
            </li>
            <li className={classes.navUserMore} onClick={hanldeOpenNav2}>
            <i className="fas fa-angle-double-down"></i>
            <span className={classes.navUserName}>{isName}</span>
            </li>
            
           <div>
           <div style={openNav2} className={classes.overNav} onClick={clearNav}></div>
           <ul style={openNav2}  className={classes.navSidebar3} >
           
            <div>
            <img 
            src={backHeader} 
            alt="back header" 
            style={{

              marginLeft: 'auto',
              marginRight: '12px'
            }
            }
            className={classes.backHeader}
            onClick={hanldeOpenNav2}
            ></img>
              <div onClick={hanldeOpenNav2}>
              <Link href="/user/profile"  passHref>

<li  className={classes.navSidebar3child} onClick={handleLoading} style={{cursor:'pointer'}}>
  <div className={classes.navSidebarContent}>
  <span className={classes.triangle}></span>
  <span className={classes.navSidebar3Text}>Trang cá nhân</span>
  </div>
  </li>
  </Link>
              </div>
                
                <div onClick={hanldeOpenNav2}>

              <Link href="/user/profile" passHref>

<li style={{cursor:'pointer'}} className={classes.navSidebar3child} onClick={handleLoading}>

<div className={classes.navSidebarContent}>
  <span className={classes.triangle} ></span>
<span className={classes.navSidebar3Text}>Chỉnh sửa thông tin cá nhân</span>
  </div>
  
</li>
</Link>
                </div>
              <li  className={classes.navSidebar3child}>
                <div className={classes.navSidebarContent}>
                <span className={classes.triangle} ></span><span className={classes.navSidebar3Text}>Đấu trường tri thức</span>
                </div>
              </li>
              <li  className={classes.navSidebar3child}>
                <div className={classes.navSidebarContent}><span className={classes.triangle} ></span><span className={classes.navSidebar3Text}>Điểm danh nhận quà</span></div>
              </li>
              <Link href="/" passHref>
                 <li  className={classes.navSidebar3child} onClick={handleExit}>
                <div className={classes.navSidebarContent}>
                <span className={classes.triangle} ></span><span className={classes.navSidebar3Text}>Đăng xuất</span>
                </div>
                
              </li>
              </Link>
              
            </div>
            </ul>
           </div>
        </ul>
        
        </div>
        
    </div>
  );
} 
ButtonAppBar.propTypes = {
  isLogin: PropTypes.bool,
  isAudth:PropTypes.bool,
  isName:PropTypes.string,
};

export default withStyles(styles)(ButtonAppBar)
