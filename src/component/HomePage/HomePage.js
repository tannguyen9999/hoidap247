import React, { useState, useEffect } from 'react';
import { withStyles} from '@material-ui/core';
import styles from "./style"
import listClass from '../../util/Contants/listClass'
import arrow1 from "../../assets/images/icon-arrow1.png"
import iconDown from "../../assets/images/icon-dow2.png"
import anhvip2 from "../../assets/images/anhvip2.jpeg"

import TimeAgo from 'javascript-time-ago';
import vi from 'javascript-time-ago/locale/vi';
import productApi from '../../api/productApi'
import contentSlideBar from '../../util/Contants/contentSlideBar'
import { nanoid } from 'nanoid'
import { useRouter } from 'next/router'
import Lottie from "react-lottie";
import comment from '../../assets/animation/comment.json'

TimeAgo.addLocale(vi);
const timeAgo = new TimeAgo('vi-VN');

let offset = 0;
let limit = 10;


const Submenu = ({classes,isResult,isActive,isSearch})=>{
    const router = useRouter()
    const [openNav,setOpenNav] = useState({
        openStatus:false,
        openClass:false,
        open:false
    })
    const [currentClass,setCurrentClass] = useState('0')
   
    const [currentStatus,setCurrentStatus] = useState({
        index:'0',
        value:'Tất cả'
    })
    const [classs,setChooseClasss] = useState(0)
    const [classs2,setChooseClasss2] = useState(0)
    const [dataMap,setDataMap] = useState([])
    const [dataFetch1,setDataFetch1] = useState([])
    const [contract,setContract] = useState(true)

    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: comment,
        rendererSettings: {
          preserveAspectRatio: "xMidYMid slice"
        }
      };

    useEffect(() => {
        // action on update of movies
        
    async function runConTract(){
        if(contract){
            try {
                offset = 10;
                
                const result = await Promise.all(
                    [
                        handleClickChangeClass(currentClass,0,10),
                        handleClickChangeClass(currentClass,10,10)
                    ])
                if(result[0] !== undefined){
                    setDataMap(result[0])
                }
                setDataFetch1(result[1]) 
            } catch (error) {
                
            }
            setContract(false)
       }
    }
    runConTract()

        
        
     
        
        
    },);
   
    const handleListClass = ()=>{
        const data =  listClass.map((item,index)=>{
            return(
                <li key={nanoid(10)} data-key={index} onClick={(e)=>handleClickClass(e)} className={classes.itemSeclectClass}>
                    {item.text}
                    </li>
            ) 
        })
        return data
        
    }
    const handleDta1 = (text,id)=>{
        
        let textChange = text.split("↵")

        const data =  textChange.map((temp,i)=>{
            return(
                <div key={nanoid(10)}>{temp}<br/></div>
            )
        })
        return (
            <div key={nanoid(10)} onClick={(e)=>{
                e.preventDefault()
                router.push(`/cauhoi/${id}`)}}>
               
                {data}
            
            </div>
        )
        
    }
    async function handleClickChangeClass(key,off,lim){
        let daReq = {
            offset:off.toString(),
            limit:lim.toString()
          }
        
        if(key !== '0'){
            daReq.class = key;
        }
        if(isActive !== 0){
            daReq.subject = contentSlideBar[isActive].text;
        }
        
        try {
            const res = await productApi.getListPostOption(daReq)
              

              return res.posts
        } catch (error) {
            return []
        }
    }
    const handleAllData = ()=>{
        let data;
       if(classs == 0 && classs2 == 0){
           data = isResult
       }else{
           data = dataMap;
       }
       
             data =  data.map((temp,i)=>{
                return(
                    <div key={temp._id} className={classes.itemQuestion}>
                        <ul key ={nanoid(11)} className={classes.headerQuestion} >
                            <li key={nanoid(7)} className={classes.itemHeaderQuestion}><img className = {classes.avatar} src={temp.userId.avatar !== "" ? temp.userId.avatar:anhvip2} alt='avatarUser'></img></li>
                            <li key={nanoid(7)} className={classes.itemHeaderQuestion}>{temp.subject}</li>
                            <li key={nanoid(7)} className={classes.itemHeaderQuestion}>{`Lớp ${temp.class}`}</li>
                            <li key={nanoid(7)} className={classes.itemHeaderQuestion}>{
                            timeAgo.format(new Date(temp.createdAt), 'round')
                            }</li>
                        </ul>
                        <div key = {nanoid(9)} className={classes.textQuestion} > 
                        
    
                        {handleDta1(temp.content,temp._id)}
                        </div>
                        <Lottie
                key={nanoid(10)}  
        options={defaultOptions}
        style={{ 
        width: "25px",
        marginLeft: '53px',
        display: 'inline-block',
            background:`url(${anhvip2}) top center / cover no-repeat`,
        
}}
></Lottie>
                        
                        <a href={`/cauhoi/${temp._id}`} key={nanoid(8)} className={classes.replayButton}>Trả lời</a>
                    </div>
                )
            })
        
        
        return data
        
    }
   
    function handleCloseNav(){
        setOpenNav(
            {
                openStatus:false,
                openClass:false,
                open:false
            }
        )
    }
    function handleOpenClass(){
        setOpenNav(
            {
                openStatus:false,
                openClass:true,
                open:true
            }
        )
    }
    function handleOpenStatus(){
        setOpenNav(
            {
                openStatus:true,
                openClass:false,
                open:true
            }
        )
    }
    
    function handleClickStatus(e){
        const key = e.target.dataset.key;
        setOpenNav({
            openStatus:false,
            openClass:false,
            open:false
        })

       
        if(key == 0){
            setCurrentStatus({
                index:'0',
                value:'Tất cả'
            })
        }
        if(key == 1){
            setCurrentStatus({
                index:'1',
                value:'Chưa trả lời'
            })
        }
        if(key == 2){
            setCurrentStatus({
                index:'2',
                value:'Đã trả lời'
            })
        }
        if(key == 3){
            setCurrentStatus({
                index:'3',
                value:'Lần đầu hỏi'
            })
        }
        return;

    }
    async function handleClickClass(e){
        const key = e.target.dataset.key;
        setOpenNav({
            openStatus:false,
            openClass:false,
            open:false
        })
        const result = await Promise.all([handleClickChangeClass(key,0,limit),handleClickChangeClass(key,10,limit)])
        offset = 0;
        setDataFetch1(result[1])
        setDataMap(result[0]);


        setCurrentClass(`${key}`)
        setChooseClasss(1)

        return;

    }
 
    useEffect(() => {
        async function test(){

            setDataMap([...dataMap, ...dataFetch1]);
            const result = await handleClickChangeClass(currentClass,offset,limit)
            setDataFetch1(result)
            
             
         }

         test()

      },[classs2]);
        
   
            
        
        
     
        
        
   
    
    async function handleSeeMore(){
        // offset = offset +10;
        // const result = await handleClickChangeClass(currentClass,offset,limit)
        offset = offset +10;
        setChooseClasss2(classs2+1)
        return
    }
    return(
        (
            <div className={classes.homePage}>
            <div style={isSearch?{display:'none'}:{}} className={classes.bannerResponse}>10000000 câu hỏi đã được trả lời !</div>
            <ul style={isSearch?{display:'none'}:{}} className={classes.customFilter}>
                <li onClick={handleOpenClass} className={classes.filterClass}><span>{`${currentClass == '0'? 'Tất cả': 'Lớp ' + currentClass}`}</span> <img className={classes.filterDown} src={iconDown} alt='icon down'></img>
                </li>
                <div style={openNav.open ? {right:'0'}:{}} onClick={handleCloseNav} className={classes.overNav}></div>
                <ul style={openNav.openClass ? {display:''} : {display:'none'}} className='selectClass'>
                       {handleListClass()}
                    </ul> 
                <li onClick={handleOpenStatus} className={classes.filterStatus}><span>{currentStatus.value}</span> <img className={classes.filterDown} src={iconDown} alt='icon down'></img></li>
                <ul className='selectStatus' style={openNav.openStatus ? {display:''} : {display:'none'}} >
                        <li data-key='0' onClick={(e)=>handleClickStatus(e)} className={classes.filterStatusItem}>Tất cả</li>
                        <li data-key='1' onClick={(e)=>handleClickStatus(e)} className={classes.filterStatusItem}>Đã trả lời</li>
                        <li data-key='2' onClick={(e)=>handleClickStatus(e)} className={classes.filterStatusItem}>Chưa trả lời</li>
                        <li data-key='3' onClick={(e)=>handleClickStatus(e)} className={classes.filterStatusItem}>Lần đầu hỏi</li>
                    </ul>
            </ul>
            <div style={isSearch?{marginTop:'0px'}:{}} className = {classes.listQuestion}>
                {handleAllData()}
                
            </div>
            <div style={isSearch?{display:'none'}:{}}  onClick={handleSeeMore} className={classes.seeMore}>Xem thêm<img className={classes.arrow1} src={arrow1} alt='arrow 1'></img></div>
        </div>
        )
    )

}

export default withStyles(styles)(Submenu)