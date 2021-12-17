import React, { useEffect } from "react";
import './App.scss';
import HomePage from './components/Pages/HomePage';
import { fetchMovies } from "./services/movies.service";
import MoviePage from './components/Pages/MoviePage';
import { BrowserRouter } from 'react-router-dom';
import { Route } from 'react-router-dom';
import { Switch } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { showMoviesAtHomePage } from './actions';

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
function App() {

  window.onbeforeunload = function () {
  window.scrollTo(0, 0);
  }

  const dispatch = useDispatch();

  useEffect(() => {
    fetchMovies('1')
      .then(movies => dispatch(showMoviesAtHomePage(movies)))
      .catch(() => dispatch(showMoviesAtHomePage([])));
  }, []);

  return (
    <div className="App">
      <div className="container typography-base ">
        <BrowserRouter>
          <Switch>
            <Route path="/movie/:movieid" >
              <MoviePage />
            </Route>
            <Route path="/" >
              <HomePage></HomePage>           
            </Route>
          </Switch>
        </BrowserRouter>
      </div>
    </div>
  );
}
export default App;