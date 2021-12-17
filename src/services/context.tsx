import React from 'react';
import { Movie } from './movies.service';

export const MoviesContext = React.createContext<{
  movies: Movie[];
  // eslint-disable-next-line @typescript-eslint/ban-types
  updateMovies: Function;
}>({
  movies: [],
  updateMovies: Function,
});
