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

  async function handleScroll() {
    if (window.innerHeight + document.documentElement.scrollTop !== document.documentElement.offsetHeight) return;
    console.log('BOTTOM IS REACHED');
    await setIsFetching(true);
    //await setMoviesPage(prev => prev + 1);
   // setMoviesPage((prev: number) => prev + 1);
  }

  useEffect(() => {
    if (!isFetching) return;
    console.log("fetchMovies() function is called");
    fetchMovies('2')
      .then(prevState => updateMovies([...prevState]))
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