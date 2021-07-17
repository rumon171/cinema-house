import React from "react";
import Topbar from '../Header/Topbar';
import MovieCards from '../Catalog/MovieCards';
import Toolbar from '@material-ui/core/Toolbar';
import Fab from '@material-ui/core/Fab';
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';
import ScrollTop from '../Catalog/ScrollTop';

const HomePage = (props: any) => {
  return (
    <React.Fragment>
        <Topbar></Topbar>
        <Toolbar id="back-to-top-anchor" />
          <MovieCards></MovieCards>
          <ScrollTop {...props}>
            <Fab color="secondary" size="small" aria-label="scroll back to top">
              <KeyboardArrowUpIcon />
            </Fab>
          </ScrollTop>
    </React.Fragment>
  );
}

export default HomePage;