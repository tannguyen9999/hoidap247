import { useTheme } from "@material-ui/core/styles";

const styles = () =>{
    const theme = useTheme();
 
    return({
        event:{
            width:'414px',
            backgroundColor:'',
            ['@media (max-width:1022px)']: {
                display:'none'
            },
        
        },

        user:{
            backgroundColor:'white',
            padding:'12px',
            display:'flex',
            alignItems:'center',
            fontSize:'15px',
            borderRadius:'20px',
        },
        evenSection1:{
            width:'326px',
            marginLeft:'auto',
            marginRight:'auto',
        },
        avatarUser:{
            width:'56px',
            height:'56px',
            borderRadius:'15px',
            border: '1px solid #458ea7',

        },
        infoUser:{
            display:'inline-block',
            paddingLeft:'12px'
        },
        advertisement:{
            marginTop:'24px',
            backgroundColor:''
        },
        game:{
            width:'100%',
            marginBottom:'12px'
        },
        contact:{
            backgroundColor:'white',
            height:'185px',
            fontSize:'20px',
            paddingLeft:'12px',
            paddingTop:'12px',
            color:'red',
            display:'block',
            
        }
    })
}
export default styles