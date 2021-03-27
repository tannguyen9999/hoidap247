import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';

import {withStyles} from '@material-ui/core';
import styles from "./styles"
import gif from "../../assets/images/giphy.gif"
import { useDispatch, useSelector } from 'react-redux';

const Loading = ({classes})=>{
    const loading = useSelector(state => state.loading);
    const isLoading = loading.isLoading;

    return(
        (<div style={isLoading ? {display:'flex'}:{display:'none'}} className={classes.loading}>
            <div className={classes.loader} style={loading ? {display:'block'}:{}}><style>{`
            @keyframes spin {
                 0% { transform: rotate(0deg); }
                 100% { transform: rotate(360deg); }
            }
            @-webkit-keyframes spin {
                0% { -webkit-transform: rotate(0deg); }
                100% { -webkit-transform: rotate(360deg); }
              }
        `}</style></div>
        </div>)
    )

}

export default withStyles(styles)(Loading)