import { useEffect } from 'react';
import {OutlinedInput} from '@material-ui/core';
import './Header.scss';
import { fetchSearchedMovie, fetchMovies } from "../../services/movies.service";
import { useHistory } from 'react-router-dom';
import { RootState } from '../../reducer';
import { Dispatch } from "redux";
import { useSelector, useDispatch } from 'react-redux';
import { isMoviePageOpened, changeSearchedMovie, addHomePageMovies } from '../../actions';

const Search = (props: any) => {
  const searchedMovie = useSelector(
    (state: RootState) => state.searchedMovie
  );
  const isMovieOpened = useSelector(
    (state: RootState) => state.isMoviePageOpened
  );
  const dispatch: Dispatch<any> = useDispatch();
  let history = useHistory();
  
  const fetchMoviesList = (event: any) => {
    const searchedMovieValue = event.target.value;
    dispatch(changeSearchedMovie(searchedMovieValue));
    window.scrollTo(0, 0);

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
        .then((res) => dispatch(addHomePageMovies(res)))
        .catch(() => dispatch(addHomePageMovies([])));
    } else {
      fetchMovies('1')
        .then((res) => dispatch(addHomePageMovies(res)))
        .catch(() => dispatch(addHomePageMovies([])));
    }
     // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchedMovie]);
  
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