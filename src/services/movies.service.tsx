import noImage from '../images/no-image-available.png';

const movieApiBaseUrl = "https://api.themoviedb.org/3";
const posterBaseUrl = "https://image.tmdb.org/t/p/w300";
interface Genre {
  id: number;
  name: string;
}
export interface Movie {
    id: number;
    title: string;
    vote_average?: number;
    overview?: string;
    poster_path?: string;
    release_date?: string;
    budget?: number;
    revenue?: number;
    genres?: Genre[];
  }

export async function fetchSelectedMovie (movieId: number) {
  return await fetch(
    `${movieApiBaseUrl}/movie/${movieId}?api_key=${process.env.REACT_APP_API_KEY}`
  )
    .then((res) => res.json())
    .then((body) => {return body})
    .catch(() => {
        return {};
    });
}

export async function fetchSearchedMovie (enteredTitle: string ) {

  const enteredTitleWithoutSpecials = enteredTitle.replace(/[^a-zA-Z ]/g, ""); 

    return await fetch(
      `${movieApiBaseUrl}/search/movie/?api_key=${process.env.REACT_APP_API_KEY}&query=${enteredTitleWithoutSpecials}`
    )
      .then((res) => res.json())
      .then((body) => {return body.results})
      .catch(() => {
          return {};
      });
  }

export async function fetchMovies(page: string): Promise<Movie[]> {
  //let page = 1;

  return await fetch(
    `${movieApiBaseUrl}/movie/popular?api_key=${process.env.REACT_APP_API_KEY}&page=${page}`
    )
    .then((res) => res.json())
    .then((res) => mapMainMoviesResult(res.results))
    .catch(() => {
        return [];
    });
 }

// = movie has to be after const {} here
function mapMainMoviesResult(res: any[]): Movie[] {
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
      vote_average: vote_average,
      overview: overview,
      poster_path: poster_path ? `${posterBaseUrl}${poster_path}` : noImage,
      release_date: date,
    };
  });
}

export async function fetchSimilarMovies(movieId: number): Promise<Movie[]> {
  const page = 1;
  return await fetch(
    `${movieApiBaseUrl}/movie/${movieId}/similar?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&page=${page}`
  )
    .then((res) => res.json())
    .then((res) => mapMainMoviesResult(res.results))
    .catch(() => {
        return [];
    });
}