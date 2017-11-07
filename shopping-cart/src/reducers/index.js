import {combineReducers} from 'redux';
import products from './product';
import cart from  './cart';

const ProductReducer=combineReducers({
    products,
    cart
})

export default ProductReducer;