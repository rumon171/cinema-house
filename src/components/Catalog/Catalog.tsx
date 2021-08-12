import{ useEffect, useState, useContext } from "react";
import { MoviesContext } from "../../services/context";
import CatalogCards from './CatalogCards';
import ScrollTop from '../Catalog/ScrollTop';
import { Toolbar, Fab } from '@material-ui/core';
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';
import { fetchMovies } from "../../services/movies.service";

const Catalog = (props: any) => {

  const { updateMovies, moviesPage, setMoviesPage } = useContext(MoviesContext);
  const [isFetching, setIsFetching] = useState(false);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  function handleScroll() {
    if (window.innerHeight + document.documentElement.scrollTop !== document.documentElement.offsetHeight) return;
    setMoviesPage(moviesPage + 1);
    console.log('BOTTOM IS REACHED, moviesPage: ', moviesPage);
    setIsFetching(true);
  }

  const handleFetchMovie = () => {
    if (!isFetching) return;
    console.log("fetchMovies() function is called, moviesPage: ", moviesPage, " isFetching ", isFetching);
    setIsFetching(true);
    fetchMovies(String(moviesPage))
      .then(prevState => updateMovies([...prevState]))
      .catch(() => updateMovies([]));
    setIsFetching(false);
 }
 
 useEffect(() => {
    handleFetchMovie();
    // eslint-disable-next-line react-hooks/exhaustive-deps
 }, [moviesPage]);

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