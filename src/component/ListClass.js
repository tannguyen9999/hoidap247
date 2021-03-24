import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `vertical-tab-${index}`,
    'aria-controls': `vertical-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme) => ({
  root: {
    position:'absolute',
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
    display: 'flex',
    border: '1px solid #458ea7',
    borderRadius:'5px',
    boxShadow:'rgb(0 0 0 / 10%) 3px 3px 5px 0px',
    height:'300px',
  },
  tabs: {
    borderRight: `1px solid ${theme.palette.divider}`,
  },
  tab:{
      padding:'0px',
      minWidth:'104px',
      "&:hover": {
        backgroundColor:'#458ea7',
        color:'white'
      },
  }
}));

export default function VerticalTabs({location}) {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);
  const [open,setOpen]= React.useState(location);

  const handleChange = (event, newValue) => {
    setValue(newValue);
    setOpen({
        display:'none',
    })
  };
  return (
    <div style={open} className={classes.root}>
      <Tabs
        orientation="vertical"
        variant="scrollable"
        value={value}
        onChange={handleChange}
        aria-label="Vertical tabs example"
        className={classes.tabs}
      >
        <Tab className={classes.tab} label="Tất cả" {...a11yProps(0)} />
        <Tab className={classes.tab} label="Lớp 1" {...a11yProps(1)} />
        <Tab className={classes.tab} label="Lớp 2" {...a11yProps(2)} />
        <Tab className={classes.tab} label="Lớp 3" {...a11yProps(3)} />
        <Tab className={classes.tab} label="Lớp 4" {...a11yProps(4)} />
        <Tab className={classes.tab} label="Lớp 5" {...a11yProps(5)} />
        <Tab className={classes.tab} label="Lớp 6" {...a11yProps(6)} />
        <Tab className={classes.tab} label="Lớp 7" {...a11yProps(7)} />
        <Tab className={classes.tab} label="Lớp 8" {...a11yProps(8)} />
        <Tab className={classes.tab} label="Lớp 9" {...a11yProps(9)} />
        <Tab className={classes.tab} label="Lớp 10" {...a11yProps(10)} />
        <Tab className={classes.tab} label="Lớp 11" {...a11yProps(11)} />
        <Tab className={classes.tab} label="Lớp 12" {...a11yProps(12)} />

      </Tabs>
     
    </div>
  );
}

VerticalTabs.propTypes = {
    location: PropTypes.object
    
  };