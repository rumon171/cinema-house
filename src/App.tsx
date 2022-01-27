import React, { useEffect } from 'react';
import './App.scss';
import HomePage from './components/Containers/HomePage';
import { fetchMovies } from './services/movies.service';
import MoviePage from './components/Containers/MoviePage';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { showMoviesAtHomePage } from './actions';
import Profile from './components/Profile/Profile';
import useStyles from './App.styles';

function App() {
  window.onbeforeunload = function () {
    window.scrollTo(0, 0);
  };

  const dispatch = useDispatch();
  const classes = useStyles();

  useEffect(() => {
    fetchMovies('1')
      .then((movies) => dispatch(showMoviesAtHomePage(movies)))
      .catch(() => dispatch(showMoviesAtHomePage([])));
  }, []);

  return (
    <div className={classes.root}>
      <div className={classes.container}>
        <BrowserRouter>
          <Routes>
            <Route path="/profile" element={<Profile></Profile>} />
            <Route path="/movie/:movieid" element={<MoviePage />} />
            <Route path="/" element={<HomePage></HomePage>} />
          </Routes>
        </BrowserRouter>
      </div>
    </div>
  );
}
export default App;
