import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';

import {withStyles} from '@material-ui/core';
import styles from "../styles/header"
import {
  isMobile,
  isBrowser,
  isTablet,
} from "react-device-detect";
import logo from "../assets/images/logo_h247.png"
import iconUser from "../assets/images/icon_user.png"
import iconMenu from "../assets/images/icon-menu2.png"
import systemAvatar from "../assets/images/system_avatar.png"
import backHeader from "../assets/images/back_header.png"
import iconSearchMini from "../assets/images/icon_search.png"
import {getCookieFromBrowser} from "../util/cookies"
import productApi from '../api/productApi'
import PropTypes from 'prop-types';
import { useRouter } from 'next/router'


const useStyles = makeStyles((theme) => ({
  toolbarMargin: {
    height: "52px",
    boxShadow: "0px 0px 5px 1px #2626262b",
    
    [theme.breakpoints.down("md")]: {
      height: "46px",
    
    },
  }
}));


const ButtonAppBar = ({ classes,isLog })=> {
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
          left:'6px',
          right:'0px',
          top:'12px',
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
function handleRepo2(){
  setStyleRepo({})
}
function handleLogo(){
  router.push('/');
  return;
}
  return (
    <div className ={classes.header}>
        <div className={classes.center}>
          <div className={classes.logo} onClick={handleLogo}>
 
          </div>
        {/* <img src={logo} alt="Logo" className={classes.logo}></img> */}
        <div className={classes.sectionSearch} style={styleRepo}>
            <input onFocus={handleRepo} onBlur={handleRepo2} placeholder={valuePlaceSearch} type="text"  className={classes.searchInput}/>
            <img src={iconSearchMini} alt="icon search" className={classes.iconSearchMini}></img>
            <button className={classes.searchButton}>Tìm</button>
        </div>
        <div className={classes.navSmall} style={isLog ? {display:'none'}:{display:'auto'} }>
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
            <button className={classes.buttonSignin}>Đăng nhập</button>
            <button className={classes.buttonSignup}>Đăng ky</button>
            </div>
          </div>
        </div>
        <ul className ={classes.navAuth} style={isLog ? {display:'none'}:{display:'auto'} }>
            <li className= {classes.navLogo}>
              <img src={iconUser} alt="logo icon user"></img>
            </li>
            <li className={classes.navSignin}><a href="" className ={classes.navAuthText}>Đăng nhập </a></li>
            <li className={classes.navSignup}><a href="" className ={classes.navAuthText}>Đăng ky</a></li>
        </ul>
        
        <ul className ={classes.navAuth2} style={isLog ? {display:'auto'}:{display:'none'} }>
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
            <span className={classes.navUserName}>N16dcdt076@gmail.com</span>
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
              <li  className={classes.navSidebar3child}>
                <div className={classes.navSidebarContent}>
                <span className={classes.triangle}></span>
                <span className={classes.navSidebar3Text}>Trang cá nhân</span>
                </div>
                </li>
              <li  className={classes.navSidebar3child}>
                <div className={classes.navSidebarContent}>
                <span className={classes.triangle} ></span>
              <span className={classes.navSidebar3Text}>Chỉnh sửa thông tin cá nhân</span>
                </div>
              </li>
              <li  className={classes.navSidebar3child}>
                <div className={classes.navSidebarContent}>
                <span className={classes.triangle} ></span><span className={classes.navSidebar3Text}>Đấu trường tri thức</span>
                </div>
              </li>
              <li  className={classes.navSidebar3child}>
                <div className={classes.navSidebarContent}><span className={classes.triangle} ></span><span className={classes.navSidebar3Text}>Điểm danh nhận quà</span></div>
              </li>
              <li  className={classes.navSidebar3child}>
                <div className={classes.navSidebarContent}>
                <span className={classes.triangle} ></span><span className={classes.navSidebar3Text}>Đăng xuất</span>
                </div>
                
              </li>
            </div>
            </ul>
           </div>
        </ul>
        
        </div>
        
    </div>
  );
} 
ButtonAppBar.propTypes = {
  isLogin: PropTypes.bool
};

export default withStyles(styles)(ButtonAppBar)
