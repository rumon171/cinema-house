import { createStore } from "redux";
import appReducer from "./reducer";
import { composeWithDevTools } from 'redux-devtools-extension';

/*
const store = createStore(
    appReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
*/

const store = createStore(appReducer, composeWithDevTools());

export default store;
export type AppDispatch = typeof store.dispatch