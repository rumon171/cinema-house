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

  export function fetchMovies(): Promise<Movie[]> {
   return fetch(
     `${movieApiBaseUrl}/discover/movie?sort_by=release_date.desc&api_key=${process.env.REACT_APP_API_KEY}`
   )
     .then((res) => res.json())
     .then((res) => mapResult(res.results))
     .catch(() => {
         return [];
     });
 }

 // = movie has to be after const {} here
 function mapResult(res: any[]): Movie[] {
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
       picture: poster_path ? `${posterBaseUrl}${poster_path}` : undefined,
       date: date,
     };
   });
 }