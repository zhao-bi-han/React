import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Start from './start/start';
import Select from './select/select';
import Game from './game/game';
import Gameover from './gameover/gameover';
class Root extends Component {
    constructor() {
        super();
        this.state={
            screenY:0
        }
    }
    componentDidMount() {
        let y=document.documentElement.clientHeight;
        this.setState({
            screenY:y
        })
    }
    render() {
        return (
            <Router>
                <div style={{height:this.state.screenY}}>
                     <Route exact path='/'  render={()=><Start screenY={this.state.screenY} />} />
                     <Route path="/select"  render={()=><Select screenY={this.state.screenY} />} />
                     <Route path="/game"  render={(props)=><Game screenY={this.state.screenY} {...props}/>} />
                     <Route path="/gameover"  render={(props)=><Gameover screenY={this.state.screenY} {...props}  />} />
                </div>
            </Router>
        )
    }
}



export default Root;