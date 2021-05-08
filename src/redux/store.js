import { createStore, combineReducers } from "redux";
import videoReducer from "./videos/videoReducer";
import {composeWithDevTools} from "redux-devtools-extension";
import darkModeReducers from "./dark mode/darkModeReducers";

const rootReducer = combineReducers({
    Video: videoReducer,
    Dark: darkModeReducers
})

const store = createStore(rootReducer, composeWithDevTools());

export default store;

