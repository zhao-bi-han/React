import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {Provider} from 'react-redux';
import {createStore} from 'redux';
import ProductReducer from './reducers/index';
import App from './components/app';
import registerServiceWorker from './registerServiceWorker';

const store = createStore(ProductReducer);
ReactDOM.render(<Provider store={store}>
    <App />
</Provider>, document.getElementById('root'));
registerServiceWorker();
