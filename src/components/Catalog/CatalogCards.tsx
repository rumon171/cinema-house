import React from 'react';
import{ useRef, useEffect } from "react";
import { Grid, CardMedia } from '@material-ui/core';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import '../../App.scss';
import './Catalog.scss';
import noImage from '../../images/no-image-available.png';
import loadingSpinner from '../../images/loading-spinner.gif';
import { NavLink } from 'react-router-dom';
import useIntersectionObserver from '../../customHooks/useIntersectionObserver';
import { changeSelectedMovie, isMoviePageOpened, changeCurrentPage } from '../../actions';
import { fetchMovies, Movie} from "../../services/movies.service";
import { RootState } from '../../reducer';
import { addHomePageMovies } from '../../actions';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';

const posterBaseUrl = "https://image.tmdb.org/t/p/w300";

const CatalogCards = () =>  {
  const loadingRef = useRef<HTMLDivElement | null>(null);
  const entry = useIntersectionObserver(loadingRef, {})
  const isVisible = !!entry?.isIntersecting;
  const dispatch = useDispatch();
  const movies = useSelector((state: RootState) => state.homePageMovies);
  const searchedMovie = useSelector((state: RootState) => state.searchedMovie);
  const currentPage = useSelector((state: RootState) => state.currentPage);
  const isArrayMinLength = 'movies.length > 6';
  //const [loaded, setLoaded] = useState(false);

  const SetSelectedMovieId = (id: number) => {
    dispatch(isMoviePageOpened(true));
    dispatch(changeSelectedMovie(id));
  }

  useEffect (
    () => {
      if ( isVisible ) {
        if (currentPage <= 500) {
          dispatch(changeCurrentPage(currentPage+1));

          fetchMovies(String(currentPage))
            .then(nextPage => {
              dispatch(addHomePageMovies([...movies, ...nextPage]));
            })
            .catch(() => {
              dispatch(addHomePageMovies([...movies]));
            });
        }
      }
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [isVisible]
  );

  return (
    <div >
      {movies.length < 6 && <div className="search-results-title">Found matched movies</div> }
      {
        movies.length > 0 
        ? 
        <Grid container spacing={1} className="container-content">
          { 
            movies.map((movie: Movie) => (
              <Grid item xs={isArrayMinLength ? 6 : 12} sm={isArrayMinLength ? 4 : 12} md={isArrayMinLength ? 3 : 12} lg={isArrayMinLength ? 2 : 6} key={movie.id}>
                <NavLink to={'/movie/' + movie.id}>
                  <div className="card-container" onClick={() => SetSelectedMovieId(movie.id)} >
                    <img
                      className="card-poster"
                      alt={"Poster of " + movie.title}
                      src={movie.poster_path ? (movie.poster_path.includes('.jpg') ? posterBaseUrl + movie.poster_path : noImage) : noImage}
                      title={movie.title}
                    />
                    <div className="card-details">
                      <div className="title">
                        <FavoriteBorderIcon />
                      </div>
                      <div className="details">
                        {movie.vote_average}
                      </div>
                    </div>
                  </div>
                </NavLink>
              </Grid>
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