//import { useContext, useEffect } from 'react';
import Topbar from '../Header/Topbar';
import MovieContent from '../Pages/MovieContent';
//import Catalog from '../Catalog/Catalog';
//import { MoviesContext } from "../../services/context";
import './Pages.scss';

const MoviePage = (props: any) => {

 // const { searchedMovie } = useContext(MoviesContext);
//      {searchedMovie === '' ? <MovieContent></MovieContent> : <Catalog></Catalog>}
  return (
    <>
      <Topbar></Topbar>
      <MovieContent></MovieContent>
    </>
  );
}

export default MoviePage;