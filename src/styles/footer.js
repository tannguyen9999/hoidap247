import { useTheme } from "@material-ui/core/styles";

const styles = () =>{
    const theme = useTheme();
 
    return({
        footer:{
            marginTop:'20px',
            backgroundColor:'#438aa3',
            height:'277px'
        },
        overFooter:{
            maxWidth:'1200px',
            paddingTop:'12px',
            marginLeft:'auto',
            marginRight:'auto',
            display:'flex'
        },
        aboutCompany:{
            width:'336px',
            padding:'12px',
            color:'white',
            fontSize:'15px'
        },
        imaCom:{
            display:'block',
            marginBottom:'12px'
        },
        social1:{
            display:'flex'
        },
        logoSocial:{
            width:'40px',
            height:'40px',
            marginRight:'24px',
            paddingTop:'12px'
        },
        social:{
            width:'28px',
            "&:hover": {
                width: "40px"
              },
            transition: 'all 0.2s ease 0s',
        },
        rules:{
            width:'336px',
            marginLeft:'24px',
            paddingTop:'12px',
            color:'white',
            
        },
        section3:{
            paddingTop:'12px',
            width:'456px',
            backgroundColor:'',
            marginLeft:'24px',
            color:'white',

        },
        local:{
            marginTop:'12px',
            marginBottom:'12px',

            marginLeft:'-24px',
        },
        imgLocal:{
            width: '10px',
    paddingRight: '10px'
        }
    })
}

export default styles;