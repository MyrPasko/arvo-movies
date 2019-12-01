import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose, combineReducers } from 'redux';
import thunk from 'redux-thunk';

import MoviesListReducer from './store/moviesList/reducer';
import SortConfigReducer from './store/sortConfig/reducer';
import SingleMovieReducer from './store/singleMovie/reducer';
import { RootState } from "./store/rootTypes";

const composeEnhancers =
  process.env.NODE_ENV === 'development'
    ? (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    : compose;

const rootReducer = combineReducers<RootState>({
  moviesList: MoviesListReducer,
  sortConfig: SortConfigReducer,
  singleMovie: SingleMovieReducer,
});

const store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)));
const app = (
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>
);

ReactDOM.render(app, document.getElementById('root'));
