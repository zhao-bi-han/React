import React,{Component} from 'react';

class MusicItem extends Component{
    render(){

        return(
          <tr className={this.props.foucs?'foucs':null}>
             <td >
              <img src={require('../../assets/img/'+this.props.music.musicPic)} />
             {this.props.music.musicName}
             </td>
             <td>{this.props.music.musicPro}</td>
             <td><a href="javascript:;">删除</a></td>
          </tr>
        )
    }
}
export default MusicItem;