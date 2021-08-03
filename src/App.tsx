import React, { useState, useEffect } from "react";
import './App.scss';
import HomePage from './components/Pages/HomePage';
import { Movie, fetchMovies } from "./services/movies.service";
import { MoviesContext } from "./services/context";
import MoviePage from './components/Pages/MoviePage';

const Router = require("react-router-dom").BrowserRouter;
const Route = require("react-router-dom").Route;
const Switch = require("react-router-dom").Switch;

function App() {
  useEffect(() => {
    fetchMovies()
      .then(updateMovies)
      .catch(() => updateMovies([]));
  }, []);

  const [movies, updateMovies] = useState<Movie[]>([]);
  const [selectedMovie, setSelectedMovie] = useState(0);
  const [searchedMovie, setSearchedMovie] = useState<string>('');
  
  return (
    <MoviesContext.Provider value={{ movies, updateMovies, selectedMovie, setSelectedMovie, searchedMovie, setSearchedMovie }}>
      <div className="App">
        <div className="container typography-base ">
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