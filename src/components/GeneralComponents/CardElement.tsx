import { 
    changeSelectedMovie, 
    isMoviePageOpened
   } from '../../actions';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import { Grid } from '@material-ui/core';
import '../../App.scss';
import '../Catalog/Catalog.scss';
import noImage from '../../images/no-image-available.png';
import { NavLink } from 'react-router-dom';
import { Movie } from "../../services/movies.service";
import { useDispatch } from 'react-redux';
const posterBaseUrl = "https://image.tmdb.org/t/p/w300";

interface Props {
    card: Movie;
  }

const Cardcard: React.FC<Props> = (
    {
        card,
    }: Props) => {

    const dispatch = useDispatch();

    const SetSelectedMovieId = (id: number) => {
        dispatch(isMoviePageOpened(true));
        dispatch(changeSelectedMovie(id));
    }

  return (
    <div>
        <Grid item 
            key={card.id}>
        <NavLink to={'/movie/' + card.id}>
            <div className="card-container" onClick={() => SetSelectedMovieId(card.id)} >
            <img
                className="card-poster"
                alt={"Poster of " + card.title}
                src={card.poster_path ? (card.poster_path.includes('.jpg') ? posterBaseUrl + card.poster_path : noImage) : noImage}
                title={card.title}
            />
            <div className="card-details">
                <div className="title">
                <FavoriteBorderIcon />
                </div>
                <div className="details">
                {card.vote_average}
                </div>
            </div>
            </div>
        </NavLink>
        </Grid>
    </div>
  );
}

export default Cardcard;