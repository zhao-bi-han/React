import React from 'react';
import ProductList from '../components/productlist';
import {connect} from 'react-redux';
import {inventoryReduce,addTocart} from '../actions/index';

const mapStateToProps = (state, ownProps) => {
    return {
        products: state.products
    }
}
const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        onClickReduce:(id) => {
            dispatch(addTocart(id))
            dispatch(inventoryReduce(id));
          
        }
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(ProductList);