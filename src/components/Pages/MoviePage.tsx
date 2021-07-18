import {useState, useEffect} from "react";
import Topbar from '../Header/Topbar';
import { fetchMovie } from "../../services/movies.service";
import {Grid, Card, CardMedia, Button, DialogTitle} from '@material-ui/core';
import noImage from '../../images/no-image-available.png';
const posterBaseUrl = "https://image.tmdb.org/t/p/w300";

interface Movie {
  id: number;
  title: string;
  vote_average: number;
  overview: string;
  poster_path?: string;
  release_date: string;
}

const MoviePage = (props: any) => {

const [movie, setMovie] = useState<Movie>(
  {
    id: 0,
    title: '',
    vote_average: 0,
    overview: '',
    poster_path: noImage,
    release_date: '', 
  }
);

const [movieImg, setMovieImg] = useState<string>(noImage);
const currentMovieId = window.location.pathname.split('/')[2];

useEffect(() => {
 
  const callAPI = async () => {
    const fetchedMovieInfo = await fetchMovie(Number(currentMovieId));
    setMovie(fetchedMovieInfo);
    setMovieImg(posterBaseUrl+fetchedMovieInfo.poster_path);
    console.log('fetchedMovieInfo.date ', fetchedMovieInfo.date);
  }
  
  callAPI();
}, [currentMovieId]);
 
  return (
    <>
      <Topbar></Topbar>
      <Grid container spacing={3}>
        <Grid item xs={6} sm={3}>
          <Card className="card">
            <CardMedia
              component="img"
              alt={"Poster of " + movie.title}
              image={movieImg}
              title={movie.title}
            />
          </Card>
        </Grid>
        <Grid item xs={6} sm={9}>
          <DialogTitle disableTypography>
            {movie.title}
          </DialogTitle>
          {movie.vote_average}
          {movie.release_date}
          {movie.overview}
          <Button 
            variant="contained" 
            color="primary" 
            href="#contained-buttons">
            sth
          </Button>
        </Grid>
        <Grid item xs={12}>
          CAST HERE (carrousel to scroll horiz)
        </Grid>
      </Grid>
    </>
  );
}

export default MoviePage;