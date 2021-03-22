import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';

import {withStyles} from '@material-ui/core';
import styles from "../styles/main"
import iconDown from "../assets/images/icon-dow2.png"
const MainBoard = ({ classes })=> {
    return(<div className = {classes.overMain}>
        <div className={classes.subMenu}>
            <ul className={classes.subMenu2}>
                <li className={classes.subCatego}><i className={`${classes.kihieu} fas fa-border-all`}></i><span className={classes.subMenuText}>Tất cả</span></li>
                <li className={classes.subCatego}><i className={`${classes.kihieu} fas fa-calculator`}></i><span className={classes.subMenuText}>Toán Học</span></li>
                <li className={classes.subCatego}><i className={`${classes.kihieu} fab fa-reacteurope`}></i><span className={classes.subMenuText}>Vật Lý</span></li>
                <li className={classes.subCatego}><i className={`${classes.kihieu} fab fa-angular`}></i><span className={classes.subMenuText}>Hóa Học</span></li>
                <li className={classes.subCatego}><i className={`${classes.kihieu} fas fa-language`}></i><span className={classes.subMenuText}>Ngoại Ngữ</span></li>
                <li className={classes.subCatego}><i className={`${classes.kihieu} far fa-bookmark`}></i><span className={classes.subMenuText}>Ngữ Văn</span></li>
                <li className={classes.subCatego}><i className={`${classes.kihieu} fab fa-pagelines`}></i><span className={classes.subMenuText}>Sinh Học</span></li>
                <li className={classes.subCatego}><i className={`${classes.kihieu} fas fa-hat-cowboy`}></i><span className={classes.subMenuText}>Lịch Sử</span></li>
                <li className={classes.subCatego}><i className={`${classes.kihieu} fas fa-globe-asia`}></i><span className={classes.subMenuText}>Địa Lý</span></li>
                <li className={classes.subCatego}><i className={`${classes.kihieu} fab fa-fort-awesome`}></i><span className={classes.subMenuText}>GDCD</span></li>
                <li className={classes.subCatego}><i className={`${classes.kihieu} fas fa-laptop-code`}></i><span className={classes.subMenuText}>Tin Học</span></li>
                <li className={classes.subCatego}><i className={`${classes.kihieu} fas fa-tachometer-alt`}></i><span className={classes.subMenuText}>Công Nghệ</span></li>
                <li className={classes.subCatego}><i className={`${classes.kihieu} fas fa-music`}></i><span className={classes.subMenuText}>Nhạc Họa</span></li>
            </ul>
        </div>
        <div className={classes.homePage}>
            <ul className={classes.customFilter}>
                <li className={classes.filterClass}><span>Chọn lớp</span> <img className={classes.filterDown} src={iconDown} alt='icon down'></img>
                </li>
                <ul className={classes.selectClass}>
                        <li className={classes.itemSeclectClass}>Tất cả</li>
                        <li className={classes.itemSeclectClass}>Lớp 1</li>
                        <li className={classes.itemSeclectClass}>Lớp 2</li>
                        <li className={classes.itemSeclectClass}>Lớp 3</li>
                        <li className={classes.itemSeclectClass}>Lớp 4</li>
                        <li className={classes.itemSeclectClass}>Lớp 5</li>
                        <li className={classes.itemSeclectClass}>Lớp 6</li>
                        <li className={classes.itemSeclectClass}>Lớp 7</li>
                        <li className={classes.itemSeclectClass}>Lớp 8</li>
                        <li className={classes.itemSeclectClass}>Lớp 9</li>
                        <li className={classes.itemSeclectClass}>Lớp 10</li>
                        <li className={classes.itemSeclectClass}>Lớp 11</li>
                        <li className={classes.itemSeclectClass}>Lớp 12</li>
                    </ul>
                <li className={classes.filterStatus}><span>Trạng thái câu hỏi</span> <img className={classes.filterDown} src={iconDown} alt='icon down'></img></li>
            </ul>
        </div>
        <div className={classes.event}>
            <span>c</span>
        </div>
    </div>)
}


  
export default withStyles(styles)(MainBoard)