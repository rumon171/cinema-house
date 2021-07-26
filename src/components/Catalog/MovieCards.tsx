import{ useContext } from "react";
import {Card, Grid, CardActionArea, CardActions, CardMedia, Button} from '@material-ui/core';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import { MoviesContext } from "../../services/context";
import './Catalog.css';
import noImage from '../../images/no-image-available.png';

const posterBaseUrl = "https://image.tmdb.org/t/p/w300";
const NavLink = require("react-router-dom").NavLink;

const MovieCards = () =>  {
  const { movies } = useContext(MoviesContext);  

  const { setSelectedMovie } = useContext(MoviesContext);  

  const SetSelectedMovieId = (id: number) => {
    setSelectedMovie(id);
  }

  return (
    <div >
      <Grid container spacing={1} className="container-content">
        {movies.map((movie) => (
          <Grid item xs={12} sm={6} md={3} lg={2} key={movie.id}>
            <NavLink to={"movie/" + movie.id}>
              <Card className="card-list" onClick={ () => SetSelectedMovieId(movie.id)} >
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
                    {movie.poster_path}
                  </Button>
                </CardActions>
              </Card>
            </NavLink>
          </Grid>
        ))}
      </Grid>
    </div>
  );
}

export default MovieCards;
