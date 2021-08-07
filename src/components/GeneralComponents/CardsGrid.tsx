import{ useContext } from "react";
import {Card, Grid, CardActionArea, CardActions, CardMedia, Button} from '@material-ui/core';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import { MoviesContext } from "../../services/context";
import noImage from '../../images/no-image-available.png';

const posterBaseUrl = "https://image.tmdb.org/t/p/w300";
const NavLink = require("react-router-dom").NavLink;

const CardsGrid = () =>  {
  const { movies } = useContext(MoviesContext);
  const cards = movies;

  const { setSelectedMovie, setIsMoviePageFirstTimeOpened } = useContext(MoviesContext);  

  const SetSelectedMovieId = (id: number) => {
    setIsMoviePageFirstTimeOpened(true);
    setSelectedMovie(id);
  }

  return (
    <div >
      <Grid container spacing={1}>
      { 
        cards.length > 0 &&
          cards.map((card) => (
            <Grid item xs={4} sm={3} md={2} lg={1} key={card.id}>
              <NavLink to={"movie/" + card.id}>
                <Card className="card-list" onClick={() => SetSelectedMovieId(card.id)} >
                  <CardActionArea>
                    <CardMedia
                      component="img"
                      alt={"Poster of " + card.title}
                      image={card.poster_path ? posterBaseUrl + card.poster_path : noImage}
                      title={card.title}
                    />
                  </CardActionArea>
                  <CardActions>
                    <Button size="small" color="primary">
                      <FavoriteBorderIcon />
                    </Button>
                    <Button size="small" color="primary">
                      {card.vote_average}
                    </Button>
                  </CardActions>
                </Card>
              </NavLink>
            </Grid>
          ))
      }
      </Grid>
    </div>
  );
}

export default CardsGrid;