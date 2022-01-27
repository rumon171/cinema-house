import React, { useState, useEffect } from 'react';
import {
  Movie,
  fetchSelectedMovie,
  fetchSimilarMovies,
} from '../../services/movies.service';
import { Grid, Card, CardMedia } from '@material-ui/core';
import CardsGrid from '../GeneralComponents/CardsGrid';
import { RootState } from '../../reducer';
import { useSelector } from 'react-redux';
import './Containers.scss';
import noImage from '../../images/no-image-available.png';
import { movieIdFromUrl } from '../../utilities/common';
import useStyles from './MovieContent.styles';
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
    runtime: 0,
    budget: 0,
    revenue: 0,
    genres: [],
    production_countries: [],
  });
  const [movieImg, setMovieImg] = useState<string>(noImage);
  const [similarMovies, setSimilarMovies] = useState<Movie[]>([]);
  const movieGenresAmount = movie.genres?.length ?? 0;
  const classes = useStyles();

  useEffect(() => {
    const movieId = selectedMovie !== 0 ? selectedMovie : movieIdFromUrl();
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

  const convertMinutesToHoursAndMinutes = (durationInMinutes: number) => {
    const remainingHours = Math.floor(durationInMinutes / 60);
    const remainingMinutes = durationInMinutes % 60;

    return remainingHours + remainingMinutes > 0
      ? remainingHours + ' h ' + remainingMinutes + ' min'
      : ' 0 min';
  };

  return (
    <>
      <Grid container spacing={2} className={classes.containerMoviePage}>
        <Grid item xs={12} sm={6} md={3}>
          <Card className="card-movie">
            <CardMedia
              component="img"
              alt={'Poster of ' + movie.title}
              image={movie.poster_path ? movieImg : noImage}
            />
          </Card>
        </Grid>
        <Grid item xs={12} sm={6} md={9}>
          <h1 className={classes.title}>{movie.title}</h1>
          <div className="content">
            <span className="content-imdb-container">
              <a
                href="https://www.imdb.com/title/tt2096673/"
                target="_blank"
                rel="noopener noreferrer"
              >
                imdb
              </a>
            </span>
            <span>
              {movie.vote_average !== undefined &&
                movie.vote_average.toFixed(2)}
            </span>
            <span>
              {movie.release_date ? (
                <>
                  <span className="content-info-separator">|</span>
                  {movie.release_date.substring(0, 4)} (
                  {movie.production_countries &&
                    movie.production_countries[0]?.iso_3166_1}
                  )
                </>
              ) : (
                'Release date: Coming soon'
              )}
            </span>
            <span>
              {movie.runtime && (
                <>
                  <span className="content-info-separator">|</span>
                  {convertMinutesToHoursAndMinutes(movie.runtime)}
                </>
              )}
            </span>
            <p className="content-main-paragraph">{movie.overview}</p>
            <p>
              <span className="content-main-paragraph-title">Genres:</span>
              &nbsp;
              {movie.genres &&
                movie.genres?.map((genre, i) => (
                  <span key={i}>
                    {genre.name}
                    {movieGenresAmount !== i + 1 && <span>,</span>}&nbsp;
                  </span>
                ))}
            </p>
            {Boolean(movie.budget) && (
              <p>
                <span className="content-main-paragraph-title">Budget:</span> $
                {movie.budget}
              </p>
            )}
            {Boolean(movie.revenue) && (
              <p>
                <span className="content-main-paragraph-title">Revenue:</span> $
                {movie.revenue}
              </p>
            )}
          </div>
        </Grid>
        {similarMovies.length > 0 && (
          <div className={classes.similarMoviesTitle}>More like this</div>
        )}
        <CardsGrid similarMovies={similarMovies}></CardsGrid>
      </Grid>
    </>
  );
};

export default MovieContent;
