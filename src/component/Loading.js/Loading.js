import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';

import {withStyles} from '@material-ui/core';
import styles from "./styles"
import gif from "../../assets/images/giphy.gif"
import { useDispatch, useSelector } from 'react-redux';

const Loading = ({classes})=>{
    const loading = useSelector(state => state.loading);
    const isLoading = loading.isLoading;
    let xhtml = null;
    if (isLoading) {
        xhtml = (<div className={classes.loading}>
            <img src={gif}></img>
        </div>)
    }
    return xhtml
}

export default withStyles(styles)(Loading)