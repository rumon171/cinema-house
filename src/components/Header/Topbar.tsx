import { useContext } from 'react';
import { MoviesContext } from "../../services/context";
import {AppBar, Toolbar} from '@material-ui/core';
import './Header.scss';
import Search from './Search';
import { NavLink } from 'react-router-dom';

const Topbar = (props: any) => {

  const { setSearchedMovie } = useContext(MoviesContext);

  const handleSearchedMovie = () => {
    setSearchedMovie('');
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