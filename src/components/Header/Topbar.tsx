import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import './Header.css';

const Topbar = (props: any) => {
  return (
    <React.Fragment>
      <AppBar>
        <Toolbar className="topBar">
          <Typography variant="h6">Movies app</Typography>
          <TextField id="outlined-basic" label="Search" variant="outlined" className="seachField" />
        </Toolbar>
      </AppBar>
    </React.Fragment>
  );
}

export default Topbar;