import React, { useState, useEffect } from 'react';
import {withStyles} from '@material-ui/core';
import styles from "./style"
import contentSlideBar from '../../util/Contants/contentSlideBar'
import { useDispatch, useSelector } from 'react-redux';
import { isLoading } from './../../app/loadingSile';
import { useRouter } from 'next/router'
import Link from 'next/link'
import { nanoid } from 'nanoid'



const Submenu = ({classes,isActive,isSearch})=>{
    const dispatch = useDispatch();
    const router = useRouter()

    const handleContenSileBar = ()=>{
        const data = contentSlideBar.map((item,index)=>{
            return(
                <Link href={item.link} passHref key={nanoid(8)} >
                <li onClick={(e)=>handleChangeCategory(e)} key={nanoid(9)} data-keyprops={index} style={isActive == index ? {background:'#e7b712'}:{} } className={classes.subCatego}>
                    <i key={nanoid(10)} className={`${classes.kihieu} ${item.iconCLass}`}></i>
                    <span key={nanoid(10)} className={classes.subMenuText}>{item.text}</span>
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
            <div style={isSearch?{visibility:'hidden'}:{}} className={classes.subMenu}>
            <ul className={classes.subMenu2} >
                {handleContenSileBar()}
            </ul>
        </div>
        )
    )

}

export default withStyles(styles)(Submenu)