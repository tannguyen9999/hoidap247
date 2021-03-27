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
                flexDirection: 'column'
              },
              ['@media (max-width:649px)']: {
                marginTop:'70px',
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
            backgroundColor:'pink',
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
        
      

       
    })
}

export default styles; 