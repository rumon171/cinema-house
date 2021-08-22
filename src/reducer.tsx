import { 
  CHANGE_SELECTED_MOVIE, 
  IS_MOVIE_PAGE_OPENED 
} from "./actions";

const initialState = {
    selectedMovie: 0,
    isMoviePageOpened: false,
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
         default: 
           return state;
     }
}

export default rootReducer;
export type RootState = ReturnType<typeof rootReducer>