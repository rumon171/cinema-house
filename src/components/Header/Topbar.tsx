import {AppBar, Toolbar} from '@material-ui/core';
import './Header.scss';
import Search from './Search';

const Topbar = (props: any) => {
  return (
    <>
      <AppBar>
        <Toolbar className="top-bar ">
          <h1 className="top-bar-title">
            MoviesApp
          </h1>
          <Search />
        </Toolbar>
      </AppBar>
    </>
  );
}

export default Topbar;