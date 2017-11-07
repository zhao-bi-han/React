import React ,{Component} from 'react';
import CartItem from './cartitem';
import './cart.css';
class Cart extends Component{
    render(){
       const {cartProducts,onClickRemove}=this.props;
        return(
            <div className="cart">
            <table>
               <thead>
                  <tr>
                   <td colSpan="2">商品信息</td>
                   <td>价格</td>
                   <td>数量</td>
                   <td>操作</td>
                  </tr>
               </thead>
               <tbody>
               {cartProducts.length>0?
                cartProducts.map((cartProduct)=><CartItem  {...cartProduct} key={cartProduct.id} onClickRemove={()=>onClickRemove(cartProduct.id,cartProduct.inventory)}/>):
                <tr className="noproduct"><td colSpan="4" >快添加商品到购物车吧</td></tr>}
               </tbody>
            </table>
            </div>
          
        )
    }
}

export default Cart;