import React, {useState, useEffect} from "react";
import Topbar from '../Header/Topbar';
//import { Movie } from "../../services/movies.service";

import noImage from '../../images/no-image-available.png';

const movieApiBaseUrl = "https://api.themoviedb.org/3";
const posterBaseUrl = "https://image.tmdb.org/t/p/w300";

interface Movie {
  id: number;
  title: string;
  vote_average: number;
  overview: string;
  poster_path?: string;
  date: string;
}

const MoviePage = (props: any) => {

  const [movie, setMovie] = useState<Movie>(
    {
      id: 0,
      title: '',
      vote_average: 0,
      overview: '',
      poster_path: noImage,
      date: '', 
    }
  );

  const currentMovieId = window.location.pathname.split('/')[2];

useEffect(() => {
  fetch(
    `${movieApiBaseUrl}/movie/${currentMovieId}?api_key=${process.env.REACT_APP_API_KEY}`
  )
    .then((res) => res.json())
    .then((body) => setMovie(body))
    .catch(() => {
        return {};
    });
}, [currentMovieId, movie]);

  return (
    <React.Fragment>
      <Topbar></Topbar>
        <div className={movie.title}>
          <div>
            {movie.title}
          </div>

          <div>
            {movie.poster_path}
          </div>
      </div>
    </React.Fragment>
  );
}

export default MoviePage;