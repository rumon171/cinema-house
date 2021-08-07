import {useState, useEffect, useContext} from "react";
import { fetchSelectedMovie } from "../../services/movies.service";
import {Grid, Card, CardMedia, Button} from '@material-ui/core';
import { MoviesContext } from "../../services/context";
import ItemsGrid from '../GeneralComponents/ItemsGrid';
import './Pages.scss';
import noImage from '../../images/no-image-available.png';
const posterBaseUrl = "https://image.tmdb.org/t/p/w300";
interface Genre {
  id: number;
  name: string;
}
interface Movie {
  id: number;
  title: string;
  vote_average: number;
  overview: string;
  poster_path?: string;
  release_date: string;
  budget: number;
  revenue: number;
  genres: Genre[];
}

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

  useEffect(() => {
      const callAPI = async () => {  
        const fetchedMovieInfo = await fetchSelectedMovie(selectedMovie !== 0 ? selectedMovie : Number(movieIdFromUrl));
        setMovie(fetchedMovieInfo);
        if (fetchedMovieInfo.poster_path !== null) {
          setMovieImg(posterBaseUrl+fetchedMovieInfo.poster_path);
        }
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
              {movie.release_date}
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
        <Grid item xs={12}>
          <ItemsGrid></ItemsGrid> 
        </Grid>
      </Grid>
    </>
  );
}

export default MovieContent;