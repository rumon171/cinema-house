const movieApiBaseUrl = "https://api.themoviedb.org/3";
export interface Movie {
   // id: number;
   // date: string;
    title: string;
    rating: number;
   // resume: string;
   // picture?: string;
  }

  //  const DynamicList: React.FC<ListItemsArray> = (
  export function fetchMovies(): Promise<Movie[]> {
   return fetch(
     `${movieApiBaseUrl}/discover/movie?sort_by=popularity.desc&api_key=${process.env.REACT_APP_API_KEY}`
   )
     .then((res) => res.json())
     .then((res) => mapResult(res.results))
     .catch((_) => {
         //console.error('Error:', error);
         return [];
     });
 }

 /* SUkeist vIETOm
     const {
       title,
       vote_average,
     } = movie;
 */
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