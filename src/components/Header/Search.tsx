import React, { useState, useContext, useEffect } from 'react';
import {OutlinedInput} from '@material-ui/core';
import './Header.css';
import { MoviesContext } from "../../services/context";
import { fetchSearchedMovie } from "../../services/movies.service";

const Search = (props: any) => {

  const { updateMovies } = useContext(MoviesContext); 

  const [insertedTitle, setInsertedTitle] = useState<string>('');

  const handleKeyPress = (e: any) => {
    if (e.keyCode === 13) {
      if (insertedTitle) {
        fetchSearchedMovie(insertedTitle)
          .then((res) => updateMovies(res))
          .catch(() => updateMovies([]));
      }
    }
  }

  const fetchByEnteredTitle = () => {
    if (insertedTitle) {
      fetchSearchedMovie(insertedTitle)
        .then((res) => updateMovies(res))
        .catch(() => updateMovies([]));
    }
  }

  return (
    <>
        <OutlinedInput 
            color="secondary" 
            className="seach-field" 
            type="string" 
            onChange={({ target: { value } }) => setInsertedTitle(value)} 
            onBlur={fetchByEnteredTitle} 
            onKeyDown={ (e) => handleKeyPress(e) }
            placeholder="Search" 
            defaultValue={insertedTitle}
            />
    </>
  );
}

export default Search;