import {withStyles} from '@material-ui/core';
import styles from "../styles/question"
import Event from "../component/Event/Event"
import anh1 from "../assets/images/chipu.jpg";
import anh2 from "../assets/images/lazada.jpg";
import anh3 from "../assets/images/lazada2.jpg";
import classes from '*.module.css';

function hanldelRenderSection1(){
    return(
        <div className = {classes.overContai}>
            <div className={classes.headerContent}>
                <img src="" alt="avatar"></img>
                <span>Nhac</span>
                <span>Lop 9</span>
            </div>
            <div className = {classes.mainContenr}>
                anh em oi
            </div>
        </div>
    )
}

const Question = ({classes})=>{
    return(
        <div className = {classes.overMain}>
            <div className={classes.rentPage}>
                <img style={{display:'block'}} className={classes.image} src={anh1}></img>
                <img className={classes.image} src={anh2}></img>
                <img className={classes.image} src={anh3}></img>
                <img className={classes.image} src={anh1}></img>
                <img className={classes.image} src={anh2}></img>
                <img className={classes.image} src={anh3}></img>
                
            </div>
            
            <div className={classes.mainPage} >
                <div className={classes.section1}>
                    {hanldelRenderSection1()}
                </div>
                <div className={classes.section2}></div>

            </div>
            <Event></Event>
        </div>
    )
}

export default withStyles(styles)(Question)
