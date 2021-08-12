import { useState, useEffect, useContext } from "react";
import { Movie, fetchSelectedMovie, fetchSimilarMovies } from "../../services/movies.service";
import { Grid, Card, CardMedia, Button } from '@material-ui/core';
import { MoviesContext } from "../../services/context";
import CardsGrid from '../GeneralComponents/CardsGrid';
import './Pages.scss';
import noImage from '../../images/no-image-available.png';
const posterBaseUrl = "https://image.tmdb.org/t/p/w300";

const MovieContent = (props: any) => {

  const { selectedMovie } = useContext(MoviesContext);

  const movieIdFromUrl = document.URL.split('/').pop();
  const [movie, setMovie] = useState<Movie>(
    {
      id: 0,
      title: '',
      vote_average: 0,
      overview: '',
      poster_path: noImage,
      release_date: '',
      budget: 0,
      revenue: 0,
      genres: [],
    }
  );
  const [movieImg, setMovieImg] = useState<string>(noImage);
  const [similarMovies, setSimilarMovies] = useState<Movie[]>([]);

  useEffect(() => {
      const movieId = selectedMovie !== 0 ? selectedMovie : Number(movieIdFromUrl);

      const callAPI = async () => {  
        const fetchedSelectedMovieInfo = await fetchSelectedMovie(movieId);
        setMovie(fetchedSelectedMovieInfo);
        if (fetchedSelectedMovieInfo.poster_path !== null) {
          setMovieImg(posterBaseUrl+fetchedSelectedMovieInfo.poster_path);
        }

        const fetchedSimilarMovies = await fetchSimilarMovies(movieId);
        setSimilarMovies(fetchedSimilarMovies);
        window.scrollTo(0, 0);
      }

      callAPI();

  }, [selectedMovie, movieIdFromUrl]);

  return (
    <>
      <Grid container spacing={2} className="container-movie-page">
        <Grid item xs={12} sm={6} md={3}>
          <Card className="card-movie">
            <CardMedia
              component="img"
              alt={"Poster of " + movie.title}
              image={ movie.poster_path ? movieImg : noImage }
            />
          </Card>
        </Grid>
        <Grid item xs={12} sm={6} md={9} className="align-left">
          <h1 className="title">
            {movie.title}
          </h1>
          <div className="content">
            <span className="rating-container">
              {movie.vote_average}
            </span>
            <div>
              {movie.release_date? movie.release_date : 'Release date: Coming out soon ;)'}
            </div>
            <p className="content-main-paragraph">
              {movie.overview}
            </p>
            <p>
              Genres:&nbsp;
                {movie.genres && movie.genres?.map((genre, i) => (
                  <span key={i}>
                    {genre.name},&nbsp;
                  </span>
                ))}
            </p>
            <p>
              Budget: ${movie.budget}
            </p>
            <p>
              Revenue: ${movie.revenue}
            </p>
            <Button 
              variant="contained" 
              color="primary" 
              href="#">
               sth
            </Button>
          </div>
        </Grid>
        <CardsGrid xsValue={3} similarMovies={similarMovies}></CardsGrid> 
      </Grid>
    </>
  );
}

export default MovieContent;