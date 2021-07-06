import React, { useState, useEffect } from "react";
import './App.css';
import BaseContainer from './components/Container/BaseContainer';
import { Movie } from "./services/movies.service";

const MoviesContext = React.createContext(
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
    <MoviesContext.Provider value={[
      {
        title: 'Whiplash',
        rating: 8.5
      },
      {
        title: 'Memento',
        rating: 9.1
      }
      ]}>
      <div className="App">
        <div className="container">
          <BaseContainer></BaseContainer>           
        </div>
      </div>
    </MoviesContext.Provider>
  );
}

export default App;