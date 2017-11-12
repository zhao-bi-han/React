import {
    ADD_TODO,
    DELETE_TODO,
    EIDT_TODO,
    COMPLETE_TODO,
    COMPLETE_ALL,
    CLEAR_COMPLETE
} from '../actions/index';

const initData = [
    {
        id: 0,
        text: "add to do ",
        complete: false
    }
]
const todos = (state = initData, action) => {
    switch (action.type) {
        case ADD_TODO:
            return [...state, {
                id: state.reduce((maxId, todo) => Math.max(todo.id, maxId), -1) + 1,
                text:action.text,
                complete: false
            }]
        case DELETE_TODO:
            return state.filter((todo) => 
                todo.id !== action.id
            )
        case EIDT_TODO:
            return state.map((todo) => 
                todo.id === action.id ? { ...todo, text: action.text } : todo
            )
        case COMPLETE_TODO:
            return state.map((todo) =>
                todo.id === action.id ? { ...todo, complete: !todo.complete } : todo
            )
        case COMPLETE_ALL:
            const allMark = state.every((todo) => todo.complete);
            return state.map(todo =>( 
                {...todo, complete: !allMark} )
            )
        case CLEAR_COMPLETE:
            return state.filter(todo=>todo.complete===false)
        default:
            return state;
    }
}

export default todos;