import { useContext } from 'react';
import {OutlinedInput} from '@material-ui/core';
import './Header.scss';
import { MoviesContext } from "../../services/context";
import { fetchSearchedMovie, fetchMovies } from "../../services/movies.service";

const Search = (props: any) => {

  const { updateMovies, searchedMovie, setSearchedMovie } = useContext(MoviesContext); 

  const fetchMoviesList = () => {
    if (searchedMovie) {
      fetchSearchedMovie(searchedMovie)
        .then((res) => updateMovies(res))
        .catch(() => updateMovies([]));

    } else {
      fetchMovies()
        .then((res) => updateMovies(res))
        .catch(() => updateMovies([]));
    }
  }

  const handleKeyPress = (e: any) => {
    if (e.keyCode === 13) {
      fetchMoviesList();
    }
  }
 
  return (
    <>
      <OutlinedInput 
          color="secondary" 
          className="seach-field" 
          type="string" 
          onChange={({ target: { value } }) => setSearchedMovie(value)} 
          onBlur={fetchMoviesList} 
          onKeyDown={ (e) => handleKeyPress(e) }
          placeholder="Search" 
          defaultValue={searchedMovie}
          />
    </>
  );
}

export default Search;