export const CHANGE_SELECTED_MOVIE = 'CHANGE_SELECTED_MOVIE' // action types

export function changeSelectedMovie( selectedMovie ) {
   return { 
      type: 'CHANGE_SELECTED_MOVIE', 
      payload: selectedMovie 
   }
 }