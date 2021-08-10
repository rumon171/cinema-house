import {AppBar, Toolbar} from '@material-ui/core';
import './Header.scss';
import Search from './Search';
import { NavLink } from 'react-router-dom';

const Topbar = (props: any) => {
  return (
    <>
      <AppBar>
        <Toolbar className="top-bar">
          <NavLink to={'/'}>
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