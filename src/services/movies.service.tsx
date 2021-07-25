import noImage from '../images/no-image-available.png';

const movieApiBaseUrl = "https://api.themoviedb.org/3";
const posterBaseUrl = "https://image.tmdb.org/t/p/w300";
export interface Movie {
    id: number;
    title: string;
    rating: number;
    description: string;
    picture?: string;
    date: string;
  }

export async function fetchSelectedMovie (currentMovieId: number ) {
  return await fetch(
    `${movieApiBaseUrl}/movie/${currentMovieId}?api_key=${process.env.REACT_APP_API_KEY}`
  )
    .then((res) => res.json())
    .then((body) => {return body})
    .catch(() => {
        return {};
    });
}

export async function fetchSearchedMovie (enteredMovieTitle: string ) {
  // remove unecesary charancters from the string here
  // well i break down the string by getting rid of the characters like {, }, /, ", :, ect. splitting it into parts of an list array, but they are never the same parts, meaning i guess some movies return more info, ect, must be a plugin people are using or something to manipulate the string to their liking, maybe im just not getting it
    return await fetch(
      `${movieApiBaseUrl}/search/movie/?api_key=${process.env.REACT_APP_API_KEY}&query=${enteredMovieTitle}`
    )
      .then((res) => res.json())
      .then((body) => {return body.results})
      .catch(() => {
          return {};
      });
  }
  //https://api.themoviedb.org/3/search/movie?api_key=f13446aa3541ebd88cf65b91f6932c5b&query=the+avengers
  /*
  https://api.themoviedb.org/3/search/movie?api_key=###&query=bat
  https://api.themoviedb.org/3/search/movie?api_key=###&query=batm
  */
export async function fetchMovies(page = 4): Promise<Movie[]> {
   return await fetch(
     `${movieApiBaseUrl}/movie/popular?api_key=${process.env.REACT_APP_API_KEY}&page=${page}`
   )
     .then((res) => res.json())
     .then((res) => mapListResult(res.results))
     .catch(() => {
         return [];
     });
 }

// = movie has to be after const {} here
function mapListResult(res: any[]): Movie[] {
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