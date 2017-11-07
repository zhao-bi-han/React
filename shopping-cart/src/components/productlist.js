import React,{Component} from 'react';
import ProductItem from './productitem';
import './product.css';

class ProductList extends Component{
    render(){ 
        const {products,onClickReduce} =this.props;
        return(
            <div className="list">
                {products.map((product,i)=><ProductItem {...product}  onClickReduce={()=>onClickReduce(product.id)}  key={product.id}/>)}
            </div>
        )
    }
}

export default ProductList; 