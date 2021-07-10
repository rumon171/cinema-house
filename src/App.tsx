import React, { useState, useEffect } from "react";
import './App.css';
import BaseContainer from './components/Container/BaseContainer';
import { Movie, fetchMovies } from "./services/movies.service";
import { MoviesContext } from "./services/context";

var Router = require("react-router-dom").BrowserRouter;
var Route = require("react-router-dom").Route;
var Switch = require("react-router-dom").Switch;
var NavLink = require("react-router-dom").NavLink;

function App() {
  useEffect(() => {
    fetchMovies()
      .then(setMovies)
      .catch(() => setMovies([]));
  }, []);

  const [movies, setMovies] = useState<Movie[]>([]);

  return (
    <Router>
      <MoviesContext.Provider value={{ movies }}>
        <div className="App">
          <div className="container">

            <BaseContainer>
            <NavLink 
      to="/contact" 
      activeClassName="selected">
      Contact  dfsdfsdfsdfsdfsdf
</NavLink>
            </BaseContainer>           
          </div>
        </div>
      </MoviesContext.Provider>

      <Switch>
          <Route path="/contact">

          </Route>
          <Route path="/">

          </Route>
      </Switch>
    </Router>
  );
}

export default App;