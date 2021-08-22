export const CHANGE_SELECTED_MOVIE = 'CHANGE_SELECTED_MOVIE' // action types
export const IS_MOVIE_PAGE_FIRST_TIME_OPENED = 'IS_MOVIE_PAGE_FIRST_TIME_OPENED' // action types

export function changeSelectedMovie( id ) {
   return { 
      type: 'CHANGE_SELECTED_MOVIE', 
      selectedMovie: id
   }
 }

 export function itemsRequestSuccess( boolean ) {
   return {
      type: IS_MOVIE_PAGE_FIRST_TIME_OPENED,
      isLoading: boolean,
   }
}