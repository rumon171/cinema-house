import React from "react";
import { Movie } from "./movies.service";

export const MoviesContext = React.createContext<{
    movies: Movie[];
    updateMovies: Function;
    selectedMovie: number;
    setSelectedMovie: (value: number) => void;
    searchedMovie: string;
    setSearchedMovie: (value: string) => void;
    isMoviePageFirstTimeOpened: boolean;
    setIsMoviePageFirstTimeOpened: (value: boolean) => void;
    loading: boolean;
    isFetching: boolean;
    setIsFetching: (value: boolean) => void;
  }>({
    movies: [],
    updateMovies: Function,
    selectedMovie: 0,
    setSelectedMovie: () => {},
    searchedMovie: '',
    setSearchedMovie: () => {},
    isMoviePageFirstTimeOpened: false,
    setIsMoviePageFirstTimeOpened: () => {},
    loading: true,
    isFetching: false,
    setIsFetching: () => {},
  });
