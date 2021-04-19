import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter, Route } from 'react-router-dom';

import './index.css';

import App from './App';
import reportWebVitals from './reportWebVitals';
import store from './__data__/store';

ReactDOM.render(
  <React.StrictMode>
    <Provider {...{ store }}>
      <BrowserRouter>
        <Route path="/" exact component={App} />
        <Route path="/:slug" component={App} />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
