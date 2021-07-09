const movieApiBaseUrl = "https://api.themoviedb.org/3";
export interface Movie {
   // id: number;
   // date: string;
    title: string;
    rating: number;
   // resume: string;
   // picture?: string;
  }

  export function fetchMovies(): Promise<Movie[]> {
   return fetch(
     `${movieApiBaseUrl}/discover/movie?sort_by=popularity.desc&api_key=${process.env.REACT_APP_API_KEY}`
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
       title,
       vote_average,
     } = movie;
     return {
       title,
       rating: vote_average,
     };
   });
 }