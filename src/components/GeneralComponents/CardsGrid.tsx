import{ useContext } from "react";
import {Card, Grid, CardActionArea, CardActions, CardMedia, Button} from '@material-ui/core';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import { MoviesContext } from "../../services/context";
import '../../App.scss';
//import './Catalog.scss';
import noImage from '../../images/no-image-available.png';
import loadingSpinner from '../../images/loading-spinner.gif';

const posterBaseUrl = "https://image.tmdb.org/t/p/w300";
const NavLink = require("react-router-dom").NavLink;

const CardsGrid = () =>  {
  const { movies, searchedMovie } = useContext(MoviesContext);
  const CardsArray = movies;

  const { setSelectedMovie, setIsMoviePageFirstTimeOpened } = useContext(MoviesContext);  

  const SetSelectedMovieId = (id: number) => {
    setIsMoviePageFirstTimeOpened(true);
    setSelectedMovie(id);
  }

  return (
    <div >
      <Grid container spacing={1} className="container-content">
        { 
        CardsArray.length > 0 
          ? 
          CardsArray.map((card) => (
            <Grid xs={12} sm={6} md={3} lg={2} key={card.id}>
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
          :
            searchedMovie ?
            <div className="">Try a different phrase...</div>
            :
            <CardMedia
            component="img"
            image={loadingSpinner}
            className="loading-spinner"
          />
        }
      </Grid>
    </div>
  );
}

export default CardsGrid;