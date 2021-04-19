import { applyMiddleware, createStore } from 'redux';
import axios from 'axios';
import axiosMiddleware from 'redux-axios-middleware';
import { composeWithDevTools } from 'redux-devtools-extension';

import reducer from './reducer';

const axiosClient = axios.create({
  responseType: 'json',
});

const middlewares = [
  axiosMiddleware(axiosClient),
];

export default createStore(
  reducer,
  composeWithDevTools(
    applyMiddleware(...middlewares),
  ),
);
