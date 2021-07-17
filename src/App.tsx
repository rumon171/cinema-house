import React, { useState, useEffect } from "react";
import './App.css';
import HomePage from './components/Pages/HomePage';
import { Movie, fetchMovies } from "./services/movies.service";
import { MoviesContext } from "./services/context";
import MoviePage from './components/Pages/MoviePage';

var Router = require("react-router-dom").BrowserRouter;
var Route = require("react-router-dom").Route;
var Switch = require("react-router-dom").Switch;

function App() {
  useEffect(() => {
    fetchMovies()
      .then(setMovies)
      .catch(() => setMovies([]));
  }, []);

  const [movies, setMovies] = useState<Movie[]>([]);

  return (
    <MoviesContext.Provider value={{ movies }}>
      <div className="App">
        <div className="container">
          <Router>
            <Switch>
              <Route path="/movie/:movieid" >
              <MoviePage />
              </Route>
              <Route path="/" >
                <HomePage></HomePage>           
              </Route>
            </Switch>
          </Router>
        </div>
      </div>
    </MoviesContext.Provider>
  );
}
export default App;