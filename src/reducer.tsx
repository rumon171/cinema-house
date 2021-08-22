import { 
  CHANGE_SELECTED_MOVIE, 
  IS_MOVIE_PAGE_OPENED,
  SEARCHED_MOVIE,
  MOVIES_PAGE
} from "./actions";

const initialState = {
    selectedMovie: 0,
    isMoviePageOpened: false,
    searchedMovie: '',
    currentPage: 1
  }

function rootReducer( state = initialState, action: any ){
    switch(action.type) {
        case CHANGE_SELECTED_MOVIE:
            return {
                ...state,
                selectedMovie: action.selectedMovie
            }
        case IS_MOVIE_PAGE_OPENED:
            return {
                ...state,
                isMoviePageOpened: action.isMoviePageOpened
            }
        case SEARCHED_MOVIE:
            return {
                ...state,
                searchedMovie: action.searchedMovie
            }
        case MOVIES_PAGE:
            return {
                ...state,
                currentPage: action.currentPage
            }
         default: 
           return state;
     }
}

export default rootReducer;
export type RootState = ReturnType<typeof rootReducer>