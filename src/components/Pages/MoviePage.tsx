import React, {useState, useEffect} from "react";
import Topbar from '../Header/Topbar';
//import { fetchMovie } from "../../services/movies.service";
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import noImage from '../../images/no-image-available.png';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';

const movieApiBaseUrl = "https://api.themoviedb.org/3";
const posterBaseUrl = "https://image.tmdb.org/t/p/w300";

interface Movie {
  id: number;
  title: string;
  vote_average: number;
  overview: string;
  poster_path?: string;
  date: string;
}

const MoviePage = (props: any) => {

  const [movie, setMovie] = useState<Movie>(
    {
      id: 0,
      title: '',
      vote_average: 0,
      overview: '',
      poster_path: noImage,
      date: '', 
    }
  );

const currentMovieId = window.location.pathname.split('/')[2];

useEffect(() => {

  /*
  const temp = fetchMovie(Number(currentMovieId));
  console.log(temp);
  setMovie(temp);

}, [currentMovieId]);
  */
  fetch(
    `${movieApiBaseUrl}/movie/${currentMovieId}?api_key=${process.env.REACT_APP_API_KEY}`
  )
    .then((res) => res.json())
    .then((body) => setMovie(body))
    .catch(() => {
        return {};
    });
}, [currentMovieId, movie]);

  return (
    <>
      <Topbar></Topbar>
      <Grid container spacing={3}>
        <Grid item xs={6} sm={3}>
          <Card className="card">
            <CardMedia
              component="img"
              alt={"Poster of " + movie.title}
              className="BeerListItem-img"
              image={posterBaseUrl + movie.poster_path}
              title={movie.title}
            />
          </Card>
        </Grid>
        <Grid item xs={6} sm={9}>
          <Paper>
            <Button variant="contained" color="primary" href="#contained-buttons">
              Link
            </Button>
          </Paper>
        </Grid>
        <Grid item xs={12}>
          <Paper>CAST HERE</Paper>
        </Grid>
      </Grid>
    </>
  );
}

export default MoviePage;