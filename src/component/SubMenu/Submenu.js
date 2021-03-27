import React, { useState, useEffect } from 'react';
import {withStyles} from '@material-ui/core';
import styles from "./style"
import contentSlideBar from '../../util/Contants/contentSlideBar'
import { useDispatch, useSelector } from 'react-redux';
import { isLoading } from './../../app/loadingSile';
import { useRouter } from 'next/router'
import Link from 'next/link'


const Submenu = ({classes,isActive})=>{
    const dispatch = useDispatch();
    const router = useRouter()

    const handleContenSileBar = ()=>{
        const data = contentSlideBar.map((item,index)=>{
            return(
                <Link href={item.link} passHref >
                <li onClick={(e)=>handleChangeCategory(e)} key={index} data-keyprops={index} style={isActive == index ? {background:'#e7b712'}:{} } className={classes.subCatego}>
                    <i key={index} className={`${classes.kihieu} ${item.iconCLass}`}></i>
                    <span key={index} className={classes.subMenuText}>{item.text}</span>
                </li>
                </Link>

            )
            
        }   
        )
        return data       
    }
    function handleChangeCategory(e){
        //     const key = e.target.closest("li");
        //     const keyprops = key.dataset.keyprops;
        //     const pust = contentSlideBar[keyprops];

                    const changeIsLoading = {
                        isLoading: true
                      };
                    const action = isLoading(changeIsLoading);
                    dispatch(action);
          
            return
       
    }
    

    return(
        (
            <div className={classes.subMenu}>
            <ul className={classes.subMenu2} >
                {handleContenSileBar()}
            </ul>
        </div>
        )
    )

}

export default withStyles(styles)(Submenu)