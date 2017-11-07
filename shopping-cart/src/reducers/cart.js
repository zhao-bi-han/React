import { combineReducers } from 'redux';
import data from '../api/data.json';
const productIds = (state = [], action) => {
    switch (action.type) {
        case "ADD_TO_CART":
            if (state.indexOf(action.id) != -1) {
                return state
            }
            return [...state, action.id]
        case "REMOVE_PRODUCT":
            return state.filter((t) => {
                return t != action.id
            })

        default:
            return state;
    }
}

const inventory = (state = {}, action) => {
    switch (action.type) {
        case "ADD_TO_CART":
            const productId = action.id
            return {
                ...state,
                [productId]: (state[productId] || 0) + 1
            }
        case "REMOVE_PRODUCT":
           delete state[action.id]
           return state;
        default:
            return state;
    }
}

const cart = combineReducers({
    productIds,
    inventory
})
export default cart;