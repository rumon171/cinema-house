import{ useContext } from "react";
import { Card, Grid, CardActionArea, CardActions, CardMedia, Button } from '@material-ui/core';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import { MoviesContext } from "../../services/context";
import { Movie } from "../../services/movies.service";
import { Dispatch } from "redux"
import { useDispatch } from 'react-redux';
import { changeSelectedMovie } from '../../actions';
import noImage from '../../images/no-image-available.png';

const posterBaseUrl = "https://image.tmdb.org/t/p/w300";
const NavLink = require("react-router-dom").NavLink;

interface Props {
  xsValue: number;
  similarMovies: Movie[];
}

const CardsGrid: React.FC<Props> = (
  {
    similarMovies,
  }: Props) =>{

  const cards = similarMovies;

  const { setIsMoviePageFirstTimeOpened } = useContext(MoviesContext);
  const dispatch: Dispatch<any> = useDispatch();

  const SetSelectedMovieId = (id: number) => {
    setIsMoviePageFirstTimeOpened(true);
    dispatch(changeSelectedMovie(id));
  }

  return (
    <div >
      <Grid container spacing={1}>
      { 
        cards.length > 0 &&
          cards.map((card) => (
            <Grid item xs={3} md={1} key={card.id}>
              <NavLink to={"/movie/" + card.id}>
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