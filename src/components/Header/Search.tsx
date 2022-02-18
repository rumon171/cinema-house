import React from 'react';
import { useEffect, useState } from 'react';
import { OutlinedInput } from '@material-ui/core';
import { fetchSearchedMovies, fetchAllMovies } from '../../services/movies.service';
import { useNavigate } from 'react-router-dom';
import { RootState } from '../../reducer';
import { useSelector, useDispatch } from 'react-redux';
import { changeSearchedMovie, showMoviesAtHomePage } from '../../actions';
import useStyles from './HeaderTopbar.styles';

const Search: React.FC = () => {
    const [searchValue, setSearchValue] = useState<string>('');

    const searchedMovie = useSelector((state: RootState) => state.searchedMovie);
    const isMovieOpened = useSelector((state: RootState) => state.isMoviePageOpened);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const classes = useStyles();

    const fetchMoviesList = (searchedMovieValue: string) => {
        dispatch(changeSearchedMovie(searchedMovieValue));
        window.scrollTo(0, 0);

        if (isMovieOpened === true) {
            navigate('/');
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
                .then(res => dispatch(showMoviesAtHomePage(res)))
                .catch(() => dispatch(showMoviesAtHomePage([])));
        } else {
            fetchAllMovies('1')
                .then(res => dispatch(showMoviesAtHomePage(res)))
                .catch(() => dispatch(showMoviesAtHomePage([])));
        }
    }, [searchedMovie]);

    return (
        <>
            <OutlinedInput
                color="secondary"
                className={classes.searchField}
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
