import React, { useEffect } from 'react';

import {withStyles} from '@material-ui/core';
import styles from "../styles/main"



import AskQuestion from "../component/AskQuestion/AskQuestion"
import PropTypes, { func } from 'prop-types';
import { useDispatch } from 'react-redux';
import { isLoading } from './../app/loadingSile';

import Submenu from '../component/SubMenu/Submenu'
import HomePage from '../component/HomePage/HomePage'
import Event from '../component/Event/Event'





const MainBoard = ({ classes,isActive,isName,isStartDay,isLogin,isAvatar,isResult,isSearch })=> {
    const dispatch = useDispatch();

    useEffect(() => {
      const changeIsLoading2 = {
        isLoading: false
      };
    const action2 = isLoading(changeIsLoading2);
    dispatch(action2);
    }); 
  
       
            
        
        




    return(<div  className = {classes.overMain}>
        <Submenu isSearch={isSearch} isActive = {isActive}></Submenu>
        <HomePage isSearch={isSearch} isActive ={isActive} isResult={isResult}></HomePage>
        <Event  isName={isName} isStartDay={isStartDay} isLogin={isLogin} isAvatar={isAvatar}></Event>

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