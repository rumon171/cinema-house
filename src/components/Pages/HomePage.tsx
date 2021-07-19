import Topbar from '../Header/Topbar';
import {useContext} from "react";
import MovieCards from '../Catalog/MovieCards';
import ScrollTop from '../Catalog/ScrollTop';
import {Toolbar, Fab} from '@material-ui/core';
import {Button} from '@material-ui/core';
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';
import { MoviesContext } from "../../services/context";

const HomePage = (props: any) => {

  const { setSelectedMovie } = useContext(MoviesContext);  


  const Trial = () => {
    setSelectedMovie(234);
  }

  return (
    <>
        <Topbar></Topbar>
        <Toolbar id="back-to-top-anchor" />
<Button 
    variant="contained" 
    color="primary" 
    onClick={Trial}
    href="#">
    SET selected movie
  </Button>
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