import React from "react";
import ReactDOM from "react-dom";
import { createStore, applyMiddleware, combineReducers } from "redux";
import { Provider } from "react-redux";
import thunkMiddleware from "redux-thunk";
import { createLogger } from "redux-logger";
import "./index.css";
import "tachyons";
import * as serviceWorker from "./serviceWorker";
import App from "./Containers/App/App";
import { searchRobots, getRobots } from "./Reducers";

const rootReducer = combineReducers({searchRobots, getRobots});
const logger = createLogger();

const store = createStore(rootReducer, applyMiddleware(thunkMiddleware,logger));
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
