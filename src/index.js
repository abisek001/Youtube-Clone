import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { thunk } from 'redux-thunk';
import { applyMiddleware, compose } from 'redux';
import {createStore} from 'redux';
import { Reducers } from './Reducers';

import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';


const store = createStore(Reducers, compose(applyMiddleware(thunk)))
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store = { store }>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>
);

reportWebVitals();
