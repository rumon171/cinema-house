import React from "react";
import {AppBar, Toolbar} from '@material-ui/core';
import './Header.scss';
import Search from './Search';
import { NavLink } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { isMoviePageOpened, changeSearchedMovie } from '../../actions';

const Topbar: React.FunctionComponent<any> = () => {

  const dispatch = useDispatch();

  const handleHomePageLink = () => {
    dispatch(changeSearchedMovie(''));
    dispatch(isMoviePageOpened(false));
        window.scrollTo(0, 0);
  }

  return (
    <>
      <AppBar>
        <Toolbar className="top-bar">
          <NavLink to={'/'} onClick={handleHomePageLink}>
            <h1 className="top-bar-title">
              MoviesApp
            </h1>
          </NavLink>
          <Search />
        </Toolbar>
      </AppBar>
    </>
  );
}

export default Topbar;