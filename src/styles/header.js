import { useTheme } from "@material-ui/core/styles";
import background from "../assets/images/logo_h247.png";
import background2 from "../assets/images/logo_small.png";

const styles = () =>{
    const theme = useTheme();
 
    return({
      a:{
        color:'red'
      },
      header: {
        zIndex:'15',
        backgroundColor: '#ffffff',
        height:'52px',
        width:'100%',
        position:'fixed',
        top:'0',
        boxShadow: '0px 0px 5px 1px #2626262b',
        ['@media (max-width:1022px)']: {
          height:'46px',
        },
        display:'flex'
      },
     
      center:{
        flex:'1',
        maxWidth:'1200px',
        display:'flex',
        marginLeft:'auto',
        marginRight:'auto',
        marginBottom:'auto',
        marginTop:'auto'
      },
      logo:{
        cursor:'pointer',
        width:'166px',
        height:'30px',
        marginTop: 'auto',
        marginBottom: 'auto',
        background:`url(${background}) top center / cover no-repeat`,

        ['@media (min-width:640px) and (max-width:1024px)']: {
          width:'142px',
          height:'26px',
          marginLeft:'12px'
        },
        ['@media (max-width: 639px)']: {
          background:`url(${background2}) top center / cover no-repeat`,
          width:'22px',
          height:'25.406px',
          marginRight:'12px',
          marginLeft:'12px'
        },
        
      },
      sectionSearch:{
        marginLeft:'64px',
        marginTop:'auto',
        marginBottom:'auto',
        display:'flex',
        alignItems:'center',
        transition: 'all 1s ease 0s',
        padding:'0 0px',
        backgroundColor:'white',
        marginRight:'12px', 

       transitionimingFunction: 'ease',
        flex:'1',
        ['@media (max-width:649px)']: {
          marginLeft:'0px',
        },
        
        
      },
      searchInput:{
        padding:'10px',
        fontSize:'18px',
        background:"#ecf4e9",
        border: 'solid #ffffff',
        outline:'none',
        borderRadius: '8px',
        width:'calc(100% - 153px)',
        paddingRight:'50px',
        transition: 'all 1s ease 0s',
        ['@media (min-width:740px) and (max-width:1022px)']: {
          fontSize:'15px',
          padding:'9px',
          flex:'1',
          
        },
        ['@media (max-width:649px)']: {
          background:"#e2e2e2",
          padding:'5px 5px',
          fontSize:'16px',
          borderRadius: '25px 0px 0px 25px ',
          width:'calc(100% - 50px)',
          border:'0',
          flex:'1',
        },
      },
      'searchInput:focus':{
        padding:''
      },
      searchButton:{
        cursor:'pointer',
        backgroundColor:'#e7b712',
        lineHeight:'41px',
        fontSize:'20px',
        border:'none',
        borderRadius: '3px',
        width:'87px',
        color:'white',
        ['@media (min-width:740px) and (max-width:1022px)']: {
          fontSize:'15px',
          lineHeight:'35px',
          width:'50px'
        },
        ['@media (max-width:639px)']: {
          display:'none',
        },
      },
      iconSearchMini:{
        display:'none',
        ['@media (max-width:639px)']: {
          display:'block',
          width:'20px',
        height:'20px',
        padding:'4px',
        background:"#e2e2e2",
        borderRadius: '0px 25px 25px 0px ',
        },
        
      },
      navSmall:{
        display:'none',
        
        ['@media (max-width:1022px)']: {
          display:'flex',
        },
       
      },
      navIconMenu:{
        cursor:'pointer',
        display:'block',
        padding:'0 20px',
        marginBottom:'auto',
        marginTop:'auto',
      },
      navSidebar:{
        width:'276px',
        height:'100vh',
        backgroundColor:'#ffffff',
        position: 'fixed',
        top:'0px',
        transition: 'all 0.5s ease 0s',
        
      ['@media (max-width:639px)']: {
        width:'100%', 
      },
      },
      navSidebar1:{
        display:'flex',
        margin:'12px 12px',
        transition: 'all 0.5s ease 0s',
        ['@media (max-width:639px)']: {
          justifyContent: 'center',
        },
        
      },
      navSidebar2:{
        display:'flex',
        flexWrap:'wrap',
        ['@media (max-width:639px)']: {
          justifyContent: 'center',
        },
      },

      textHeader:{
        width: '120px',
        textAlign: 'center'
        
      },
      textHeader2:{
        textAlign:'center',
        marginTop:'40px',
        fontSize:'20px',
        fontWeight:'800',
        padding:'0 12px'
        
      },
      buttonSignin:{
        cursor:'pointer',
        width:'148px',
        height:'38px',
        backgroundColor:'rgb(69, 142, 167)',
        fontSize: '15px',
        lineHeight: '22px',
        margin:'10px 60px',
        color:'white',
        fontWeight:'600',
        border: 'none',
        borderRadius: '5px',
      },
      buttonSignup:{
        cursor:'pointer',
        width:'148px',
        height:'38px',
        backgroundColor:'#e7b712',
        fontSize: '15px',
        lineHeight: '22px',
        margin:'0px 60px',
        color:'white',
        fontWeight:'600',
        border: 'none',
        borderRadius: '5px',
      },
      
      systemAvatar:{
        width:'48px',
        height:'48px',
        border: '1px solid green ',
        padding: '3px',
        borderRadius: '15px',
        marginRight:'20px'
      },
      backHeader:{
        cursor:'pointer',
        display:'none',
        width:'20px',
        height:'20px',
        marginLeft:'20px',
        border: '1px solid green ',
        borderRadius: '5px',
        padding: '5px 10px',
        ['@media (max-width:1022px)']: {
          display:'block',
          marginTop:'12px'  
        },
      
        
      },
      navAuth:{
        marginLeft:'140px',
        display:'flex',
        marginTop:'auto',
        marginBottom:'auto', 
        
        ['@media (max-width:1023px)']: {
          display:'none'  
        },
        
      },
      navAuth2:{
        display:'flex',
        listStyle:'none',
        marginLeft:'100px',
       
        marginTop:'auto',
        marginBottom:'auto',
        ['@media (min-width:740px) and (max-width:1022px)']: {
          
        marginLeft:'0px',
        },
        ['@media (max-width:639px)']: {
          marginLeft:'0px',
        },
      },

      
      navMess:{
        fontSize:'20px',
        paddingRight:'24px',
        cursor:'pointer',
        color:'#458ea7',
        ['@media (max-width:639px)']: {
          fontSize:'13px',
        paddingRight:'10px',
        },
      },
      navBell:{
        fontSize:'20px',
        paddingRight:'24px',
        cursor:'pointer',
        fontWeight:'600',
        color:'#458ea7',
        ['@media (max-width:639px)']: {
          fontSize:'13px',
        paddingRight:'10px',
        },
      },
      navUser:{
        fontSize:'20px',
        paddingRight:'24px',
        cursor:'pointer',
        color:'#458ea7',
        ['@media (max-width:639px)']: {
          fontSize:'13px',
        paddingRight:'10px',
        },
      },
      navUserMore:{
        fontSize:'15px',
        width:'px',
        overflow:'hidden',
        display:'flex',
        alignItems:'center',
        cursor:'pointer',
        color:'#458ea7',
        fontFamily: 'auto',
        marginRight:'12px',
        ['@media (min-width:740px) and (max-width:1022px)']: {
          
        },
        ['@media (max-width:639px)']: {
          display:'none'
        },


      },
      navUserName:{
      
      },
      navLogo:{
        display:'block',
        marginRight:'5px'
      },
      navSignin:{
        padding:'0 12px',
        display:'block',
        borderRight: '1px solid'
      },
      navSignup:{
        padding:'0 12px',
        display:'block'
      },
      navAuthText:{
        color:'black',
        textDecoration:'none',
        fontFamily: 'auto'
      },
    toolbar:{
        color:'red',
        [theme.breakpoints.down("md")]: {
            color:'green',
          
          },
    },
    search: {
      display:"flex",
        
      },
      searchInputGroup:{
          backgroundColor:"#ecf4e9",
          borderRadius:"5px",
          height:"3em",
          width:"30em"
      },
    //   searchInput:{
    //     background:"#ecf4e9",
    //     border:"none",
    //     height:"100%",
    //     color: "red",
    //     fontSize:"large",
        
    // "&::placeholder": {
    //     fontSize:"large",
    //     color: "red",
    //     paddingLeft:"2px"
    //   },
    //   },
      
      logoContainer: {
        
        "&:hover": {
          backgroundColor: "transparent"
        }
      },
     
      overNav:{
        position:'fixed',
               top:'48px',
               width:'100%',  
               right:'-9999px',
               bottom:'0px',
               
      },

      navSidebar3:{
      
        
        listStyle:'none',
        position: 'fixed',
    top: '53px',
    right: '-700px',
    fontFamily: 'ui-sans-serif',
    fontSize:'18px',
    border: '1px solid #458ea7',
    borderRadius: '5px',
    boxShadow: '0px 0px 5px 1px #2626262b',
    backgroundColor:'white',
    ['@media (min-width: 640px) and (max-width:1022px)']: {
      top: '47px',
      height:'100%',
      top:'0',
      transition: 'all 0.5s ease 0s',


    },
    ['@media (max-width:639px)']: {
      width:'100%',
      top:'0',
      height:'100%',
      transition: 'all 0.5s ease 0s',

    },
      },


      navSidebar3child:{
        padding:'12px 12px 12px 60px',
        display:'block',
        textAlign: 'right',
        ['@media (min-width:740px) and (max-width:1022px)']: {
          paddingLeft:'12px',
          textAlign: 'left'
        },
        ['@media (max-width:639px)']: {
          paddingLeft:'12px',
          textAlign: 'left'
        },
        
        
      },
      triangle:{
        display: 'inline-block',
        width: '0',
        height: '0',
        border: '5px solid #333',
        margin: '0 auto',
        borderBottomColor: 'transparent',
        borderRightColor: 'transparent',
        borderTopColor: 'transparent',
        ['@media (max-width:1022px)']: {
          margin:'0 7px'
          
        },
      },
      navSidebar3Text:{
        borderBottom: '1px solid #e1e1e1',
        
        width:'100%',
        padding:'12px 12px',
        ['@media (min-width:740px) and (max-width:1022px)']: {
          paddingLeft:'0px',
          borderBottom:'none'           
        },
        ['@media (max-width:639px)']: {
        },
        
      },
      navSidebarContent:{
        
        ['@media (min-width:740px) and (max-width:1022px)']: {
          border: '1px solid #333', 
          padding:'5px 0px',
          border: '1px solid #e1e1e1',
          borderRadius: '5px',           
        },
        ['@media (max-width:639px)']: {
        },
        
      }
})}
export default styles; 