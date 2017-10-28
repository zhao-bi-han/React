import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import CommentApp from './containers/CommentApp';
import {Provider } from 'react-redux';
import {createStore} from 'redux';
import commentsReducer from './reducers/comment'
import registerServiceWorker from './registerServiceWorker';

const store=createStore(commentsReducer);
ReactDOM.render( <Provider store={store}>
    <CommentApp />
  </Provider>, document.getElementById('root'));
registerServiceWorker();
