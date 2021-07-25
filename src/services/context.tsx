import React from "react";
import { Movie } from "./movies.service";

export const MoviesContext = React.createContext<{
    movies: Movie[];
    updateMovies: Function;
    selectedMovie: number;
    setSelectedMovie: (value: number) => void;
  }>({
    movies: [],
    updateMovies: Function,
    selectedMovie: 0,
    setSelectedMovie: () => {},
  });
