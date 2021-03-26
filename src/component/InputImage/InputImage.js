import React from 'react';

import {withStyles} from '@material-ui/core';
import { useRouter } from 'next/router'

import styles from "./style"

const InputImage = ({classes})=>{
    
    return(<div className={classes.overInput}>
        <div className={classes.container}></div>
          <div className={classes.wrapper}>
              <div className={classes.image}>
                  <img src="" alt=""/>
              </div>
              <div className={classes.content}>
                  <div className={classes.icon}>
                    <i className="fas fa-cloud-upload-alt"></i>
                  </div>
                  <div className={classes.text}>
                    Chọn hình cho câu hỏi
                </div>
              </div>
              <div id="cancel-btn">
                  <i className="fas fa-times"></i>
              </div>
              <div className={classes.fileName}>
                File của bạn ở đây
            </div>
          </div>
          <input className={classes.defaultBtn} type="file" hidden/>
          <button className={classes.customBtn}>Chon File </button>
      </div>)
}

export default withStyles(styles)(InputImage);