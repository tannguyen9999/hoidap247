import { useTheme } from "@material-ui/core/styles";

const styles = () =>{
    const theme = useTheme();
 
    return({
        overMain:{
            marginTop:'76px',
            width:'1200px',
            marginLeft:'auto',
            marginRight:'auto',
            maxWidth:'100%',
            display:'flex',
            
            ['@media (max-width:1022px)']: {
                marginTop:'52px',
                flexDirection: 'column'
              },
              ['@media (max-width:649px)']: {
                marginTop:'46px',
                flexDirection: 'column',
                flexWrap:'wrap',
              },
        },
        rentPage:{
            
            width:'166px',
           
            ['@media (max-width:1022px)']: {
               width:'100%',
               
            },
        
        },
        image:{
            width:'95%',
            marginLeft:'auto',
            marginRight:'auto',
            display:'block',
            marginTop:'20px',
            ['@media (max-width:1022px)']: {
                display:'none',
                height:'20vh',
                objectFit: 'cover',
                
             },
        },
        mainPage:{
            width:'620px',
            
            marginTop:'12px',
            ['@media (max-width:1022px)']: {
                width:'95%',
                marginLeft:'auto',
                marginRight:'auto'
            },
        
        },
        advertisement:{
            width:'414px',
            backgroundColor:'black',
            ['@media (max-width:1022px)']: {
                display:'none'
            },
        
        },
        section2:{
            backgroundColor:'white',
            marginTop:'24px',
            padding:'12px',
            borderRadius:'10px'
        },
        overContai:{
            padding:'24px',
            backgroundColor:'white',
            borderRadius:'5px',
            overflow:'hidden',
            marginBottom:'10px',
            ['@media (max-width:1022px)']: {
                borderRadius:'25px',
            },
        },

        headerQuestion:{
            listStyle:'none',
            display:'flex',
            fontWeight: '700',
            fontSize:'15px',
             color: '#262626',

        },
        itemHeaderQuestion:{
            padding:'0px 6px'
        },
        avatar:{
            width:'32px',
            height:'32px',
            objectFit:'cover'
        },
        textQuestion:{
            fontSize:'15px',
            marginLeft:'52px',
            maxHeight:'110px',
            lineHeight:'22px',
            overflow:'hidden',
            textOverflow: 'ellipsis',
            display: '-webkit-box',
            '-webkit-line-clamp': '4',
            '-webkit-box-orient': 'vertical'
        },
        contentImage:{
            marginTop:'24px',
            width:'90%',
            marginLeft:'auto',
            marginRight:'auto',
            borderRadius:'5px'
        },
        contentImage2:{
            borderRadius:'5px',

            width:'100%',
            display:'block'
        },
        writeComment:{
            display:'flex'
        },
        avatarCurrent:{
            width:'32px',
            height:'32px',
            display:'block',
            borderRadius:'15px',
        },
        framesText:{
            marginLeft:'12px',
            width:'80%',
            height:'100px',
            border: '2px solid #bed6de',
            borderRadius:'6px 6px 6px 6px',
            outline:'none',
            padding:'12px',
            

        },
        section3:{
            borderRadius:'15px',
            backgroundColor:'white',
            padding:'12px',
            display:'flex',
            flexDirection:'column',
            marginTop:'24px',
        },
        headerAnser:{
            display:'flex',
            alignItems: 'center',

        }
      

       
    })
}

export default styles; 