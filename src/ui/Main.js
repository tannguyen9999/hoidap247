import React, { useState } from 'react';

import {withStyles} from '@material-ui/core';
import styles from "../styles/main"



import AskQuestion from "../component/AskQuestion/AskQuestion"
import PropTypes, { func } from 'prop-types';
import { useDispatch } from 'react-redux';
import { isLoading } from './../app/loadingSile';

import Submenu from '../component/SubMenu/Submenu'
import HomePage from '../component/HomePage/HomePage'
import Event from '../component/Event/Event'





const MainBoard = ({ classes,isActive,isName,isStartDay,isLogin,isAvatar,isResult })=> {
    const dispatch = useDispatch();
        setTimeout(function(){
            const changeIsLoading2 = {
                isLoading: false
              };
            const action2 = isLoading(changeIsLoading2);
            dispatch(action2);
         }, 100);

        




    return(<div className = {classes.overMain}>
        <Submenu isActive = {isActive}></Submenu>
        <HomePage isActive ={isActive} isResult={isResult}></HomePage>
        <Event isName={isName} isStartDay={isStartDay} isLogin={isLogin} isAvatar={isAvatar}></Event>

        <AskQuestion></AskQuestion>
       
    </div>)
}

MainBoard.propTypes = {
    isActive: PropTypes.number,
    isName:PropTypes.string,
    isStartDay:PropTypes.string,
    isLogin:PropTypes.bool,
    isAvatar:PropTypes.string,
    isResult: PropTypes.array
  };
  
export default withStyles(styles)(MainBoard)