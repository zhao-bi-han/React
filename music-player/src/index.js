import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import jPlayer from 'jplayer';
import Date from './assets/js/data';
import './index.css';
import Root from './components/root'
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<Root />, document.getElementById('root'));
registerServiceWorker();
