import React,{Component} from 'react';
import './cart.css';
class CartItem extends Component{
    render(){
        const {id,img,info,price,inventory,onClickRemove}=this.props;
        return(
            <tr>
               <td><img  src={require("../assert/img/"+img)}/></td>
               <td><p>{info}</p></td>
               <td><span>{price*inventory}￥</span></td>
               <td>{inventory}</td>
               <td><a href="javascript:;" onClick={onClickRemove}>删除</a></td>
            </tr>
        )
    }
}
export default CartItem;