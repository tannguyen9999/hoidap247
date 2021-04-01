import React, { useState, useRef } from 'react';
import {withStyles} from '@material-ui/core';
import styles from "../styles/profile"
import image from "../assets/images/chipu.jpg"
import loadingAvatar from "../assets/images/Loading22.gif"
const Profile = ({classes})=>{  
    const inputEl = useRef(null);
    const [changePass,setChangePass] = useState(false);
    const [avatar,setAvatar] = useState({
        src:image
    })

    function handleChangePass(){
        setChangePass(!changePass)
        return;
    }
    function  handleFileInput(e){
        const file = e.target.files[0];
        // if(file.type == "image/jpeg" || file.type == "image/png"){
        //     const reader = new FileReader();
        //     reader.onload = function(){
        //         const result = reader.result;
        //         console.log(result)
        //        alert('aaa')
                
        //     }
        //     reader.readAsDataURL(file)
        if(file && (file.type == "image/jpeg" || file.type == "image/png")){
            const fileReader = new FileReader();
    
            fileReader.readAsDataURL(file);
            // setLoading(true);
            
             fileReader.onload = (e) => {
                 
                const result = fileReader.result;
                setAvatar({
                    src:loadingAvatar
                })
                if(result){
                    
                    // setLoading(false);
                    setAvatar({
                        src:result
                    })
                    
                }
                return 
            };
        }else{
            setAvatar({
                src:image
            })
            alert('Vui lòng chọn định dạng hình ảnh')
        }
            
        return
    }
    function handleChangeAvatar(){
        inputEl.current.click();
       return;
    }
    return(<div className={classes.mainPage}>
        <div className={classes.headerContent}>
            <div className={classes.avatar}>
                <img src={avatar.src} className={classes.avatarImage}></img>
                <div className={classes.textChangeAvatar} onClick={handleChangeAvatar} >Đổi avatar</div>
            </div>
            <div className={classes.contenHeader}>
                <div>Chào mừng <strong style={{color:'#458ea7'}}> n16dcdt076</strong> </div>
                <div>Hạng: <span style={{color:'#81A078'}}>Linh moi</span></div>
            </div>
        </div>
        <div className={classes.section2}>
            <div className={classes.headerSection2}>Chỉnh sửa thông tin cá nhân</div>
            <div className={classes.info}>
                <strong style={{margin:'12px 0px',display:'block'}}>Thông tin chung của tài khoản</strong>
                <div className={classes.sex}>
                    <div>Giới tính</div>
                    <select id="sexs" name="sexlist" form="sexform" className={classes.sexform}>
                    <option value="volvo">Nam</option>
                    <option value="saab">Nữ</option>
                    </select>
                </div>
                <div className={classes.birthDay}>
                    <div>Ngay sinh</div>
                    <input type="date" name="birthday" className={classes.birthdayform}/>

                </div>
                <div className={classes.changePass} onClick={handleChangePass}>
                    <div>
                    Thay đổi mật khẩu
                    </div>
                    <div className={classes.edit}>
                    Sửa
                    </div>
                </div>
                <div style={changePass ? {display:'block'}:{}} className={classes.passWord}>
                    <div style={{display:'flex',margin:'12px 0px',alignItems:'center',justifyContent: 'space-between'}}>
                    <div  className={classes.subtitle}>Nhập mật khẩu cũ</div>
                    <input className = {classes.pass}></input>
                    </div>

                    <div style={{display:'flex',margin:'12px 0px',alignItems:'center',justifyContent: 'space-between'}}>
                    <div className={classes.subtitle}>Nhập mật khẩu mới</div>
                    <input className = {classes.pass}></input>
                    </div>

                    <div style={{display:'flex',margin:'12px 0px',alignItems:'center',justifyContent: 'space-between'}}>
                    <div className={classes.subtitle}>Xác nhận mật khẩu mới</div>
                    <input className = {classes.pass}></input>
                    </div>
                    <button className={classes.update} >Cập nhật </button>
                </div>
            

            </div>
        </div>
        <input ref={inputEl} type="file" accept=".jpg, .jpeg, .png" onChange={(e)=>{handleFileInput(e)}} hidden/>
    </div>)
} 

export default withStyles(styles)(Profile);