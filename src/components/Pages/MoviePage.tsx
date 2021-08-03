import { useContext, useEffect } from 'react';
import Topbar from '../Header/Topbar';
import MovieContent from '../Pages/MovieContent';
import Catalog from '../Catalog/Catalog';
import { MoviesContext } from "../../services/context";
import './Pages.scss';

const history = require("react-router-dom").useHistory;
// import { useHistory } from "react-router-dom";

const MoviePage = (props: any) => {

  useEffect(() => {
    console.log('history ', history);
  }, []);

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