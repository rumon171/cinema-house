import React, { useState, useEffect } from 'react';
import {
  Movie,
  fetchSelectedMovie,
  fetchSimilarMovies,
} from '../../services/movies.service';
import { Grid, Card, CardMedia, Button } from '@material-ui/core';
import CardsGrid from '../GeneralComponents/CardsGrid';
import { RootState } from '../../reducer';
import { useSelector } from 'react-redux';
import './Pages.scss';
import noImage from '../../images/no-image-available.png';
import { movieIdFromUrl } from '../../utilities/common';
const posterBaseUrl = 'https://image.tmdb.org/t/p/w300';

const MovieContent: React.FC = () => {
  const selectedMovie = useSelector((state: RootState) => state.selectedMovie);

  const [movie, setMovie] = useState<Movie>({
    id: 0,
    title: '',
    vote_average: 0,
    overview: '',
    poster_path: noImage,
    release_date: '',
    budget: 0,
    revenue: 0,
    genres: [],
  });
  const [movieImg, setMovieImg] = useState<string>(noImage);
  const [similarMovies, setSimilarMovies] = useState<Movie[]>([]);
  const movieGenresAmount = movie.genres?.length ?? 0;

  useEffect(() => {
    const movieId =
      selectedMovie !== 0 ? selectedMovie : movieIdFromUrl();
    const callAPI = async () => {
      const fetchedSelectedMovieInfo = await fetchSelectedMovie(movieId);
      setMovie(fetchedSelectedMovieInfo);
      if (fetchedSelectedMovieInfo.poster_path !== null) {
        setMovieImg(posterBaseUrl + fetchedSelectedMovieInfo.poster_path);
      }

      const fetchedSimilarMovies = await fetchSimilarMovies(movieId);
      setSimilarMovies(fetchedSimilarMovies);
      window.scrollTo(0, 0);
    };

    callAPI();
  }, [selectedMovie]);

  return (
    <>
      <Grid container spacing={2} className="container-movie-page">
        <Grid item xs={12} sm={6} md={3}>
          <Card className="card-movie">
            <CardMedia
              component="img"
              alt={'Poster of ' + movie.title}
              image={movie.poster_path ? movieImg : noImage}
            />
          </Card>
        </Grid>
        <Grid item xs={12} sm={6} md={9} className="align-left">
          <h1 className="title">{movie.title}</h1>
          <div className="content">
            <span className="rating-container">
              {movie.vote_average !== undefined &&
                movie.vote_average.toFixed(2)}
            </span>
            <div>
              {movie.release_date
                ? movie.release_date
                : 'Release date: Coming out soon ;)'}
            </div>
            <p className="content-main-paragraph">{movie.overview}</p>
            <p>
              Genres:&nbsp;
              {movie.genres &&
                movie.genres?.map((genre, i) => (
                  <span key={i}>
                    {genre.name}
                    {movieGenresAmount !== i + 1 && <span>,</span>}&nbsp;
                  </span>
                ))}
            </p>
            {Boolean(movie.budget) && <p>Budget: ${movie.budget}</p>}
            {Boolean(movie.revenue) && <p>Revenue: ${movie.revenue}</p>}
            <Button variant="contained" color="primary" href="#">
              sth
            </Button>
          </div>
        </Grid>
        {similarMovies.length > 0 && (
          <div className="similar-movies-title">Similar movies</div>
        )}
        <CardsGrid similarMovies={similarMovies}></CardsGrid>
      </Grid>
    </>
  );
};

export default MovieContent;
