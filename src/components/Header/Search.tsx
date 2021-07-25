import React, { useState, useContext, useEffect } from 'react';
import {OutlinedInput} from '@material-ui/core';
import './Header.css';
import { MoviesContext } from "../../services/context";
import { fetchSearchedMovie } from "../../services/movies.service";
import { resolveTripleslashReference } from 'typescript';

const Search = (props: any) => {

  const { movies, updateMovies } = useContext(MoviesContext); 

  const [insertedTitle, setInsertedTitle] = useState<string>('');

  useEffect(() => {

    if (insertedTitle) {
      //INFINITE LOOP HERE
      fetchSearchedMovie(insertedTitle)
      .then((res) => updateMovies(res))
      .catch(() => updateMovies([]));
      //.then((res) => console.log("RES ", res))
    }

    console.log('movies ', movies);

  }, [insertedTitle, updateMovies, movies]);

  return (
    <>
        <OutlinedInput 
            color="secondary" 
            className="seach-field" 
            type="string" 
            onChange={({ target: { value } }) => setInsertedTitle(value)} 
            placeholder="Search" 
            value={insertedTitle}
            />
    </>
  );
}

export default Search;