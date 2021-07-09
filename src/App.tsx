import React, { useState, useEffect } from "react";
import './App.css';
import BaseContainer from './components/Container/BaseContainer';
import { Movie, fetchMovies } from "./services/movies.service";
import { MoviesContext } from "./services/context";

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
          <BaseContainer></BaseContainer>           
        </div>
      </div>
    </MoviesContext.Provider>
  );
}

export default App;