import App from './App';
import { BrowserRouter } from 'react-router-dom'
import {Provider} from 'react-redux';
import React from 'react';
import ReactDOM from 'react-dom';
import store from './store/store';

ReactDOM.render(
  <BrowserRouter>
    <Provider store={store}>
      <div>
        <App/>
      </div>
    </Provider>
  </BrowserRouter>, document.querySelector('#root'))
