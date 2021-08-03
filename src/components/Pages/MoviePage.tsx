import { useContext } from 'react';
import Topbar from '../Header/Topbar';
import MovieContent from '../Pages/MovieContent';
import Catalog from '../Catalog/Catalog';
import { MoviesContext } from "../../services/context";
import './Pages.scss';

const MoviePage = (props: any) => {

  const { searchedMovie } = useContext(MoviesContext);

  return (
    <>
      <Topbar></Topbar>
      {searchedMovie === '' ? <MovieContent></MovieContent> : <Catalog></Catalog>}
    </>
  );
}

export default MoviePage;