import React from 'react';

import {withStyles} from '@material-ui/core';
import { useRouter } from 'next/router'

import styles from "./style"
import iconAdd from "../../assets/images/icon-add.png"
import arrow2 from "../../assets/images/icon-arrow2.png"

const AskQuestion = ({classes})=>{
    const router = useRouter()
    function handleToQuestion(){
        router.push('/askquestion')
    }
    return(<div className={classes.overLayout}>
        <div className={classes.addQuestion} onClick={handleToQuestion}>
            <div className={classes.addText}><strong>Đặt câu hỏi</strong></div>
            <img src={arrow2} className={classes.arrow2}></img>
            <div className={classes.addLayout}><img src={iconAdd} className={classes.iconAdd} ></img></div>
        </div>
        </div>)
}


export default withStyles(styles)(AskQuestion);