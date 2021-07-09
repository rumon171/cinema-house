import React, { useContext } from "react";
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import Typography from '@material-ui/core/Typography';
import './Catalog.css';
import { MoviesContext } from "../../services/context";
import Grid from '@material-ui/core/Grid';
import PosterImg from '.././whiplash.jpeg';

const MovieCards = () =>  {
  const { movies } = useContext(MoviesContext);
  
  const ShowValues = () => {
    console.log('passedValues ', movies);
  }

  return (
    <div >
      <Grid container spacing={0}>
      {movies.map((movie) => (
        <Grid item xs={6} sm={3}>
          <Card className="card">
            <CardActionArea>
              <CardMedia
                component="img"
                alt="whiplash poster"
                height="140"
                image={PosterImg}
                title="Whiplash poster"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                 {movie.title}
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
              <Button size="small" color="primary">
                <FavoriteBorderIcon />
              </Button>
              <Button size="small" color="primary" onClick={ShowValues}>
                {movie.rating}
              </Button>
            </CardActions>
          </Card>
        </Grid>
      ))}
      </Grid>
    </div>
  );
}

export default MovieCards;