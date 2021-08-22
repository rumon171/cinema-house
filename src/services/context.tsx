import React from "react";
import { Movie } from "./movies.service";

export const MoviesContext = React.createContext<{
    movies: Movie[];
    updateMovies: Function;
    searchedMovie: string;
    setSearchedMovie: (value: string) => void;
    moviesPage: number;
    setMoviesPage: (value: number) => void;
  }>({
    movies: [],
    updateMovies: Function,
    searchedMovie: '',
    setSearchedMovie: () => {},
    moviesPage: 1,
    setMoviesPage: () => {}
  });
