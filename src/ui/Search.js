import React, { useState,useEffect } from 'react';

import {withStyles} from '@material-ui/core';
import styles from "../styles/main"



import AskQuestion from "../component/AskQuestion/AskQuestion"
import PropTypes, { func } from 'prop-types';
import { useDispatch } from 'react-redux';
import { isLoading } from './../app/loadingSile';

import Submenu from '../component/SubMenu/Submenu'
import HomePage from '../component/HomePage/HomePage'
import Event from '../component/Event/Event'
import { nanoid } from 'nanoid';





const Search = ({ classes,isActive,isName,isStartDay,isLogin,isAvatar,isResult })=> {
    const dispatch = useDispatch();
    useEffect(() => {
      const changeIsLoading2 = {
        isLoading: false
      };
    const action2 = isLoading(changeIsLoading2);
    dispatch(action2);
    });
  
       
        




    return(<div  className = {classes.overMain}>
        
        <HomePage  isActive ={isActive} isResult={isResult}></HomePage>
        <Event  isName={isName} isStartDay={isStartDay} isLogin={isLogin} isAvatar={isAvatar}></Event>

       
    </div>)
}

Search.propTypes = {
    isActive: PropTypes.number,
    isName:PropTypes.string,
    isStartDay:PropTypes.string,
    isLogin:PropTypes.bool,
    isAvatar:PropTypes.string,
    isResult: PropTypes.array
  };
  
export default withStyles(styles)(Search)