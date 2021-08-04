import { useState, useEffect } from "react";
import './App.scss';
import HomePage from './components/Pages/HomePage';
import { Movie, fetchMovies } from "./services/movies.service";
import { MoviesContext } from "./services/context";
import MoviePage from './components/Pages/MoviePage';
import { BrowserRouter } from 'react-router-dom';
import { Route } from 'react-router-dom';
import { Switch } from 'react-router-dom';

function App() {
  const [movies, updateMovies] = useState<Movie[]>([]);
  const [selectedMovie, setSelectedMovie] = useState(0);
  const [searchedMovie, setSearchedMovie] = useState<string>('');
  const [isMoviePageFirstTimeOpened, setIsMoviePageFirstTimeOpened] = useState<boolean>(false);

  useEffect(() => {
    fetchMovies()
      .then(updateMovies)
      .catch(() => updateMovies([]));
  }, []);
  
  return (
    <MoviesContext.Provider value={{ movies, updateMovies, selectedMovie, setSelectedMovie, searchedMovie, setSearchedMovie, isMoviePageFirstTimeOpened, setIsMoviePageFirstTimeOpened }}>
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
    </MoviesContext.Provider>
  );
}
export default App;