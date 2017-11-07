import React, { Component } from 'react';
import './product.css';

const ProductItem = ({ id, img, info, price, num, onClickReduce }) => {
    return (
        <div className="item">
            <img src={require("../assert/img/" + img)} />
            <p className="info">{info}</p>
            <p className="price">{price}￥</p>
            <span>库存数量:<i>{num}</i></span>
            <a href="javascript:;" onClick={num==0?null:onClickReduce} className={num == 0 ? "disabled" : ''}>加入购物车</a>
        </div>
    )
}

export default ProductItem;