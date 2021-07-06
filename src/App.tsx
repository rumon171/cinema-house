import React, { useState, useEffect } from "react";
import './App.css';
import BaseContainer from './components/Container/BaseContainer';
import { Movie } from "./services/movies.service";

function App() {
  useEffect(() => {
    //fetchMovies()
      //.then(setMovies)
      //.catch((_) => setMovies([]));
      setMovies(
        [
          {
            title: 'Whiplash',
            rating: 8.5
          },
          {
            title: 'Memento',
            rating: 9.1
          }
        ]
      );
  }, []);

  const [movies, setMovies] = useState<Movie[]>([]);

  return (
    <div className="App">
      <div className="container">
        <BaseContainer></BaseContainer>           
      </div>
    </div>
  );
}

export default App;