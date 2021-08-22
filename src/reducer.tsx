import { 
  CHANGE_SELECTED_MOVIE, 
  IS_MOVIE_PAGE_FIRST_TIME_OPENED 
} from "./actions";

const initialState = {
    selectedMovie: 0,
  }

function rootReducer( state = initialState, action: any ){
    switch(action.type) {
        case CHANGE_SELECTED_MOVIE:
            return {
                ...state,
                selectedMovie: action.selectedMovie
            }
        case IS_MOVIE_PAGE_FIRST_TIME_OPENED:
            return {
                ...state,
                isMovieFirstTimeOpened: action.isMovieFirstTimeOpened
            }
         default: 
           return state;
     }
}

export default rootReducer;
export type RootState = ReturnType<typeof rootReducer>