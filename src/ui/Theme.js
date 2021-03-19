import { createMuiTheme } from "@material-ui/core/styles";

const arcBlue = "#458ea7";
const arcOrange = "#e7b717";
const arcGrey = "#eceff1";
const arrWhite= "#ffffff"

export default createMuiTheme({
   
  palette: {
    common: {
      blue: arcBlue,
      grey: arcGrey
    },
    primary: {
      main: arcOrange
    },
    secondary: {
      main: arrWhite
    },
    breakpoints: {
      values: {
        tablet: 640,
        laptop: 1024,
        desktop: 1280,
      },
    },
  },
  
});