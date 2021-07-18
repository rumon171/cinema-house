import Topbar from '../Header/Topbar';
import MovieCards from '../Catalog/MovieCards';
import ScrollTop from '../Catalog/ScrollTop';
import {Toolbar, Fab} from '@material-ui/core';
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';

const HomePage = (props: any) => {
  return (
    <>
        <Topbar></Topbar>
        <Toolbar id="back-to-top-anchor" />
          <MovieCards></MovieCards>
          <ScrollTop {...props}>
            <Fab color="secondary" size="small" aria-label="scroll back to top">
              <KeyboardArrowUpIcon />
            </Fab>
          </ScrollTop>
    </>
  );
}

export default HomePage;