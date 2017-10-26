import React, { Component } from 'react';
import $ from 'jquery';
import jPlayer from 'jplayer';
import Header from './header/header';
import Player from './player/player';
import MusicData from '../assets/js/data';
import MusicList from './musicList/musicList';
import Pubsub from 'pubsub-js';
import { BrowserRouter as Router,Link, Route } from 'react-router-dom';
class Root extends Component {
    constructor() {
        super()
        this.state = {
            musicData: MusicData,
            currentMusic: MusicData[0],
            playState:false
        }

    }
 // 播放音乐 
 palyMusic(music){
    $("#player").jPlayer('setMedia', {
                    mp3: require('../assets/music/' + music.musicFile)     // 播放的文件
                }).jPlayer('play');  
 }  

// 上一曲下一曲
       
playNext(type='next'){
    var index=this.findIndex(this.state.currentMusic);
    let newIndex=null;
    let len=this.state.musicData.length;
    if(type='next'){
        newIndex=(index+1)%len;
    }else{
        newIndex=(index-1+len)%len;
    }
    this.setState({
        currentMusic:this.state.musicData[newIndex]
    })
    this.palyMusic(this.state.musicData[newIndex]);
}
// 查找当前歌曲在列表中位置
findIndex(musicItem){
     return this.state.musicData.indexOf(musicItem);
}
    componentDidMount() {
        // let that = this;
        // $("#player").jPlayer({
        //     ready: function () {
        //         $(this).jPlayer('setMedia', {
        //             mp3: require('../assets/music/' + that.state.currentMusic.musicFile)     // 播放的文件
        //         }).jPlayer('play');    // 自动播放
        //     },
        //     supplied: 'mp3',     // 其他参数
        //     wmode: 'window'
        // });

         //音乐播放完回调  ,播放完当前歌曲 播放下一曲
     $("#player").bind($.jPlayer.event.ended,(e)=>{
         console.log(1);
         if(this.state.playState){
              let index=this.findIndex(this.state.currentMusic);
              this.palyMusic(this.state.musicData[index]);
         }else{
            this.playNext();
         }
          
     });

        
         //删除
      Pubsub.subscribe('DELETE_MUSIC',(msg,musicItem)=>{
          this.setState({
              musicData:this.state.musicData.filter((item)=>{
                  return item!==musicItem;
              })
          })
      }) 
      
      //播放
      Pubsub.subscribe('PLAY_MUSIC',(msg,musicItem)=>{
          this.setState({
            currentMusic:musicItem
          })
      })
      // 下一曲
      Pubsub.subscribe('NEXT_MUSIC',(msg)=>{
           this.playNext();
      })
      // 上一曲
      Pubsub.subscribe('PRE_MUSIC',(msg)=>{
          this.playNext('pre');
      })

      // 循环播放
      Pubsub.subscribe('UPATE_STATE',(msg)=>{
        this.setState({
            playState:!this.state.playState
        })
      })
    }
componentWillUnMount(){
    Pubsub.unsubscribe('PLAY_MUSIC');
    Pubsub.unsubscribe('DELETE_MUSIC');
    Pubsub.unsubscribe('NEXT_MUSIC');
    Pubsub.unsubscribe('PRE_MUSIC');
    $('#jPlayer').unbind($.jPlayer.event.ended);
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