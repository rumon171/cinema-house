import React, { useState, useContext } from 'react';
import {OutlinedInput} from '@material-ui/core';
import './Header.css';
import { MoviesContext } from "../../services/context";
import { fetchSearchedMovie, fetchMovies } from "../../services/movies.service";

const Search = (props: any) => {

  const { movies, updateMovies } = useContext(MoviesContext); 

  const [insertedTitle, setInsertedTitle] = useState<string>('');
  
  const fetchMoviesList = () => {
    if (insertedTitle) {
      fetchSearchedMovie(insertedTitle)
        .then((res) => updateMovies(res))
        .catch(() => updateMovies([]));

      console.log('CURRENT MOVIES ', movies);


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
          onChange={({ target: { value } }) => setInsertedTitle(value)} 
          onBlur={fetchMoviesList} 
          onKeyDown={ (e) => handleKeyPress(e) }
          placeholder="Search" 
          defaultValue={insertedTitle}
          />
    </>
  );
}

export default Search;