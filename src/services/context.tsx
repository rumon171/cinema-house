import React from "react";
import { Movie } from "./movies.service";

/*
export const MoviesContext = React.createContext(
    [
        {
            title: 'Whiplash',
            rating: 8.5
        },
        {
            title: 'Memento',
            rating: 9.1
        }
    ]
);
*/


export const MoviesContext = React.createContext<{
    movies: Movie[];
   // updateMovies: Function;
  }>({
    movies: [],
   // updateMovies: Function,
  });
