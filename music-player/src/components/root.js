import React, { Component } from 'react';
import $ from 'jquery';
import jPlayer from 'jplayer';
import Header from './header/header';
import aduio from '../assets/music/花粥 - 遥不可及的你.mp3';
import Player from './player/player';
import MusicData from '../assets/js/data';
import MusicList from './musicList/musicList';
import { BrowserRouter as Router,Link, Route } from 'react-router-dom';
class Root extends Component {
    constructor() {
        super()
        this.state = {
            musicData: MusicData,
            currentMusic: MusicData[0]
        }

    }
    componentDidMount() {
        let that = this;
        $("#player").jPlayer({
            ready: function () {
                $(this).jPlayer('setMedia', {
                    mp3: require('../assets/music/' + that.state.currentMusic.musicFile)     // 播放的文件
                }).jPlayer('play');    // 自动播放
            },
            supplied: 'mp3',     // 其他参数
            wmode: 'window'
        });

    }

    render() {
        return (
            <Router>
                <div className="warp">
                    <Header />
                    <Route path='/' exact render={()=><Player currentMusic={this.state.currentMusic} />}/>
                    <Route path='/list' render={()=><MusicList MusicList={this.state.musicData } currentMusic={this.state.currentMusic}/>}/>
                </div>
            </Router>

        )
    }
}

export default Root;