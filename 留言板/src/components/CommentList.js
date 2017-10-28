import React,{Component} from 'react';
import Comment from './Comment';
class CommentList extends Component{
     
    // 添加默认参数
    static defaultProps = {
        comments: [],
      }
      
      onDeleteComment(index){
          if( this.props.onDeleteComment){   // 这个参数是从 commentApp中传来的
            this.props.onDeleteComment(index)
          }
        
      }
render(){
    // console.log(this.props.comments);
    return(
        <div className="commentList">
           {this.props.comments.map((comment,i)=><Comment comment={comment} index={i} onDeleteComment={this.onDeleteComment.bind(this)} />)}  
        </div>
    )
}
}


export default CommentList;