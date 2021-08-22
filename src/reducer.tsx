import { 
  CHANGE_SELECTED_MOVIE, 
  IS_MOVIE_PAGE_OPENED,
  SEARCHED_MOVIE
} from "./actions";

const initialState = {
    selectedMovie: 0,
    isMoviePageOpened: false,
    searchedMovie: ''
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
         default: 
           return state;
     }
}

export default rootReducer;
export type RootState = ReturnType<typeof rootReducer>