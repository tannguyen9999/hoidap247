import { useTheme } from "@material-ui/core/styles";

const styles = () =>{
    const theme = useTheme();
 
    return({
        footer:{
            marginTop:'20px',
            backgroundColor:'#438aa3',
            
        },
        overFooter:{
            maxWidth:'1200px',
            paddingTop:'12px',
            marginLeft:'auto',
            marginRight:'auto',
            display:'flex',
            ['@media (max-width:1022px)']: {
                flexDirection: 'column'
            },
        },
        aboutCompany:{
            width:'336px',
            padding:'12px',
            color:'white',
            fontSize:'15px',
            maxWidth:'100%',
            boxSizing:'border-box'
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
            maxWidth:'80%',
            boxSizing:'border-box'
            
        },
        section3:{
            
            paddingTop:'12px',
            backgroundColor:'',
            marginLeft:'24px',
            color:'white',
            maxWidth:'100%'

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