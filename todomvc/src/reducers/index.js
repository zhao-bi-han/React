import {combineReducers} from 'redux';
import todos from '../reducers/todo';

const appReducer=combineReducers({
    todos
})

export default appReducer;