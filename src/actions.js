export const CHANGE_SELECTED_MOVIE = 'CHANGE_SELECTED_MOVIE'
export const IS_MOVIE_PAGE_OPENED = 'IS_MOVIE_PAGE_OPENED'
export const SEARCHED_MOVIE = 'SEARCHED_MOVIE'

export function changeSelectedMovie ( id ) {
   return { 
      type: 'CHANGE_SELECTED_MOVIE', 
      selectedMovie: id
   }
 }

 export function isMoviePageOpened ( boolean ) {
   return {
      type: IS_MOVIE_PAGE_OPENED,
      isMoviePageOpened: boolean
   }
}

export function changeSearchedMovie ( searchedMovie ) {
   return {
      type: SEARCHED_MOVIE,
      searchedMovie: searchedMovie
   }
}