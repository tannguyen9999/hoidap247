import React from 'react';
import {withStyles} from '@material-ui/core';
import styles from "./style"
import anh1 from "../../assets/images/anhvip2.jpeg"
import game from "../../assets/images/game.jpg"
import game2 from "../../assets/images/game2.jpg"
import PropTypes, { func } from 'prop-types';
import TimeAgo from 'javascript-time-ago';
import vi from 'javascript-time-ago/locale/vi';
TimeAgo.addLocale(vi);
const timeAgo = new TimeAgo('vi-VN');



const Submenu = ({classes,isStartDay,isName,isLogin,isAvatar})=>{
    let time = ()=>{
        try {
            const a = timeAgo.format(new Date(isStartDay), 'round')
            return a;
        } catch (error) {
            return ''
        }
    }
    return(
        <div className={classes.event}>
        <div className={classes.evenSection1}>
        <div style ={isLogin?{display:"auto"}:{display:"none"}} className={classes.user}>
            <img src={isAvatar !== ''? isAvatar :anh1} alt='avatar' className={classes.avatarUser}></img>
            <div className={classes.infoUser}>
                <div><strong>{isName}</strong></div>
                <div>Hạng: <span style={{color:'rgb(80, 157, 101)'}}>{
                          time()
                }</span></div>
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
    )
}
Submenu.propTypes = {

    isName:PropTypes.string,
    isStartDay:PropTypes.string,
    isLogin: PropTypes.bool,
    isAvatar:PropTypes.string
  };

export default withStyles(styles)(Submenu)