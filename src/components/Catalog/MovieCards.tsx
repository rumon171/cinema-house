import{ useContext } from "react";
import {Card, Grid, CardActionArea, CardActions, CardMedia, Button} from '@material-ui/core';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import { MoviesContext } from "../../services/context";
import './Catalog.css';

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
                    image={movie.picture}
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
        ))}
      </Grid>
    </div>
  );
}

export default MovieCards;
