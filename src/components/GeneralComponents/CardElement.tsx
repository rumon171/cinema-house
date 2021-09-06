import { 
    changeSelectedMovie, 
    isMoviePageOpened
   } from '../../actions';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import { Grid } from '@material-ui/core';
import '../../App.scss';
import './Catalog.scss';
import noImage from '../../images/no-image-available.png';
import { NavLink } from 'react-router-dom';
import { Movie } from "../../services/movies.service";
import { useDispatch } from 'react-redux';
const posterBaseUrl = "https://image.tmdb.org/t/p/w300";

interface Props {
    isArrayMinLength: number;
    element: Movie;
  }

const CardElement: React.FC<Props> = (
    {
        isArrayMinLength,
        element,
    }: Props) => {

    const dispatch = useDispatch();

    const SetSelectedMovieId = (id: number) => {
        dispatch(isMoviePageOpened(true));
        dispatch(changeSelectedMovie(id));
    }

  return (
    <div >
        <Grid item xs={isArrayMinLength ? 6 : 12} sm={isArrayMinLength ? 4 : 12} md={isArrayMinLength ? 3 : 12} lg={isArrayMinLength ? 2 : 6} key={element.id}>
        <NavLink to={'/movie/' + element.id}>
            <div className="card-container" onClick={() => SetSelectedMovieId(element.id)} >
            <img
                className="card-poster"
                alt={"Poster of " + element.title}
                src={element.poster_path ? (element.poster_path.includes('.jpg') ? posterBaseUrl + element.poster_path : noImage) : noImage}
                title={element.title}
            />
            <div className="card-details">
                <div className="title">
                <FavoriteBorderIcon />
                </div>
                <div className="details">
                {element.vote_average}
                </div>
            </div>
            </div>
        </NavLink>
        </Grid>
    </div>
  );
}

export default CardElement;