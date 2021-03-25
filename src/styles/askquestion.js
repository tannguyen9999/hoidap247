import { useTheme } from "@material-ui/core/styles";


const styles = () =>{
    const theme = useTheme();
    return({
        overSection:{
            marginTop:'52px',
            
            ['@media (max-width:1024px)']: {
                marginTop:'46px',
            },
            ['@media (max-width:639px)']: {
                marginBottom:'-20px',
            },
        },
        overLayout:{
            background:'white',
            paddingTop:'36px',
            width:'780px',
            boxSizing:'border',
            marginRight:'auto',
            marginLeft:'auto',
            maxWidth:'100%',
            display:'flex',
            flexDirection: 'column'
        },
        overTitle:{
            width:'100%',
            paddingBottom:'5px',
            borderBottom: '1px solid #575859',
            ['@media (max-width:1022px)']: {
                order:'2'
            },
        },
        title:{
            fontSize:'24px',
            textAlign:'center',
            display:'block',
            fontWeight:'700'
        },
        filter:{
            display:'flex',
            marginTop:'24px',
            paddingBottom:'24px',
            height:'70px',
            ['@media (max-width:1022px)']: {
                order:'3'
            },
        },
        fiterSection1:{
            zIndex:'12',
            position:'relative',
            marginRight:'12px',
            marginLeft:'36px',
            listStyle:'none',
            display:'block',
            width:'65px',
            border: '1px solid #458ea7',
            borderRadius:'5px',
            boxShadow:'rgb(0 0 0 / 10%) 3px 3px 5px 0px',
            padding:'6px 12px',
            height:'fit-content',
            textAlign:'center',
            cursor:'pointer',
            "&:hover": {
                color:'#e7b717',
              },
            
            
        },

        fiterSection2:{
            zIndex:'14',
            position:'relative',
            marginRight:'12px',
            marginLeft:'36px',
            listStyle:'none',
            display:'block',
            width:'65px',
            border: '1px solid #458ea7',
            borderRadius:'5px',
            boxShadow:'rgb(0 0 0 / 10%) 3px 3px 5px 0px',
            padding:'6px 12px',
            height:'fit-content',
            textAlign:'center',
            backgroundColor:'white',
            cursor:'pointer',
            "&:hover": {
                color:'#e7b717',
              },
            
        },
        fiterSectionClass:{
            display:'none',
            position:'absolute',
            top:'-1px',
            left:'-37px',
            
            position:'absolute',
            background:'white',
            marginRight:'12px',
            marginLeft:'36px',
            listStyle:'none',
            width:'104px',
            border: '1px solid #458ea7',
            borderRadius:'5px',
            boxShadow:'rgb(0 0 0 / 10%) 3px 3px 5px 0px',
            height:'300px',
            overflow:'auto',
            zIndex:'15',
        },
        fiterSectionSub:{
            zIndex:'15',
            display:'none',
            position:'absolute',
            left:'-37px',
            top:'-1px',
            background:'white',
            position:'absolute',
            background:'white',
            marginRight:'12px',
            marginLeft:'36px',
            listStyle:'none',
            width:'104px',
            border: '1px solid #458ea7',
            borderRadius:'5px',
            boxShadow:'rgb(0 0 0 / 10%) 3px 3px 5px 0px',
            height:'300px',
            overflow:'auto'
        },
        itemFilter:{
            padding:'6px 12px',
            textAlign:'center',
            "&:hover": {
                backgroundColor: "#e7b712",
                color:'white',
                cursor:'pointer'
              }
        },
        framesText:{
            width:'100%',
            height:'150px',
            boxSizing:'border-box',
            padding:'12px'
        },
        inputText:{
            margin:'12px',
            ['@media (max-width:1022px)']: {
                order:'4'
            },
        },
        overOpen:{
            backgroundColor:'',
            position:'fixed',
            top:0,
            right:0,
            left:0,
            bottom:0
        },
        inputImage:{
            marginLeft:'24px',
            display:'flex',
            alignItems:'center',
            marginBottom:'12px',
            ['@media (max-width:1022px)']: {
                order:'5',
                
            },
            cursor:'pointer',
            "&:hover": {
                color:'#e7b717',
                opacity:0.8
              },
            
            
        },
        image:{
            width:'10px',
            height:'16px',
            paddingLeft:'10px',
            
        },
        senQues:{
            padding:'5px 10px',
            width:'fit-content',
            backgroundColor:'#e7b717',
            borderRadius:'5px',
            marginRight:'24px',
            float:'right',
            "&:hover": {
                opacity: "0.8"
              }
            
        },
        sendE:{
            display:'block',
            overflow:'hidden',
            padding:'12px',
            borderTop:'1px solid ',
            marginBottom:'-20px',
            backgroundColor:'white',
            cursor:'pointer',
            
            ['@media (max-width:1022px)']: {
                order:'1',
                marginBottom:'0px',
            },
        }
    })
}
export default styles