import React from "react";
import Topbar from '../Header/Topbar';
import MovieCards from '../Catalog/MovieCards';
import Toolbar from '@material-ui/core/Toolbar';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import Fab from '@material-ui/core/Fab';
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';
import ScrollTop from '../Catalog/ScrollTop';

const BaseContainer = (props: any) => {
  return (
    <React.Fragment>
      <Container>
        <CssBaseline />
        <Topbar></Topbar>
        <Toolbar id="back-to-top-anchor" />
        <MovieCards></MovieCards>
        <ScrollTop {...props}>
          <Fab color="secondary" size="small" aria-label="scroll back to top">
            <KeyboardArrowUpIcon />
          </Fab>
        </ScrollTop>
      </Container>
    </React.Fragment>
  );
}

export default BaseContainer;