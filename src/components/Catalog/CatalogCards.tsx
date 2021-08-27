import{ useRef, useEffect } from "react";
import { Card, Grid, CardActionArea, CardActions, CardMedia, Button } from '@material-ui/core';
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
      {
        movies.length > 0 
        ? 
        <Grid container spacing={1} className="container-content">
          { 
            movies.map((movie: Movie) => (
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