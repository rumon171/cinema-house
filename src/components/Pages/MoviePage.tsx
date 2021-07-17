import React, { useContext } from "react";
import Topbar from '../Header/Topbar';
import Container from '@material-ui/core/Container';
import { MoviesContext } from "../../services/context";

const MoviePage = (props: any) => {
  const { movies } = useContext(MoviesContext);

  return (
    <React.Fragment>
        <Topbar></Topbar>
        <div className="">
          MOVIE INFO HERE
        </div>
    </React.Fragment>
  );
}

export default MoviePage;