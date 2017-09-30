import React,{Component} from 'react';
import $ from 'jquery';
import  jPlayer  from 'jplayer';
import Progress from '../progress/progress';
import './player.css';

let duration=null;
class Player extends Component{
    constructor(){
        super();
            this.state={
            progress:0,
            volume:0,
            isPlay:true 
        }
    }
    componentDidMount(){       
        $('#player').bind($.jPlayer.event.timeupdate,(e=>{      // 时间更新事件
            duration=e.jPlayer.status.duration;   // 总时间
            this.setState({
               // progress:Math.round(e.jPlayer.status.currentTime)     // 获取当前时间，并更新progress
               volume:e.jPlayer.options.volume*100,      // 音量        
               progress:e.jPlayer.status.currentPercentAbsolute     //  获取当前百分比
            })
        }))  
    }
    progessChange(progress){
        $("#player").jPlayer('play',duration*progress)       //使音乐到鼠标点击那
     }
     onChangeVoice(progress){    // 控制音量
        $("#player").jPlayer('volume',progress);
     }
     componentWillUnmount(){
         $("#player").unbind($.jPlayer.event.timeupdate);     // 事件解绑
     }

   play(){      // 控制播放暂停
         if(this.state.isPlay){
            $("#player").jPlayer('pause');
         }else{
             $("#player").jPlayer("play");
         }
         this.setState({
             isPlay:!this.state.isPlay
         })
   }

    render(){
        return(
            <div className="player" >
            <div className="left">
                   <a href="javascript:;" className="my">我的私人音乐坊 ></a>
              <h2>{this.props.currentMusic.musicName}</h2>
              <span className="singer">{this.props.currentMusic.musicPro}</span>
              <div className="time-voice">
                   <span className="time">5s</span>
                   <div className="voice">
                     <i></i>
                     <div className="voice-progress">
                       <Progress  color={"rgb(154, 151, 151)"} progress={this.state.volume} onProgessChange={this.onChangeVoice}/>
                     </div>
                     
                   </div>
              </div>
              <div className="play-progress">
              <Progress  progress={this.state.progress}  onProgessChange={this.progessChange}/>
              </div>
             
             <div className="control">
               <a href="javascript:;" className="pre"></a>
               <a href="javascript:;" className={this.state.isPlay?'pause':'play'} onClick={this.play.bind(this)}></a>
               <a href="javascript:;" className="next"></a>
               <i className="loop"></i>
             </div>
            </div>
           <div className="right">
              <div className="picture">
                 <img src={require('../../assets/img/'+this.props.currentMusic.musicPic)} className={this.state.isPlay?'run':null}/>
              </div>
           </div>
            </div>
        )
    }
}

export default Player;