export const ADD_SELECTED_MOVIE = 'ADD_SELECTED_MOVIE' // action types

export function addSelectedMovie( selectedMovie ) {
   return { 
      type: 'ADD_SELECTED_MOVIE', 
      payload: selectedMovie 
   }
 }