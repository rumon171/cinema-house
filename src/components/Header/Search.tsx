import { useContext, useEffect } from 'react';
import {OutlinedInput} from '@material-ui/core';
import './Header.scss';
import { MoviesContext } from "../../services/context";
import { fetchSearchedMovie, fetchMovies } from "../../services/movies.service";
import { useHistory } from 'react-router-dom';
import { RootState } from '../../reducer';
import { Dispatch } from "redux";
import { useSelector, useDispatch } from 'react-redux';
import { 
  isMoviePageFirstTimeOpened
 } from '../../actions';
import { findAllByDisplayValue } from '@testing-library/react';

const Search = (props: any) => {
  
  const { updateMovies, searchedMovie, setSearchedMovie, isMoviePageFirstTimeOpened, setIsMoviePageFirstTimeOpened } = useContext(MoviesContext);
  const dispatch: Dispatch<any> = useDispatch();
  let history = useHistory();

  const isMovieFirstTimeOpened = useSelector(
    (state: RootState) => state.isMovieFirstTimeOpened
  );
  
  const fetchMoviesList = (event: any) => {
    const searchedMovieValue = event.target.value;
    setSearchedMovie(searchedMovieValue);

    if (isMovieFirstTimeOpened === true) {
      //setIsMoviePageFirstTimeOpened(false);
      // WHY I GET ERROR HERE?
     // dispatch(isMoviePageFirstTimeOpened(false));
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
      console.log('inside useEffect, searchedMovie ', searchedMovie);
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