import React from "react";
import { Movie } from "./movies.service";

export const MoviesContext = React.createContext<{
    movies: Movie[];
    selectedMovie: number;
   // updateMovies: Function;
  }>({
    movies: [],
    selectedMovie: 0,
   // updateMovies: Function,
  });
