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
            backgroundColor:'#ECEFF1',
            
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
        
      

       
    })
}

export default styles; 