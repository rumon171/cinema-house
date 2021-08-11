import { useContext, useEffect } from 'react';
import {OutlinedInput} from '@material-ui/core';
import './Header.scss';
import { MoviesContext } from "../../services/context";
import { fetchSearchedMovie, fetchMovies } from "../../services/movies.service";
import { useHistory } from 'react-router-dom';

const Search = (props: any) => {
  
  const { updateMovies, searchedMovie, setSearchedMovie, isMoviePageFirstTimeOpened, setIsMoviePageFirstTimeOpened } = useContext(MoviesContext);

  let history = useHistory();
  
  const fetchMoviesList = (event: any) => {
    const searchedMovieValue = event.target.value;
    setSearchedMovie(searchedMovieValue);

    if (isMoviePageFirstTimeOpened === true) {
      setIsMoviePageFirstTimeOpened(false);
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
      fetchMovies('3')
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