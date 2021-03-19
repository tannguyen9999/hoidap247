import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';

import {withStyles} from '@material-ui/core';
import styles from "../styles/header"
import {
  isMobile,
  isBrowser,
  isTablet,
  MobileView,
} from "react-device-detect";
import logo from "../assets/images/logo_h247.png"
import iconUser from "../assets/images/icon_user.png"
import iconMenu from "../assets/images/icon-menu2.png"
import systemAvatar from "../assets/images/system_avatar.png"
import backHeader from "../assets/images/back_header.png"
import iconSearchMini from "../assets/images/icon_search.png"
import {getCookieFromBrowser} from "../util/cookies"
const useStyles = makeStyles((theme) => ({
  toolbarMargin: {
    height: "52px",
    boxShadow: "0px 0px 5px 1px #2626262b",
    
    [theme.breakpoints.down("md")]: {
      height: "46px",
    
    },
  }
}));


const ButtonAppBar = ({isLogin, classes })=> {
  
  const token = getCookieFromBrowser('token')
 
  const classesTheme = useStyles();
  const [openNav, setOpenNav] = useState({
    right:'-700px'
  });
  const [valuePlaceSearch, setValuePlaceSearch] = useState('Câu hỏi của bạn là gì ?');
  const [styleRepo,setStyleRepo] = useState(
    {
      
    } 
  ) 
  function hanldeOpenNav(){
    console.log(openNav)
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
  return (
    <div className ={classes.header}>
        <div className={classes.center}>
        <img src={logo} alt="Logo" className={classes.logo}></img>
        <div className={classes.sectionSearch} style={styleRepo}>
            <input onFocus={handleRepo} onBlur={handleRepo2} placeholder={valuePlaceSearch} type="text"  className={classes.searchInput}/>
            <img src={iconSearchMini} alt="icon search" className={classes.iconSearchMini}></img>
            <button className={classes.searchButton}>Tìm</button>
        </div>
        <div className={classes.navSmall} style={isLogin.section1}>
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
        <ul className ={classes.navAuth} style={isLogin.section1}>
            <li className= {classes.navLogo}>
              <img src={iconUser} alt="logo icon user"></img>
            </li>
            <li className={classes.navSignin}><a href="" className ={classes.navAuthText}>Đăng nhập </a></li>
            <li className={classes.navSignup}><a href="" className ={classes.navAuthText}>Đăng ky</a></li>
        </ul>
        <ul className ={classes.navAuth2} style={isLogin.section2}>
            <li className= {classes.navMess}>
            <i class="far fa-comment-dots"></i>
            </li>
            <li className={classes.navBell}>
            <i class="far fa-bell"></i>
            </li>
            <li className={classes.navUser}>
            <i class="far fa-user"></i>
            </li>
            <li className={classes.navUserMore}>
            <i className="fas fa-angle-double-down"></i>
            <span className={classes.navUserName}>N16dcdt076@gmail.com</span>
            </li>
        </ul>
        </div>
        
    </div>
  );
}

ButtonAppBar.getInitialProps = async ({ req }) => {
  // const response = await axios.get('http://localhost:8000/api/v0/posts');
  const data = {a:'a52'};

  return {
      data
  };
}



export default withStyles(styles)(ButtonAppBar)
