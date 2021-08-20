import { CHANGE_SELECTED_MOVIE } from "./actions";

const initialState = {
    selectedMovie: 0,
  }

function rootReducer( state = initialState, action: any ){
    switch(action.type) {
        case CHANGE_SELECTED_MOVIE:
            return {
                ...state,
                selectedMovie: action.payload
            }
         default: 
           return state;
     }
}

export default rootReducer;
export type RootState = ReturnType<typeof rootReducer>