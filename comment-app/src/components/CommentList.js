import React,{Component} from 'react';
import Comment from './Comment';
class CommentList extends Component{
     
    // 添加默认参数
    static defaultProps = {
        comments: [],
      }
      
      deleteComment(index){
          if( this.props.onDeleteComment){   // 这个参数是从 commentApp中传来的
            this.props.onDeleteComment(index)
          }
        
      }
render(){
    return(
        <div className="commentList">
              {this.props.comments.map((comment,i)=><Comment comment={comment} index={i} onDeleteComment={this.deleteComment.bind(this)} />)}
        </div>
    )
}
}


export default CommentList;