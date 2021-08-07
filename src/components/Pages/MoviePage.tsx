import Topbar from '../Header/Topbar';
import MovieContent from '../Pages/MovieContent';
import './Pages.scss';

const MoviePage = (props: any) => {

  return (
    <>
      <Topbar></Topbar>
      <MovieContent></MovieContent>
    </>
  );
}

export default MoviePage;