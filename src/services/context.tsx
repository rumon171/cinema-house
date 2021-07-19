import React from "react";
import { Movie } from "./movies.service";

export const MoviesContext = React.createContext<{
    movies: Movie[];
    selectedMovie: number;
    setSelectedMovie: (value: number) => void;
   // updateMovies: Function;
  }>({
    movies: [],
    selectedMovie: 0,
    setSelectedMovie: () => {},
   // updateMovies: Function,
  });
