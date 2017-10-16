import React, { Component } from 'react';
import { BrowserRouter as Router, Link, Route } from 'react-router-dom';
import Personinfo from '../personinfo/personinfo';
import Logo from './../logo/logo';
import './select.css';
import Data from '../../assert/data/data';
class Select extends Component {
    constructor() {
        super()
        this.state = {
            data: Data,
            currentPerson:Data[0],
            id:1
        }
    }
    change(id){
        this.setState({
            currentPerson:this.state.data[id-1],
            id:id
        })
    }
    render() {
        return (
                <div className="select-warp">
                    <div className="commonWidth clearfix">
                        <div className="top">
                            <Logo width={'240px'} />
                            <div className="top-right">
                              <img src={require('../../assert/img/select.png')}/>
                            </div>
                        </div>
                        <div className="main">
                            <Personinfo screenY={this.props.screenY}  currentPerson={this.state.currentPerson}/>
                            <div className="select-right clearfix animated fadeInDown">
                                <div className="game-info">
                                    <div className="introduce" style={{ height: this.props.screenY - 100 }}>
                                        <h2>操作方法：</h2>
                                        <p>
                                            点击鼠标左键战机开始发送子弹,鼠标控制战机的移动</p>
                                      <div className={`plan cl${this.state.id}`}></div>
                                    </div>
                                </div>
                                <div className="select-person ">
                                    <div className="list">
                                        <ul className="clearfix">
                                            {this.state.data.map((item) => (
                                                <li key={item.id} onClick={this.change.bind(this,item.id)}>
                                                        <img src={require('../../assert/img/' + item.personImg)} />
                                                </li>
                                            ))}
                                        </ul>
                                    </div>

                                </div>
                                <div className="startbtn">
                                   <Link to="/game">开始游戏</Link>
                                </div>
                            </div>
                        </div>

                    </div>

                </div>

        )
    }
}

export default Select;