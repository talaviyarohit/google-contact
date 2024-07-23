import { applyMiddleware, compose, createStore } from "redux";

import { thunk } from "redux-thunk";
import rootreducer from "./combine";

const composeEnhancers = window._REDUX_DEVTOOLS_EXTENSION_COMPOSE_ || compose; 
export const store = createStore(rootreducer,composeEnhancers(applyMiddleware(thunk)))  