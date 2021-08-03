import { useContext } from 'react';
import Topbar from '../Header/Topbar';
import MovieContent from '../Pages/MovieContent';
import { MoviesContext } from "../../services/context";
import './Pages.scss';

const MoviePage = (props: any) => {

  const { updateMovies, searchedMovie, setSearchedMovie } = useContext(MoviesContext); 

  return (
    <>
      <Topbar></Topbar>
      {searchedMovie === '' ? <MovieContent></MovieContent> : <button>ALTERN</button>}
    </>
  );
}

export default MoviePage;

//{isLoggedIn ? <button>Logout</button> : <button>Login</button>}