import { useTheme } from "@material-ui/core/styles";

const styles = () =>{
    const theme = useTheme();
 
    return({
        loading:{
            position:'fixed',
            top:0,
            right:0,
            bottom:0,
            left:0,
            backgroundColor:'#c0c1be',
            padding:'auto',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
        }
    })
}

export default styles;