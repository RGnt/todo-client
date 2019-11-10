import React from 'react';

import { createStore, applyMiddleware } from 'redux';

import { composeWithDevTools } from 'redux-devtools-extension';

import { Provider } from 'react-redux';

import thunk from 'redux-thunk';

import ReactDOM from 'react-dom';

import App from './App';
import './index.css';

import { loadAllTodos } from './redux/actions';
import { loadTodos } from './redux/reducers';

const store = createStore(loadTodos, composeWithDevTools(applyMiddleware(thunk)));
// store.dispatch(loadAllTodos());
ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));

