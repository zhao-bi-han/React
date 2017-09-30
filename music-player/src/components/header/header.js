import React,{Component} from 'react';
import LogoImg from '../../assets/img/logo.png';
import './header.css'

class Header extends Component{
    render(){
        return(
            <div className="component-header">
                <img  src={LogoImg}/>
            </div>
        )
    }
}

export default Header;