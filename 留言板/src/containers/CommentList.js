import React,{Component} from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import CommentList from '../components/CommentList';
import { initComment, deleteComment } from "../reducers/comment";

//一个 Smart 组件，负责评论列表数据的加载、初始化、删除评论
class CommentListContainer  extends Component{
     
    // 添加默认参数
    static propTypes  = {
        comments:PropTypes.array,
        initComments:PropTypes.func,
        onDeleteComment:PropTypes.func
      }
      
      componentDidMount(){
          this._loadComments();
      }
      _loadComments(){
          let comments=localStorage.getItem('comments');  
          comments = comments ? JSON.parse(comments) : [];    // 获取数据 并反序列化
          this.props.initComment(comments);    // 初始化数据
      }
      handleDeleteComment(index){
          const {comments} =this.props;
          // props 是不能变的，所以这里新建一个删除了特定下标的评论列表
          const newComments=[
              ...comments.slice(0,index),
              ...comments.slice(index+1)
          ]
          console.log(newComments);
          // 将新的评论表存入localStorage
          localStorage.setItem('comments', JSON.stringify(newComments));
          if(this.props.onDeleteComment){
              //this.props.onDeleteComment 是 connect 传进来的
              //会 dispatch 一个 action 去删除评论
              this.props.onDeleteComment(index);
          }
      }
render(){

    return(
        <CommentList  comments={this.props.comments} onDeleteComment={this.handleDeleteComment.bind(this)}/>
    )
}
}
// 评论列表从 state.comments 中获取
 const mapStateToProps = (state) => {
    return {
        comments: state.comments
    }
}

 const mapDispatchToProps = (dispatch) => {
    return {
      initComment:(comments)=>{
        //   console.log(comments);
          dispatch(initComment(comments));
      },
      onDeleteComment:(commentIndex)=>{
          dispatch(deleteComment(commentIndex))
      }

    }
}
export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(CommentListContainer);




  