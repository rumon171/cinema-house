import { useEffect } from "react";
import './App.scss';
import HomePage from './components/Pages/HomePage';
import { fetchMovies } from "./services/movies.service";
import MoviePage from './components/Pages/MoviePage';
import { BrowserRouter } from 'react-router-dom';
import { Route } from 'react-router-dom';
import { Switch } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addHomePageMovies } from './actions';

function App() {
  window.onbeforeunload = function () {
    window.scrollTo(0, 0);
  }

  const dispatch = useDispatch();

  useEffect(() => {
    fetchMovies('1')
      .then(movies => dispatch(addHomePageMovies(movies)))
      .catch(() => dispatch(addHomePageMovies([])));
    // eslint-disable-next-line react-hooks/exhaustive-deps
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