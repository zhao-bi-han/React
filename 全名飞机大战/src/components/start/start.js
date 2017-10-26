import React, { Component } from 'react';
import {BrowserRouter as Router,Link,Route} from 'react-router-dom';
import Logo from './../logo/logo';
import './start.css';
import '../../assert/css/animate.min.css';

class Start extends Component {
    constructor() {
        super();
    }
    render() {
        return (
            <div className="start-warp">
                <div className="commonWidth clearfix">
                    <div className="start-left" style={{ height: this.props.screenY }}>
                        <Logo width={'360px'}/>
                        <div className="girl">
                            <img src={require('../../assert/img/ui_girl2.png')} className="animated fadeInRight" />
                            <img src={require('../../assert/img/ui_girl1.png')} className="animated fadeInLeft" />
                        </div>
                    </div>
                    <div className="start-right" style={{ height: this.props.screenY }}>
                        <div className="start-plan">
                            <div className="start-plan1" >
                                <img src={require('../../assert/img/startplan1.png')} className="animated bounceIn"/>
                            </div>
                            <div className="start-plan2">
                                <img src={require('../../assert/img/startplan2.png')} className="animated bounceIn"/>
                            </div>

                        </div>
                        <div className="start-btn animated fadeIn">
                           <Link to="/select">进入游戏</Link>
                        </div>
                    </div>

                </div>
            </div>
        )
    }
}

export default Start;
