import { ADD_SELECTED_MOVIE } from "../actions";

function dataReducer( state={selectedMovies: []}, action ){
    switch(action.type) {
        case ADD_SELECTED_MOVIE:
          return Object.assign({}, state, 
              {
                selectedMovies: [...state.selectedMovies, action.selectedMovies]
               }); 
         default: 
           return state;
     }
}

export default dataReducer;