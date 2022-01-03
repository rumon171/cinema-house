import { AnyAction } from 'redux';
import { Movie } from './services/movies.service';

import {
  ADD_HOME_PAGE_MOVIES,
  CHANGE_SELECTED_MOVIE,
  IS_MOVIE_PAGE_OPENED,
  SEARCHED_MOVIE,
  CURRENT_PAGE,
  FAVOURITED_MOVIE,
} from './actions';
interface mainState {
  homePageMovies: Movie[];
  selectedMovie: number;
  isMoviePageOpened: boolean;
  searchedMovie: string;
  currentPage: number;
  favouritedMovie: number;
}

const initialState: mainState = {
  homePageMovies: [],
  selectedMovie: 0,
  isMoviePageOpened: false,
  searchedMovie: '',
  currentPage: 1,
  favouritedMovie: 0
};

function rootReducer(state = initialState, action: AnyAction) {
  switch (action.type) {
    case ADD_HOME_PAGE_MOVIES:
      return {
        ...state,
        homePageMovies: action.homePageMovies,
      };
    case CHANGE_SELECTED_MOVIE:
      return {
        ...state,
        selectedMovie: action.selectedMovie,
      };
    case IS_MOVIE_PAGE_OPENED:
      return {
        ...state,
        isMoviePageOpened: action.isMoviePageOpened,
      };
    case SEARCHED_MOVIE:
      return {
        ...state,
        searchedMovie: action.searchedMovie,
      };
    case CURRENT_PAGE:
      return {
        ...state,
        currentPage: action.currentPage,
      };
    case FAVOURITED_MOVIE:
      return {
        ...state,
        favouritedMovie: action.favouritedMovie,
      };
    default:
      return state;
  }
}

export default rootReducer;
export type RootState = ReturnType<typeof rootReducer>;
