import {withStyles} from '@material-ui/core';
import styles from "../styles/question"
import Event from "../component/Event/Event"
import anh1 from "../assets/images/chipu.jpg";
import anh2 from "../assets/images/lazada.jpg";
import anh3 from "../assets/images/lazada2.jpg";
 


const Question = ({classes})=>{

    function hanldelRenderSection1(){
        return(
            <div className = {classes.overContai}>
                <ul className={classes.headerQuestion} >
                        <li className={classes.itemHeaderQuestion}><img className = {classes.avatar} src={anh1} alt='avatarUser'></img></li>
                        <li className={classes.itemHeaderQuestion}>Toán Học</li>
                        <li className={classes.itemHeaderQuestion}>Lop 7</li>
                        <li className={classes.itemHeaderQuestion}>vai giay truoc</li>
                    </ul>
                <div className = {classes.mainContenr}>
                    anh em oidsaaaaaaaaaaaaaaaaaaaa
                    sadsaddddddddddddddddddddddddd
                    saddddddddddddddddddddddddddddasdsadsadsa
                    <br/>dsadasdsad<br/>
                    <br/>dasdasdsad<br/>
                    <br/>dasdasdsad<br/>
                    <br/>dasdasdsad<br/>
                    <br/>dasdasdsad<br/>
                    <br/>dasdasdsad<br/>
                    <br/>dasdasdsad<br/>
                    <br/>dasdasdsad<br/>
                    <br/>dasdasdsad<br/>
                    <br/>dasdasdsad<br/>
                </div>
                <div className={classes.contentImage}>
                    <img src={anh2} className={classes.contentImage2}></img>
                </div>
            </div>
        )
    }

    function handleRenderAnser(){
        return(
            <div className={classes.dataAnser}>
                <div className={classes.headerAnser}>
                    <img src={anh2} className = {classes.avatarCurrent}></img>
                    <strong style={{paddingLeft:'12px'}}>Ngo Thi NHu Quynh</strong>
                </div>
                <div style={{paddingLeft: '45px',width:'50%'}}>
                    <span style={{maxWidth:'100%'}}>dasssssssssss</span>
                    <span style={{maxWidth:'100%'}}>saddddddddddda</span><br/>
                    <span style={{maxWidth:'100%'}}>saddddddddddd</span><br/>
                    <span style={{maxWidth:'100%'}}>saddddddddd</span><br/>
                    <span style={{maxWidth:'100%'}}>sadddddddddddsa</span><br/>
                    

                </div>
            </div>
        )
    }
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
                <div className={classes.section2}>
                    <div className={classes.writeComment}>
                        <img src={anh1} className={classes.avatarCurrent}></img>
                        <textarea  className={classes.framesText} placeholder="Viết bình luận..."></textarea> 
                        <i style={{color:'#458ea7',marginTop:'auto',marginLeft:'-36px',cursor:'pointer',paddingBottom:'12px',fontSize:'20px',zIndex:'5'}} class="fas fa-paper-plane"></i>
                    </div>
                    
                </div>
                <div className={classes.section3}>
                    {handleRenderAnser()}
                </div>

            </div>
            <Event></Event>
        </div>
    )
}

export default withStyles(styles)(Question)
