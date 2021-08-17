export const SET_SELECTED_MOVIE = 'SET_SELECTED_MOVIE' // action types

function setselectedMovie(selectedMovie) {
   return { 
      type: 'SET_SELECTED_MOVIE', 
      payload: selectedMovie 
   }
 }