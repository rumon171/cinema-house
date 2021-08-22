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
  const [searchedMovie, setSearchedMovie] = useState<string>('');
  const [moviesPage, setMoviesPage] = useState(1);

  useEffect(() => {
    fetchMovies('1')
      .then(updateMovies)
      .catch(() => updateMovies([]));
  }, []);
  
  return (
    <MoviesContext.Provider value={{ 
        movies, 
        updateMovies, 
        searchedMovie, 
        setSearchedMovie, 
        moviesPage,
        setMoviesPage
        }}>
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