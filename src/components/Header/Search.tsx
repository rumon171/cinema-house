import React, { useState, useContext, useEffect } from 'react';
import {OutlinedInput} from '@material-ui/core';
import './Header.css';
import { MoviesContext } from "../../services/context";
import { fetchSearchedMovie } from "../../services/movies.service";

const Search = (props: any) => {

  const { movies, updateMovies } = useContext(MoviesContext); 

  const [insertedTitle, setInsertedTitle] = useState<string>('');

  useEffect(() => {
    /*
    const callAPI = async () => {
    const fetchedMovieInfo = await fetchSearchedMovie(insertedTitle);
  // console.log('fetchedMovieInfo ', fetchedMovieInfo);
  // updateMovies(fetchedMovieInfo);
  }

  callAPI();
  */

  if (insertedTitle) {
    console.log("AAAAA", insertedTitle);

    fetchSearchedMovie(insertedTitle)
      .then((res) => console.log("RES ", res))
     // .then(updateMovies(insertedTitle))
     // .catch(() => updateMovies([]));
  }

  }, [insertedTitle]);

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