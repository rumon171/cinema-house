import React from 'react';
import { AppBar, Toolbar } from '@material-ui/core';
import './Header.scss';
import Search from './Search';
import { NavLink } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { isMoviePageOpened, changeSearchedMovie } from '../../actions';
import PersonOutlineOutlinedIcon from '@material-ui/icons/PersonOutlineOutlined';
import useStyles from './Topbar.styles';

const Topbar: React.FC = () => {
  const dispatch = useDispatch();
  const classes = useStyles();

  const handleHomePageLink = () => {
    dispatch(changeSearchedMovie(''));
    dispatch(isMoviePageOpened(false));
    window.scrollTo(0, 0);
  };

  return (
    <>
      <AppBar>
        <Toolbar className={classes.topBar}>
          <NavLink to={'/'} onClick={handleHomePageLink}>
            <h1 className={classes.topBarTitle}>Cinema House</h1>
          </NavLink>
          <Search />
          <NavLink to={'/profile'}>
            <PersonOutlineOutlinedIcon />
          </NavLink>
        </Toolbar>
      </AppBar>
    </>
  );
};

export default Topbar;
