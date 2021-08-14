import{ useEffect, useContext } from "react";
import { MoviesContext } from "../../services/context";
import CatalogCards from './CatalogCards';
import ScrollTop from '../Catalog/ScrollTop';
import { Toolbar, Fab } from '@material-ui/core';
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';
import { Movie, fetchMovies } from "../../services/movies.service";

const Catalog = (props: any) => {

  /*
  const { updateMovies, moviesPage, setMoviesPage } = useContext(MoviesContext);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  function handleScroll() {
    if (window.innerHeight + document.documentElement.scrollTop !== document.documentElement.offsetHeight) return;
    //if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight) return;
    setMoviesPage(moviesPage+1);
    console.log('BOTTOM OF THE PAGE');
  }

  const fetchNextMoviesPage = (page: number) => {
    fetchMovies(String(page))
      .then(nextPage => {
        updateMovies((movies: Movie[]) => movies.concat(nextPage));
      })
      .catch(() => updateMovies([]));
  };

  useEffect(() => {
    fetchNextMoviesPage(moviesPage);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [moviesPage]);
  */

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