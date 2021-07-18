import React from 'react';
import {AppBar, Toolbar, Typography, OutlinedInput} from '@material-ui/core';
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