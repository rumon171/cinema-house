import React from "react";
import { Movie } from "./movies.service";

export const MoviesContext = React.createContext<{
    movies: Movie[];
    updateMovies: Function;
    selectedMovie: number;
    setSelectedMovie: (value: number) => void;
    searchedMovie: string;
    setSearchedMovie: (value: string) => void;
    isMoviePageOpened: boolean;
    setIsMoviePageOpened: (value: boolean) => void;
  }>({
    movies: [],
    updateMovies: Function,
    selectedMovie: 0,
    setSelectedMovie: () => {},
    searchedMovie: '',
    setSearchedMovie: () => {},
    isMoviePageOpened: false,
    setIsMoviePageOpened: () => {},
  });
