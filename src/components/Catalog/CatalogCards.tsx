import{ useContext, useRef, useEffect } from "react";
import { Card, Grid, CardActionArea, CardActions, CardMedia, Button } from '@material-ui/core';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import { MoviesContext } from "../../services/context";
import { Dispatch } from "redux"
import { useDispatch } from 'react-redux';
import { addSelectedMovie } from '../../actions';
import '../../App.scss';
import './Catalog.scss';
import noImage from '../../images/no-image-available.png';
import loadingSpinner from '../../images/loading-spinner.gif';
import { NavLink } from 'react-router-dom';
import useIntersectionObserver from '../../customHooks/useIntersectionObserver';
import { fetchMovies } from "../../services/movies.service";

const posterBaseUrl = "https://image.tmdb.org/t/p/w300";

const CatalogCards = () =>  {
  const { movies, updateMovies, searchedMovie, moviesPage, setMoviesPage, setSelectedMovie, setIsMoviePageFirstTimeOpened } = useContext(MoviesContext);
  const loadingRef = useRef<HTMLDivElement | null>(null);
  const entry = useIntersectionObserver(loadingRef, {})
  const isVisible = !!entry?.isIntersecting;
  const dispatch: Dispatch<any> = useDispatch();

  const SetSelectedMovieId = (id: number) => {
    setIsMoviePageFirstTimeOpened(true); // WHY THIS IS NEEDED?
    dispatch(addSelectedMovie(id));
    //setSelectedMovie(id); 
    console.log("catalogCards MOVIE ID ", id);
  }

  useEffect (
    () => {
      if ( isVisible ) {
        if (moviesPage <= 500) {
          setMoviesPage(moviesPage+1);
          fetchMovies(String(moviesPage))
            .then(nextPage => {
              updateMovies([...movies, ...nextPage]);
            })
            .catch(() => updateMovies([]))
        }
      }
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [isVisible]
  );

  return (
    <div >
      <Grid container spacing={1} className="container-content">
        { 
        movies.length > 0 
          ? 
          movies.map((movie) => (
            <Grid item xs={12} sm={6} md={3} lg={2} key={movie.id}>
              <NavLink to={'/movie/' + movie.id}>
                <Card className="card-list" onClick={() => SetSelectedMovieId(movie.id)} >
                  <CardActionArea>
                    <CardMedia
                      component="img"
                      alt={"Poster of " + movie.title}
                      image={movie.poster_path ? posterBaseUrl + movie.poster_path : noImage}
                      title={movie.title}
                    />
                  </CardActionArea>
                  <CardActions>
                    <Button size="small" color="primary">
                      <FavoriteBorderIcon />
                    </Button>
                    <Button size="small" color="primary">
                      {movie.vote_average}
                    </Button>
                  </CardActions>
                </Card>
              </NavLink>
            </Grid>
          ))
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
      </Grid>
      <div ref={loadingRef}>{moviesPage <= 500 ? '...' : "You've seen all movies;)"}</div>
    </div>
  );
}

export default CatalogCards;