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
            backgroundColor:'',
            padding:'auto',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
        },
        loader:{
            border: '16px solid #f3f3f3',
            borderRadius: '50%',
            borderTop: '16px solid #3498db',
            width: '100px',
            height: '100px',
            marginLeft:'24px',
            '-webkit-animation': 'spin 0.5s linear infinite', /* Safari */
            animation: 'spin 0.5s linear infinite',
            display:'none'
            
        },
    })
}

export default styles;