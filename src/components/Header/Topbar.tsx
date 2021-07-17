import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import './Header.css';

const Topbar = (props: any) => {
  return (
    <>
      <AppBar>
        <Toolbar className="topBar">
          <Typography variant="h6">Movies app</Typography>
          <OutlinedInput color="secondary" className="seachField" defaultValue="Search"/>
        </Toolbar>
      </AppBar>
    </>
  );
}

export default Topbar;