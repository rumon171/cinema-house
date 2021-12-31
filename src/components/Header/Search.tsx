import React from 'react';
import { useEffect, useState } from 'react';
import { OutlinedInput } from '@material-ui/core';
import './Header.scss';
import {
  fetchSearchedMovies,
  fetchMovies,
} from '../../services/movies.service';
import { useHistory } from 'react-router-dom';
import { RootState } from '../../reducer';
import { useSelector, useDispatch } from 'react-redux';
import {
  isMoviePageOpened,
  changeSearchedMovie,
  showMoviesAtHomePage,
} from '../../actions';

const Search: React.FC = () => {
  const [searchValue, setSearchValue] = useState<string>('');

  const searchedMovie = useSelector((state: RootState) => state.searchedMovie);
  const isMovieOpened = useSelector(
    (state: RootState) => state.isMoviePageOpened
  );
  const dispatch = useDispatch();
  const history = useHistory();

  const fetchMoviesList = (searchedMovieValue: string) => {
    dispatch(changeSearchedMovie(searchedMovieValue));
    window.scrollTo(0, 0);

    if (isMovieOpened === true) {
      dispatch(isMoviePageOpened(false)); // should this action be renamed?
      history.push('/');
    }
  };

  const handleKeyPress = (event: React.KeyboardEvent<HTMLInputElement>) => {
    const target = event.target as HTMLInputElement;

    if (event.keyCode === 13) {
      const searchedMovieValue = target.value;
      fetchMoviesList(searchedMovieValue);
    }
  };

  useEffect(() => {
    if (searchedMovie) {
      fetchSearchedMovies(searchedMovie)
        .then((res) => dispatch(showMoviesAtHomePage(res)))
        .catch(() => dispatch(showMoviesAtHomePage([])));
    } else {
      fetchMovies('1')
        .then((res) => dispatch(showMoviesAtHomePage(res)))
        .catch(() => dispatch(showMoviesAtHomePage([])));
    }
  }, [searchedMovie]);

  return (
    <>
      <OutlinedInput
        color="secondary"
        className="search-field"
        type="string"
        onBlur={({ target: { value } }) => fetchMoviesList(value)}
        onKeyDown={handleKeyPress}
        placeholder="Search"
        value={searchValue}
        onChange={({ target: { value } }) => setSearchValue(value)}
      />
    </>
  );
};

export default Search;
