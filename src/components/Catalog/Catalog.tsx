import{ useEffect } from "react";
import{ useContext } from "react";
import { MoviesContext } from "../../services/context";
import CatalogCards from './CatalogCards';
import ScrollTop from '../Catalog/ScrollTop';
import { Toolbar, Fab } from '@material-ui/core';
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';
import { Movie, fetchMovies } from "../../services/movies.service";

const Catalog = (props: any) => {

  const { isFetching, setIsFetching, updateMovies } = useContext(MoviesContext);  

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  function handleScroll() {
    if (window.innerHeight + document.documentElement.scrollTop !== document.documentElement.offsetHeight) return;
    console.log('BOTTOM IS REACHED');
    setIsFetching(true);
  }
  
  useEffect(() => {
    if (!isFetching) return;
    console.log("fetchMovies() function is called");
    fetchMovies()
      .then(prevState => updateMovies([...prevState, {
        id: 2000,
        title: "TITLE",
        vote_average: 10,
      }]))
      .catch(() => updateMovies([]));

      setIsFetching(false);   
  }, [isFetching, updateMovies, setIsFetching]);

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