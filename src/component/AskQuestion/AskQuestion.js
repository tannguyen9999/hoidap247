import React from 'react';

import {withStyles} from '@material-ui/core';

import styles from "./style"
import iconAdd from "../../assets/images/icon-add.png"
import arrow2 from "../../assets/images/icon-arrow2.png"
import { isLoading } from './../../app/loadingSile';
import { useDispatch, useSelector } from 'react-redux';
import Link from 'next/link'

const AskQuestion = ({classes})=>{
  const dispatch = useDispatch();
  
    function handleToQuestion(){
        setTimeout(function(){
            const changeIsLoading = {
                isLoading: true
              };
            const action = isLoading(changeIsLoading);
            dispatch(action);
         }, 100);
        
    }
    return(<div className={classes.overLayout}>
      <Link href="/askquestion" passHref >
            <div className={classes.addQuestion} onClick={handleToQuestion}>
            <div className={classes.addText}><strong>Đặt câu hỏi</strong></div>
            <img src={arrow2} className={classes.arrow2}></img>
            <div className={classes.addLayout}><img src={iconAdd} className={classes.iconAdd} ></img></div>
        </div>
      </Link>
        
        </div>)
}


export default withStyles(styles)(AskQuestion);