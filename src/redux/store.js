import { createStore, combineReducers } from "redux";
import videoReducer from "./videos/videoReducer";
import {composeWithDevTools} from "redux-devtools-extension";

const rootReducer = combineReducers({
    Video: videoReducer
})

const store = createStore(rootReducer, composeWithDevTools());

export default store;

