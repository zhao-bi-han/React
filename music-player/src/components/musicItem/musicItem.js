import React,{Component} from 'react';
import Pubsub from 'pubsub-js';
class MusicItem extends Component{
      playMusic(musicItem){    ///  只负责将要执行的事件 广播出去
             Pubsub.publish('PLAY_MUSIC',musicItem);
      }

      deleteMusic(musicItem){
          Pubsub.publish('DELETE_MUSIC',musicItem);
      }
    render(){

        return(
          <tr className={this.props.foucs?'foucs':null} onClick={this.playMusic.bind(this,this.props.music) }>
             <td >
              <img src={require('../../assets/img/'+this.props.music.musicPic)} />
             {this.props.music.musicName}
             </td>
             <td>{this.props.music.musicPro}</td>
             <td><a href="javascript:;" onClick={this.deleteMusic.bind(this,this.props.music)}>删除</a></td>
          </tr>
        )
    }
}
export default MusicItem;