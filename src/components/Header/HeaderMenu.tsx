import React from 'react';
import { useEffect, useState } from 'react';
import { OutlinedInput } from '@material-ui/core';
import { fetchSearchedMovies, fetchMovies } from '../../services/movies.service';
import { useNavigate } from 'react-router-dom';
import { RootState } from '../../reducer';
import { useSelector, useDispatch } from 'react-redux';
import { changeSearchedMovie, showMoviesAtHomePage } from '../../actions';

const HeaderMenu: React.FC = () => {
    return <>dsdsd</>;
};

export default HeaderMenu;
