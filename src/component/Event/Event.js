import React, { useState, useEffect } from 'react';
import {withStyles} from '@material-ui/core';
import styles from "./style"
import anh1 from "../../assets/images/anh1.jpg"
import game from "../../assets/images/game.jpg"
import game2 from "../../assets/images/game2.jpg"

const Submenu = ({classes})=>{
    return(
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
    )
}

export default withStyles(styles)(Submenu)