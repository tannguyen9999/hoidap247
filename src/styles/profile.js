import { useTheme } from "@material-ui/core/styles";
const styles = () =>{
    const theme = useTheme();
 
    return({
        mainPage:{
            display:'flex',
            background:'white',
            marginTop:'80px',
            padding:'0px 12px',
            width:'800px',
            maxWidth:'95%',
            marginLeft:'auto',
            marginRight:'auto',
            flexDirection:'column',
            borderRadius:'10px'
        },
        headerContent:{
            display:'flex',
            margin:'12px'
        },
        avatar:{
            marginRight:'24px',
            display:'flex',
            flexDirection:'column',
            alignItems:'center'
        },
        avatarImage:{
            borderRadius:'25px',
            display:'block',
            width:'120px',
            height:'120px',
            objectFit: 'cover',
            ['@media (max-width:639px)']: {
                width:'50px',
            height:'50px',
              },
        },
        textChangeAvatar:{
            "&:hover": {
                textDecoration: 'underline',
                color:'#5C91A7',
                cursor:'pointer'
              },
        },
        section2:{
            display:'flex',
            flexDirection:'column',
            alignItems:'center',
            boxSizing:'border-box'
            
        },
        headerSection2:{
            fontSize:'24px',
            fontWeight:'800'
        },
        sex:{
            display:'flex',
            justifyContent:'space-between',
            marginBottom:'24px',
            alignItems: 'center',
        },
        sexform:{
            background:'white',
            marginLeft:'24px',
            outline:'none',
            padding:'6px',
            fontSize:'15px',
            width:'212px',
            
            borderRadius:'4px',    
            border: '1px solid #e1e1e1'},

            
        birthdayform:{
            
            background:'white',
            marginLeft:'24px',
            outline:'none',
            padding:'6px',
            fontSize:'15px',
            width:'187px',
            borderRadius:'4px',    
            border: '1px solid #e1e1e1'},
    birthDay:{
        display:'flex',
        justifyContent:'space-between',
        alignItems: 'center',

    },
    passWord:{
            display:'none'
        },
        changePass:{
            marginTop:'36px',
            display:'flex',
            justifyContent: 'space-between',
            borderBottom:'1px dashed brown',
            padding:'12px',
            marginBottom:'36px',
            cursor:'pointer',
            "&:hover": {
                backgroundColor:'#f2f6f7'
              }

        },
        edit:{
            color:'blue',
            "&:hover": {
                textDecoration: 'underline',
              },
              
        },
        pass:{
            height:'30px',
            marginLeft:'12px',
            outline:'none',
            fontSize:'15px',
            maxWidth:'40%'
        },
        update:{
            padding:'8px 16px',
            fontSize:'15px',
            outline:'none',
            backgroundColor:'#8DC354',
            border:'none',
            color:'white',
            borderRadius:'5px',
            "&:hover": {
                opacity:'0.8',
                cursor:'pointer'
              },
            float:'right',
            marginBottom:'24px'
        }


    }
    )
}

export default styles