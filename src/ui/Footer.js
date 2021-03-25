import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';

import {withStyles} from '@material-ui/core';
import styles from "../styles/footer"
import company from "../assets/images/logo_h247_footer.png"
import facebook from "../assets/images/fp.png"
import youtube from "../assets/images/youtube.png"
import mess from "../assets/images/icon_mesenger.png"
import place from "../assets/images/icon-place.png"
const Footer = ({classes})=>{  
    return(<div className={classes.footer}>
        <div className={classes.overFooter}>
            <div className={classes.aboutCompany}>
                <img src={company} className={classes.imaCom}></img>
                <span>Cơ quan chủ quản: Công ty Cổ phần Công nghệ Giáo dục Thành Phát</span>
                <div className={classes.social1}>
                    <div className={classes.logoSocial}>
                    <img src={facebook} className={classes.social}></img>
                    </div>
                    <div className={classes.logoSocial}>
                    <img src={youtube} className={classes.social}></img>
                    </div>
                </div>
            </div>
            <div className={classes.rules}>
                <ul style={{listStyleType: 'circle'}}>
                    <li>Hướng dẫn sử dụng</li>
                    <li>Điều khoản sử dụng</li>
                    <li>Nội quy hoidap247</li>
                </ul>
            </div>
            <div className={classes.section3}>
            <ul style={{listStyleType: 'circle'}}>
                    <li> Sự kiện nóngg</li>
                    <li> Kết quả đua top </li>
                    <li>Thông báo</li>
                </ul>
                <div className={classes.local}><img src={mess} alt="messenger" className={classes.imgLocal}></img>mailInbox: tan10a7@gmail.com</div>
                <div className={classes.local} ><img src={place} alt="messenger" className={classes.imgLocal}></img>Trụ sở:  97 Man Thiện, Tòa nhà H3, Phường Hiệp Phú, Quận 9, Hồ Chí Minh.</div>

            </div>
        </div>
    </div>)
} 

export default withStyles(styles)(Footer);