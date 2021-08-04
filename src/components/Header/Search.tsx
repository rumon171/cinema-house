import { useContext, useEffect } from 'react';
import {OutlinedInput} from '@material-ui/core';
import './Header.scss';
import { MoviesContext } from "../../services/context";
import { fetchSearchedMovie, fetchMovies } from "../../services/movies.service";
import { useHistory } from 'react-router-dom';

const Search = (props: any) => {
  
  const { updateMovies, searchedMovie, setSearchedMovie, selectedMovie } = useContext(MoviesContext);

  let history = useHistory();
  
  const fetchMoviesList = (event: any) => {
    const searchedMovieValue = event.target.value;
    setSearchedMovie(searchedMovieValue);
  }

  const handleKeyPress = (event: any) => {
    if (event.keyCode === 13) {
      fetchMoviesList(event);
    }
  }

  useEffect(()=>{
    if (selectedMovie !== 0) {
      console.log('HISTORY OBJECT ', history);
      console.log('selectedMovie ', selectedMovie);
      //history.push("/");
    }

    if (searchedMovie) {
      fetchSearchedMovie(searchedMovie)
        .then((res) => updateMovies(res))
        .catch(() => updateMovies([]));
    } else {
      fetchMovies()
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
          defaultValue={searchedMovie}
          />
    </>
  );
}

export default Search;