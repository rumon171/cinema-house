import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import OutlinedInput from '@material-ui/core/OutlinedInput';

const MoviePage = (props: any) => {
  return (
    <React.Fragment>
      <AppBar>
        <Toolbar >
          <Typography variant="h6">Movies PAGE</Typography>
          <OutlinedInput color="secondary" defaultValue="Search"/>
        </Toolbar>
      </AppBar>
    </React.Fragment>
  );
}

export default MoviePage;