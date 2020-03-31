import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import { Provider } from 'react-redux'
import { createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk';
import rootReducer from '../src/containers/reducers'

import Header from './components/Header';
import Footer from './components/Footer';
import Home from './containers/Home';
import SearchResult from './containers/SearchResult';
import Error from './containers/Error';

import {
  TYPE_SERIE,
  TYPE_MOVIE
} from './types';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)));

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <Header />
      <Switch>
        <Route path="/" exact>
          <Home />
        </Route>
        <Route path="/series" exact>
          <SearchResult type={TYPE_SERIE} />
        </Route>
        <Route path="/movies" exact>
          <SearchResult type={TYPE_MOVIE} />
        </Route>
        <Route>
          <Error />
        </Route>
      </Switch>
      <Footer />
    </Router>
  </Provider>,
  document.getElementById('root')
);

