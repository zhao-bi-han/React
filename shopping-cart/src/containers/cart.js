import React ,{Component} from 'react';
import {connect} from 'react-redux';
import {addTocart,removeProduct,inventoryInit} from '../actions/index';
import Cart from '../components/cart'; 

const getCartProduct=(products,{productIds,inventory})=>{
 return productIds.map((cartId)=>{
         return {...products[cartId],inventory:inventory[cartId]};
     })
}

const mapStateToProps = (state, ownProps) => {
    return {
        cartProducts: getCartProduct(state.products,state.cart)
    }
}
const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        onClickRemove: (id,inventory) => {
            dispatch(removeProduct(id))
            dispatch(inventoryInit(id,inventory))
        }
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(Cart);