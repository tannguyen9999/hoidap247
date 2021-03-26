import { useTheme } from "@material-ui/core/styles";

const styles = () =>{
    const theme = useTheme();
 
    return(
        {

overInput:{
    display: 'grid',
    height: '100%',
    placeItems: 'center',
    textAlign: 'center',
},
container:{
    height: '350px',
    width: '430px',
},

wrapper:{
    position: 'relative',
    height: '300px',
    width: '100%',
    border: '2px dashed #c2cdda',
    borderRadius: '10px',
    background:'#fff',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    overflow: 'hidden'
},

image:{
    position: 'absolute',
    height: '100%',
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
},

img:{
    height: '100%',
    width: '100%',
    objectFit: 'cover',
},

icon:{
    fontSize: '100px',
    color: '#9658fe',
},


text:{
    fontSize: '20px',
    color: '#9658fe',
    fontWeight: '500',
    color: '#5B5B7B',
},
cancelBtn:{
    position: 'absolute',
    right: '15px',
    top: '15px',
    fontSize: '20px',
    cursor: 'pointer',
    color: '#9658f',
},

fileName:{
    position: 'absolute',
    bottom: '0px',
    background: 'linear-gradient(135deg,#3a8ffe 0%,#9658fe 100% )',
    padding: '8px 0',
    fontSize: '18px',
    width: '100%',
},
customBtn:{
    marginTop: '30px',
    width: '100%',
    height: '50px',
    display: 'block',
    borderRadius: '25px',
    color: '#fff',
    fontSize: '18px',
    fontWeight: '500',
    letterSpacing: '1px',
    textTransform: 'uppercase',
    cursor: 'pointer',
    border: 'none',
    background: 'linear-gradient(135deg,#3a8ffe 0%,#9658fe 100% )',
    outline: 'none',

}
    })
}

export default styles