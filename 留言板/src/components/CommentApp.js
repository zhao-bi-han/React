import React, { Component } from 'react';
import CommentInput from './CommentInput';
import CommentList from './CommentList';

class CommentApp extends Component {
    constructor() {
        super();
        this.state = {
            comments: []
        }
    }

    //
    componentWillMount() {
        this._getComments();
        // console.log(this.state)
    }


    // 得到所有评论
    _getComments() {
        let comments = localStorage.getItem('comments');
        //console.log(comments);
        if (comments) {
            comments = JSON.parse(comments);
            // console.log(comments);
            this.setState({
                comments: comments
            })
        }
    }

    handleSubmit(comment) {
        //console.log(comment);
        if (!comment) return;
        if (!comment.username) return alert("请输入用户名");
        if (!comment.context) return alert("请输入要评论的内容");
        const comments = this.state.comments;  // 先得到数据，在之前数据的基础上加
        comments.push(comment);
        // console.log(this.state.comments);
        this.setState({
            //setState 把数据更新到页面上
            comments: comments
        })
        this._saveComments(comments);
    }
    // 保存评论
    _saveComments(comments) {
        localStorage.setItem("comments", JSON.stringify(comments));
        //console.log(localStorage);      
    }
    //删除评论
    deleteComment(index) {
        const comments = this.state.comments;
        comments.splice(index, 1);
        this.setState({ comments });
        this._saveComments(comments);
    }

    render() {
        return (
            <div className="commentWarp">
                <CommentInput onSubmit={this.handleSubmit.bind(this)} />
                <CommentList comments={this.state.comments} onDeleteComment={this.deleteComment.bind(this)} />
            </div>
        )
    }
}
export default CommentApp;