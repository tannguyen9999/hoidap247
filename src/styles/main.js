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
                marginTop:'70px',
              },
        },
        subMenu:{
            width:'166px',
        
        },
        subMenu2:{
            listStyle:'none',
            fontSize:'15px',

            lineHeight:'30px',
            color:'#262626',
            

        },
        subCatego:{
            
            borderRadius:'7px',
            marginBottom:'12px',
            width:'81%',
            minWidth:'115.312px',
            paddingLeft:'5px',
            cursor:'pointer',
            "&:hover": {
                backgroundColor:'#e7b712',
              },
            
        },
        
        kihieu:{
            padding:'6px',
        },
        subMenuText:{
            fontWeight:'700'
        },
        categoryMenu:{
            padding:'6px',

        },

        homePage:{
            width:'620px',
            backgroundColor:'pink',
        
        },
        customFilter:{
            listStyle:'none',
            display:'flex',
            position:'absolute'
            
        },
        filterClass:{
            width:'104px',
            height:'34px',
            backgroundColor:'white',
            top:'0',
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
            cursor:'pointer'
               
        },
        filterDown:{
            width:'10px',
            height:'6px',
            display:'block',
            float:'right',
            paddingTop:'15px',
            paddingLeft:'5px'
           
        },
        selectClass:{
            listStyle:'none',
            position: 'absolute',
            top: '0px',
            left: '25px',
            backgroundColor:'white',
            width:'104px',
            border: '1px solid #458ea7',
            borderRadius:'5px',
            boxShadow:'rgb(0 0 0 / 10%) 3px 3px 5px 0px',
            height:'300px',
            overflow:'auto',
            '-webkit-scrollbar-track': 'none',

              '::-webkit-scrollbar-thumb': {
                background: 'red', 
                borderRadius: '10px'
              }

        },
        itemSeclectClass:{
            padding:'6px 12px'
        },
        event:{
            width:'414px',
            backgroundColor:'white',
        
        }
    })
}

export default styles; 