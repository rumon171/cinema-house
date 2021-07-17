import React from "react";
import Topbar from '../Header/Topbar';

const MoviePage = (props: any) => {
  const currentMovieId = window.location.pathname.split('/')[2];

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