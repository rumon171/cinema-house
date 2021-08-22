export const ADD_HOME_PAGE_MOVIES = 'ADD_HOME_PAGE_MOVIES'
export const CHANGE_SELECTED_MOVIE = 'CHANGE_SELECTED_MOVIE'
export const IS_MOVIE_PAGE_OPENED = 'IS_MOVIE_PAGE_OPENED'
export const SEARCHED_MOVIE = 'SEARCHED_MOVIE'
export const CURRENT_PAGE = 'CURRENT_PAGE'

export function addHomePageMovies ( addtionalMovies ) {
   return { 
      type: 'ADD_HOME_PAGE_MOVIES', 
      homePageMovies: addtionalMovies
   }
 }

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

export function changeSearchedMovie ( phrase ) {
   return {
      type: SEARCHED_MOVIE,
      searchedMovie: phrase
   }
}

export function changeCurrentPage ( number ) {
   return {
      type: CURRENT_PAGE,
      currentPage: number
   }
}