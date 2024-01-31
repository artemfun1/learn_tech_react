import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { applyMiddleware, compose, createStore } from "redux";
import App from "./App";
import "./index.css";
import { rootReducer } from "./redux/rootReducer";
import { thunk } from 'redux-thunk'
import { spamWordsMiddlewere } from './redux/middlewere'
import createSagaMiddlewere from 'redux-saga'
import { sagaWatcher } from './redux/sagas'

const saga =createSagaMiddlewere()


const store = createStore(rootReducer, compose(applyMiddleware(
  thunk,
  spamWordsMiddlewere,
	saga
),
window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()));

saga.run(sagaWatcher)

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
	// <React.StrictMode>
	<Provider store={store}>
		<App />
	</Provider>

	//  </React.StrictMode>
);
