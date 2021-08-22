import React from "react";
import { Movie } from "./movies.service";

export const MoviesContext = React.createContext<{
    movies: Movie[];
    updateMovies: Function;
    moviesPage: number;
    setMoviesPage: (value: number) => void;
  }>({
    movies: [],
    updateMovies: Function,
    moviesPage: 1,
    setMoviesPage: () => {}
  });
