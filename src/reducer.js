import { ADD_SELECTED_MOVIE } from "./actions";

const initialState = {
    selectedMovie: 0,
  }

function appReducer( state = initialState, action ){
    switch(action.type) {
        case ADD_SELECTED_MOVIE:
            return {
                ...state,
                selectedMovie: action.selectedMovie,
            }
         default: 
           return state;
     }
}

export default appReducer;