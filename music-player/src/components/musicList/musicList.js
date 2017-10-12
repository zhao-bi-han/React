import React,{Component} from 'react';
import MusicItem from '../musicItem/musicItem';
import './musicList.css';

class MusicList extends Component{
    render(){
        return(
            <div className="musicList">
            <table>
              <thead>
              <tr>
                <td>歌曲</td>
                <td>歌手</td>
                <td>操作</td>
              </tr>
              </thead>
              <tbody>
              {this.props.MusicList.map((item)=><MusicItem key={item.id} music={item} foucs={item===this.props.currentMusic}></MusicItem>)}
              </tbody>
            
            </table>
                
            </div>
        )
    }
}

export default MusicList;