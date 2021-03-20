import React, { useEffect } from 'react';
import {withStyles} from '@material-ui/core';
import styles from "../src/styles/header"
import cookies from 'next-cookies'
import {setCookie} from '../src/util/cookies'

const HelloUA = ({token ,classes,isLogin }) => {     
    return (
    <div><div className={classes.a}>Number of post:{token}</div>
    </div>
)};
HelloUA.getInitialProps = async (ctx) => {
  const allCookies = cookies(ctx);

    return { token: 'a',
    isLoginb:'isLogin'
    }
  }

export default  withStyles(styles)(HelloUA)
// export default withStyles<Props>(styles)(MessagesContainer);