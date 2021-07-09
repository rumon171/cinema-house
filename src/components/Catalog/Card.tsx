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
import { MoviesContext } from "../.././services/context";
import PosterImg from '.././whiplash.jpeg';

const MovieCard = () =>  {
  const { movies } = useContext(MoviesContext);
  
  const ShowValues = () => {
    console.log('passedValues ', movies);
  }

  return (
    <div >
      {movies.map((movie) => (
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
              Whiplsh
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Button size="small" color="primary">
            <FavoriteBorderIcon />
          </Button>
          <Button size="small" color="primary" onClick={ShowValues}>
            8.5
          </Button>
        </CardActions>
      </Card>
      ))}
    </div>
  );
}

export default MovieCard;
  
/*
return (
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
            Whiplsh
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          <FavoriteBorderIcon />
        </Button>
        <Button size="small" color="primary" onClick={ShowValues}>
          8.5
        </Button>
      </CardActions>
    </Card>
  );
}

export default MovieCard;
*/