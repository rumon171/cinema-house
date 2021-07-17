import React, {useState, useEffect} from "react";
import Topbar from '../Header/Topbar';
//import { Movie } from "../../services/movies.service";

import noImage from '../../images/no-image-available.png';

const movieApiBaseUrl = "https://api.themoviedb.org/3";
const posterBaseUrl = "https://image.tmdb.org/t/p/w300";

interface Movie {
  id: number;
  title: string;
  rating: number;
  description: string;
  picture?: string;
  date: string;
}

const MoviePage = (props: any) => {

  const [movie, setMovie] = useState<Movie>();

  const currentMovieId = window.location.pathname.split('/')[2];

//https://api.themoviedb.org/3/movie/75780?api_key=f13446aa3541ebd88cf65b91f6932c5b


useEffect(() => {

  fetch(
    `${movieApiBaseUrl}/movie/${currentMovieId}?api_key=${process.env.REACT_APP_API_KEY}`
  )
    .then((res) => res.json())
    .then((res) => res.results)
    .then((res) => console.log('res ', res))
    .catch(() => {
        return {};
    });


    console.log('movie ', movie);

}, [currentMovieId, movie]);

/*
function mapMovieResult(res: any): Movie {
  return res.map((movie) => {
    const {
      id,
      title,
      vote_average,
      overview,
      poster_path,
      date,
    } = movie;
    return {
      id: id,
      title: title,
      rating: vote_average,
      description: overview,
      picture: poster_path ? `${posterBaseUrl}${poster_path}` : noImage,
      date: date,
    };
  });
}
*/
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