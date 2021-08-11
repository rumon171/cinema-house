import{ useEffect } from "react";
import{ useContext } from "react";
import { MoviesContext } from "../../services/context";
import CatalogCards from './CatalogCards';
import ScrollTop from '../Catalog/ScrollTop';
import { Toolbar, Fab } from '@material-ui/core';
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';
import { Movie, fetchMovies } from "../../services/movies.service";

const Catalog = (props: any) => {

  // SHOULD IT REALLY BE IN CONTEXT?
  const { isFetching, setIsFetching } = useContext(MoviesContext);  

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  function handleScroll() {
    if (window.innerHeight + document.documentElement.scrollTop !== document.documentElement.offsetHeight) return;
    setIsFetching(true);
  }
  
  useEffect(() => {
    if (!isFetching) return;
    console.log('MORE MOVIED ARE BEING FETCHED');
    fetchMovies();
  }, [isFetching]);

  return (
    <>
        <Toolbar id="back-to-top-anchor" />
        <CatalogCards></CatalogCards>
        <ScrollTop {...props}>
            <Fab 
                color="secondary" 
                size="small" 
                aria-label="scroll back to top">
                <KeyboardArrowUpIcon />
            </Fab>
        </ScrollTop>
    </>
  );
}

export default Catalog;