import { useTheme } from "@material-ui/core/styles";

const styles = () =>{
    const theme = useTheme();
 
    return({
        overLayout:{
            position:'fixed',
            top:'83vh',
            right:'35px',
            ['@media (max-width:1022px)']: {
                top:'95vh',
            },
        
        },
        addQuestion:{
            display:'flex',
            alignItems:'center'
        },
        addText:{
            backgroundColor:'#e7b712',
            color:'white',
            fontSize:'15px',
            padding:'4px 24px',
            borderRadius:'5px',
            
        },
        arrow2:{
            width:'10px'
        },
        addLayout:{
            backgroundColor:'#e7b712',
            height:'36px',
            padding:'11px',
            borderRadius:'35px',
            border: '3px solid #a8a13b',
            "&:hover": {
                backgroundColor:'#db9b1d',
                cursor:'pointer'
              }
        },
        iconAdd:{
            width:'36px',
            marginTop:'auto',
            marginBottom:'auto',

        }
    })
}

export default styles;