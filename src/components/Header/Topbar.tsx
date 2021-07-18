import React from 'react';
import {AppBar, Toolbar, Typography, OutlinedInput} from '@material-ui/core';
import './Header.css';

const Topbar = (props: any) => {
  return (
    <>
      <AppBar>
        <Toolbar className="top-bar ">
          <h1 className="top-bar-title">
            Movies app
          </h1>
          <OutlinedInput color="secondary" className="seach-field" defaultValue="Search"/>
        </Toolbar>
      </AppBar>
    </>
  );
}

export default Topbar;