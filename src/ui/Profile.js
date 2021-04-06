import React, { useState, useRef,useEffect } from 'react';
import {withStyles} from '@material-ui/core';
import styles from "../styles/profile"
import anhvip from "../assets/images/anhvip2.jpeg"
import loadingAvatarr from "../assets/images/Loading22.gif"
import { isLoading } from './../app/loadingSile';
import { useDispatch, useSelector } from 'react-redux';
import productApi from "../api/productApi"
import TimeAgo from 'javascript-time-ago';
import vi from 'javascript-time-ago/locale/vi';
import {setCookie} from "../util/cookies"
import { useRouter } from 'next/router'

TimeAgo.addLocale(vi);
const timeAgo = new TimeAgo('vi-VN');
const Profile = ({classes,name,isAvatar,startDay,isSex})=>{  
    const inputEl = useRef(null);
    const inputEl2 = useRef(null);
    const inputEl3 = useRef(null);
    

    
    const [changePass,setChangePass] = useState(false);
    const [oldPassWord,setOldPassWord] = useState("");
    const [newPassWord,setNewPassWord] = useState("");
    const [confirmPassWord,setConFirmPassWord] = useState("");
    const [uploadAva,setUploadAva] = useState(false);

    const router = useRouter()


    
    const [avatar,setAvatar] = useState({
        src:isAvatar ==""?anhvip:isAvatar
    })
    const timeInput = ()=>{
        const a =new Date(startDay)
        let d = a.getDate();
        let m = a.getMonth() + 1;
        let y= a.getUTCFullYear()
        if(d<10){
            d = `0${d}`
        }
        if(m<10){
            m = `0${m}`
        }
        let c = `${y}-${m}-${d}`
        return c
    }
    const [time,setTime] = useState(timeInput())
    const dispatch = useDispatch();
    
    useEffect(() => {
        const changeIsLoading2 = {
            isLoading: false
          };
        const action2 = isLoading(changeIsLoading2);
        dispatch(action2);
      });

    

    function handleChangePass(){
        setChangePass(!changePass)
        return;
    }
    function  handleFileInput(e){
        const file = e.target.files[0];
        if(file && (file.type == "image/jpeg" || file.type == "image/png")){
            const fileReader = new FileReader();
            
            fileReader.readAsDataURL(file);
            // setLoading(true);
            setAvatar({
                src:loadingAvatarr
            })
            
             fileReader.onload = (e) => {
                 
                const result = fileReader.result;
                
                if(result){
                    
                    // setLoading(false);
                    setAvatar({
                        src:result
                    })
                    setUploadAva(true);
                    
                }
                return 
            };
        }else{
            alert('Vui lòng chọn định dạng hình ảnh')
        }
            
        return
    }
    function handleChangeAvatar(){
        inputEl.current.click();
       return;
    }
   async function handleUpdate(){
        const file = inputEl.current.files[0];

        if(newPassWord !== confirmPassWord){
            alert("Mật khẩu không trùng khớp")
            return
        } 



        if(oldPassWord !==""){
            if(newPassWord == ""){
                alert("Chưa hoàn thành nhập mật khẩu mới")
                return
            }
            try {
                let form = {}
                let reqq =  [
                    productApi.changPass({
                        password:oldPassWord,
                        newPassword:newPassWord
                    }),
                    
                ]

                if(uploadAva){
                    form = new FormData();
                    form.append('avatar', file);
                    reqq[1] = productApi.uploadAvatar(form)
                }
                
                const res = await Promise.all(reqq)
                if(uploadAva){
                    const avaa = res[1].url;
                     setCookie("avatar",avaa);
                }

                alert("đã cập nhật")
                
                router.push('/user/profile')
                
                
                
                
            } catch (error) {
                try {
                    alert(error.response.data.message)
                    
                } catch (error) {
                    
                }
                return
                
            }
        }
        if(oldPassWord ==""){
            
            
            if(uploadAva){
                try {
                    
                const form1 = new FormData();
                const file1 = inputEl.current.files[0];
                
                form1.append('avatar', file1);
                console.log(file1);
                const res = await productApi.uploadAvatar(form1);
                const avatee = res.url;
                
                setCookie("avatar",avatee);
                alert("đã cập nhật")
                
                router.push('/user/profile')
                
                
                } catch (error) {
                    
                }

            }
        }
        return

        
      
         
         
     

    }
    function handleChangeAvatarBirthDay(e){
        const current = e.target.value;
        setTime(current);
        return
    }
    return(<div className={classes.mainPage}>
        <div className={classes.headerContent}>
            <div className={classes.avatar}>
                <img src={avatar.src} className={classes.avatarImage}></img>
                <div className={classes.textChangeAvatar} onClick={handleChangeAvatar} >Đổi avatar</div>
            </div>
            <div className={classes.contenHeader}>
                <div>Chào mừng <strong style={{color:'#458ea7'}}> {name}</strong> </div>
                <div>Hạng: <span style={{color:'#81A078'}}>{
                     timeAgo.format(new Date(startDay))
                }</span></div>
            </div>
        </div>
        <div className={classes.section2}>
            <div className={classes.headerSection2}>Chỉnh sửa thông tin cá nhân</div>
            <div className={classes.info}>
                <strong style={{margin:'12px 0px',display:'block'}}>Thông tin chung của tài khoản</strong>
                <div className={classes.sex}>
                    <div>Giới tính</div>
                    <select ref={inputEl2}  id="sexs" name="sexlist" form="sexform" className={classes.sexform}>
                    <option value={isSex}>{isSex}</option>
                    <option value={isSex == 'Nam'?'Nữ':'Nam'}>{isSex == 'Nam'?'Nữ':'Nam'}</option>

                    </select>
                </div>
                <div className={classes.birthDay}>
                    <div>Ngay sinh</div>
                    <input onChange={(e)=>{handleChangeAvatarBirthDay(e)}} ref={inputEl3} value ={time} type="date" name="birthday" className={classes.birthdayform} />

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
                    <input type='password' value={oldPassWord} onChange={
                        (e)=>{
                            const oldPass  = e.target.value;
                            setOldPassWord(oldPass)
                            return
                        }
                    } className = {classes.pass}></input>
                    </div>

                    <div style={{display:'flex',margin:'12px 0px',alignItems:'center',justifyContent: 'space-between'}}>
                    <div  className={classes.subtitle}>Nhập mật khẩu mới</div>
                    <input type='password' value={newPassWord} onChange={
                        (e)=>{
                            const newPass  = e.target.value;
                            setNewPassWord(newPass)
                            return
                        }
                    } className = {classes.pass}></input>
                    </div>

                    <div style={{display:'flex',margin:'12px 0px',alignItems:'center',justifyContent: 'space-between'}}>
                    <div  className={classes.subtitle}>Xác nhận mật khẩu mới</div>
                    <input type='password' value={confirmPassWord} onChange={
                        (e)=>{
                            const confirmPass  = e.target.value;
                            setConFirmPassWord(confirmPass)
                            return
                        }
                    } className = {classes.pass}></input>
                    </div>
                    
                </div>
                <button onClick={handleUpdate} className={classes.update} >Cập nhật </button>
            

            </div>
        </div>
        <input ref={inputEl} type="file" accept=".jpg, .jpeg, .png" onChange={(e)=>{handleFileInput(e)}} hidden/>
    </div>)
} 

export default withStyles(styles)(Profile);