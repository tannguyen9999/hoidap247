import { useTheme } from "@material-ui/core/styles";

const styles = () =>{
    const theme = useTheme();
 
    return({
        subMenu:{
            width:'166px',
            ['@media (max-width:1022px)']: {
               width:'100%',
               
               
            },
        
        },
        subMenu1:{
            width:'166px',
            ['@media (max-width:1022px)']: {
               width:'100%',
               display:'none'
               
            },
        
        },
        subMenu2:{
            listStyle:'none',
            fontSize:'15px',

            lineHeight:'30px',
            color:'#262626',
            ['@media (max-width:1022px)']: {
                display:'flex',
                width:'100%',
                overflow:'scroll',
                
             },

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
                ['@media (max-width:1022px)']: {
                    backgroundColor:'white',
                },
              },
            
            
        },
        
        kihieu:{
            padding:'6px',
            ['@media (max-width:1022px)']: {
                
             },
        },
        subMenuText:{
            fontWeight:'700'
        },
        categoryMenu:{
            padding:'6px',

        },
    })
}

export default styles;