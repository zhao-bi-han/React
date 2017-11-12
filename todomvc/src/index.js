import React from 'react';
import ReactDOM from 'react-dom';
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import './index.css';
import registerServiceWorker from './registerServiceWorker';
import appReducer from './reducers/index';
import App from './containers/app';

const store =createStore(appReducer);

ReactDOM.render(<Provider store={store}>
     <App />
    </Provider>, document.getElementById('root'));
registerServiceWorker();
