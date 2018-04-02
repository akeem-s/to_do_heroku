import {Provider} from 'react-redux';
import React from 'react';
import ReactDOM from 'react-dom';
import store from './store/store';
import ListContainer from './components/listContainer/ListContainer.jsx';

ReactDOM.render(
  <Provider store={store}>
    <ListContainer/>
  </Provider>, document.querySelector('#root'));
