import React, { Component } from 'react';
import { BrowserRouter as Router, Link, Route } from 'react-router-dom';
import Logo from '../logo/logo';
import './gameover.css';

class Gameover extends Component {
    render() {
        return (
            <div className="over-warp" style={{ height: this.props.screenY }}>
                <div className="commonWidth">
                    <Logo width={'240px'} />
                    <div className="content">
                        <div className="overscore">{this.props.history.location.state.score}</div>
                        <div className="overbtn">
                            <Link to="/select">重新开始</Link>
                            <Link to="/">退出游戏</Link>
                        </div>
                    </div>

                </div>

            </div>
        )
    }
}
export default Gameover;