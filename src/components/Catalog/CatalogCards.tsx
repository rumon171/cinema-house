import React from "react";
import{ useRef, useEffect } from "react";
import { Grid, CardMedia } from '@material-ui/core';
import '../../App.scss';
import './Catalog.scss';
import loadingSpinner from '../../images/loading-spinner.gif';
import useIntersectionObserver from '../../customHooks/useIntersectionObserver';
import { changeCurrentPage } from '../../actions';
import { fetchMovies, Movie} from "../../services/movies.service";
import { RootState } from '../../reducer';
import { showMoviesAtHomePage } from '../../actions';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import CardElement from '../GeneralComponents/CardElement';

const CatalogCards: React.FC = () =>  {
  const loadingRef = useRef<HTMLDivElement | null>(null);
  const entry = useIntersectionObserver(loadingRef, {})
  const isVisible = !!entry?.isIntersecting;
  const dispatch = useDispatch();
  const movies = useSelector((state: RootState) => state.homePageMovies);
  const searchedMovie = useSelector((state: RootState) => state.searchedMovie);
  const currentPage = useSelector((state: RootState) => state.currentPage);

  useEffect (
    () => {
      if ( isVisible ) {
        if (currentPage <= 500) {
          dispatch(changeCurrentPage(currentPage+1));

          fetchMovies(String(currentPage))
            .then(nextPage => {
              dispatch(showMoviesAtHomePage([...movies, ...nextPage]));
            })
            .catch(() => {
              dispatch(showMoviesAtHomePage([...movies]));
            });
        }
      }
    },
    [isVisible]
  );

  return (
    <div >
      {(movies.length > 0 && movies.length < 6) && <div className="search-results-title">Found matched movies</div> }
      {
        movies.length > 0 
        ? 
        <Grid container className="container-content">
          { 
            movies.filter((movie: Movie) => movie.vote_average !== 0).map((movie: Movie) => (
              <CardElement key={movie.id} card={movie} />
            ))
          }
        </Grid>
        :
        searchedMovie ?
          <div className="">Try a different phrase...</div>
          :
          <CardMedia
          component="img"
          image={loadingSpinner}
          className="loading-spinner"
          />     
      }
      {!searchedMovie && <div ref={loadingRef}>{currentPage <= 500 ? '' : "You've seen all movies;)"}</div>}
    </div>
  );
}

export default CatalogCards;