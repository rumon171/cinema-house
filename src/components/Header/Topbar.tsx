import { useContext } from 'react';
import { MoviesContext } from "../../services/context";
import {AppBar, Toolbar} from '@material-ui/core';
import './Header.scss';
import Search from './Search';
import { NavLink } from 'react-router-dom';
import { Dispatch } from "redux";
import { useDispatch } from 'react-redux';
import { isMoviePageOpened } from '../../actions';

const Topbar = (props: any) => {

  const { setSearchedMovie } = useContext(MoviesContext);
  const dispatch: Dispatch<any> = useDispatch();

  const handleSearchedMovie = () => {
    setSearchedMovie('');
    dispatch(isMoviePageOpened(false));
  }

  return (
    <>
      <AppBar>
        <Toolbar className="top-bar">
          <NavLink to={'/'} onClick={handleSearchedMovie}>
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