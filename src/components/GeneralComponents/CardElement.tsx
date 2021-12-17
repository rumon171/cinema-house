import React from 'react';
import { changeSelectedMovie, isMoviePageOpened } from '../../actions';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import { Grid } from '@material-ui/core';
import '../../App.scss';
import '../Catalog/Catalog.scss';
import noImage from '../../images/no-image-available.png';
import { NavLink } from 'react-router-dom';
import { Movie } from '../../services/movies.service';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../reducer';
const posterBaseUrl = 'https://image.tmdb.org/t/p/w300';

interface Props {
  card: Movie;
}

const Cardcard: React.FC<Props> = ({ card }: Props) => {
  const dispatch = useDispatch();

  const SetSelectedMovieId = (id: number) => {
    dispatch(isMoviePageOpened(true));
    dispatch(changeSelectedMovie(id));
  };

  const searchedMovie = useSelector((state: RootState) => state.searchedMovie);

  //<div className={`card-container ${'card-container-when-search'}`} onClick={() => SetSelectedMovieId(card.id)} >
  return (
    <Grid item key={card.id}>
      <NavLink to={'/movie/' + card.id} className="trial">
        <div
          className={`card-container ${
            searchedMovie && 'card-container-when-search'
          }`}
          onClick={() => SetSelectedMovieId(card.id)}
        >
          <img
            className="card-poster"
            alt={'Poster of ' + card.title}
            src={
              card.poster_path
                ? card.poster_path.includes('.jpg')
                  ? posterBaseUrl + card.poster_path
                  : noImage
                : noImage
            }
            title={card.title}
          />
          <div className="card-details">
            <div className="title">
              <FavoriteBorderIcon />
            </div>
            <div className="details">{card.vote_average}</div>
          </div>
        </div>
      </NavLink>
    </Grid>
  );
};

export default Cardcard;
