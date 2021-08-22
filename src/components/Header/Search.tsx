import { useContext, useEffect } from 'react';
import {OutlinedInput} from '@material-ui/core';
import './Header.scss';
import { MoviesContext } from "../../services/context";
import { fetchSearchedMovie, fetchMovies } from "../../services/movies.service";
import { useHistory } from 'react-router-dom';
import { RootState } from '../../reducer';
import { Dispatch } from "redux";
import { useSelector, useDispatch } from 'react-redux';
import { isMoviePageOpened } from '../../actions';

const Search = (props: any) => {
  
  const { updateMovies, searchedMovie, setSearchedMovie } = useContext(MoviesContext);
  const dispatch: Dispatch<any> = useDispatch();
  let history = useHistory();

  const isMovieOpened = useSelector(
    (state: RootState) => state.isMoviePageOpened
  );
  
  const fetchMoviesList = (event: any) => {
    const searchedMovieValue = event.target.value;
    setSearchedMovie(searchedMovieValue);

    if (isMovieOpened === true) {
      dispatch(isMoviePageOpened(false));
      history.push("/");
    }
  }

  const handleKeyPress = (event: any) => {
    if (event.keyCode === 13) {
      fetchMoviesList(event);
    }
  }

  useEffect(()=>{
    if (searchedMovie) {
      fetchSearchedMovie(searchedMovie)
        .then((res) => updateMovies(res))
        .catch(() => updateMovies([]));
    } else {
      fetchMovies('1')
        .then((res) => updateMovies(res))
        .catch(() => updateMovies([]));
    }
  }, [searchedMovie, updateMovies]);

  return (
    <>
      <OutlinedInput 
          color="secondary" 
          className="seach-field" 
          type="string"  
          onBlur={fetchMoviesList} 
          onKeyDown={handleKeyPress}
          placeholder="Search" 
          />
    </>
  );
}

export default Search;