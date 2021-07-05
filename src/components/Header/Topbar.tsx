import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

const Topbar = (props: any) => {
  return (
    <React.Fragment>
      <AppBar>
        <Toolbar>
          <Typography variant="h6">Scroll to see button</Typography>
        </Toolbar>
      </AppBar>
    </React.Fragment>
  );
}

export default Topbar;