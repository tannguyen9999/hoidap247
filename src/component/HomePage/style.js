import { useTheme } from "@material-ui/core/styles";

const styles = () =>{
    const theme = useTheme();
 
    return({
        homePage:{
            width:'620px',
            backgroundColor:'',
            marginTop:'12px',
            ['@media (max-width:1022px)']: {
                width:'95%',
                marginLeft:'auto',
                marginRight:'auto'
            },
        
        },
        bannerResponse:{
            backgroundColor:'white',
            height:'82px',
            borderRadius:'20px',
            marginBottom:'12px',
            fontWeight: 800,
            textAlign: 'center',
            lineHeight: '82px',
            fontSize: '31px',
            ['@media (max-width:640px)']: {
                display: 'none'
            
            },

        },
        customFilter:{
            listStyle:'none',
            display:'flex',
            position:'absolute',
            
            
        },
        filterClass:{
            width:'104px',
            height:'34px',
            backgroundColor:'white',
            marginRight:'25px',
            marginLeft:'25px',
            lineHeight:'34px',
            textAlign:'center',
            borderRadius:'5px',
            display:'flex',
            justifyContent:'center',
            cursor:'pointer'
        },
        filterStatus:{
            width:'180px',
            height:'34px',
            backgroundColor:'white',
            lineHeight:'34px',
            textAlign:'center',
            borderRadius:'5px',
            display:'flex',
            justifyContent:'center' ,
            cursor:'pointer',
            
               
        },
        filterStatusItem:{
            width:'180px',
            height:'34px',
            lineHeight:'34px',
            textAlign:'center',
            "&:hover": {
                backgroundColor:'#e7b712',
                color:'white',
                cursor:'pointer'
              },
        },
        filterDown:{
            width:'10px',
            height:'6px',
            display:'block',
            float:'right',
            paddingTop:'15px',
            paddingLeft:'5px',
           
        },
      
        "selectClass::-webkit-scrollbar":{
            width:'0px'
        }
        ,

        itemSeclectClass:{
            padding:'6px 12px',
            "&:hover": {
                backgroundColor:'#e7b712',
                color:'white',
                cursor:'pointer'
              },
        },
        listClassScroll:{
            top:'5px'
        },
        overNav:{
            position:'fixed',
            top:'48px',
            width:'100%',  
            right:'-9999px',
            bottom:'0px',
            
                   
          },

        listQuestion:{
            marginTop: '58px',
            width: '100%',
            background: ''
        },
        itemQuestion:{
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
            height:'32px'
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
        replayButton:{
            float: 'right',
            padding: '4px 30px',
            fontSize: '15px',
            border: '1px solid #458ea7',
            color: '#458ea7',
            borderRadius: '5px',
            "&:hover": {
                backgroundColor:'#458ea7',
                color:'white'
              },
            
        },
        seeMore:{
            
            backgroundColor:'white',
            textAlign:'center',
            fontSize:'15px',
            padding:'6px 24px',
            color:'#458ea7',
            borderRadius:'5px',
            "&:hover": {
                backgroundColor:'#f1f1f1',
         
              },
        },
        arrow1:{
            width: '15px',
            paddingLeft: '2px'
        },
    })
}

export default styles;