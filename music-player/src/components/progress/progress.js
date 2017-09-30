import React,{Component} from 'react';
import './progress.css'
class Progress extends Component{
    static defaultProps= {
          color:"#4BF14B" 
          
    }
   changeProgress(e){
        let progressBar = this.refs.progressBar;   // 获取DOM元素
          //（当前点击的位置-元素距离左边的位置）/整个bar的长度
        let progress=(e.clientX-progressBar.getBoundingClientRect().left) / progressBar.clientWidth;
        this.props.onProgessChange && this.props.onProgessChange(progress);
    }

    render(){
        return(
            <div className="progress-component" ref="progressBar"  onClick={this.changeProgress.bind(this)} >
               <div id="player"></div>
               <div className="progress" style={{width:`${this.props.progress}%`,backgroundColor:this.props.color}}>
               </div>
            </div>
        )
    }
}
export default Progress;