import React, { Component } from 'react';
import PropTypes from 'prop-types';
class CommentInput extends Component {
    static PropTypes ={
        username:PropTypes.any,
        onSubmit:PropTypes.func,
        onUserNameInputBlur:PropTypes.func
    }

    static defaultProps={
        username:''
    }
    constructor(props){
        super(props);
        this.state={
            username:props.username,  // 从props上去username字段
            content:''
        }
    }
    componentDidMount(){
        this.textarea.focus();
    }
    handleUsernameBlur(event){
        if(this.props.onUserNameInputBlur){
               this.props.onUserNameInputBlur(event.target.value);
        }
    }
    handleUsernameChange(event){
        this.setState({
            username:event.target.value
        })
    }

    handleContentChange(event){
        this.setState({
            content:event.target.value
        })
    }
    handleSubmit(){
        if(this.props.onSubmit){
                this.props.onSubmit({
                    username:this.state.username,
                    content:this.state.content,
                    createTime:+new Date()
                })
        }
        this.setState({content:''})
    }

    render() {
        return (
            <div className="commentInput">
                <div className="user">
                    <label>用户名</label>
                    <input type="text" placeholder="请输入用户名" onChange={this.handleUsernameChange.bind(this)} value={this.state.username} onBlur={this.handleUsernameBlur.bind(this)} />
                </div>
                <div className="context">
                    <label>内容</label>
                    <textarea placeholder="请输要评论的内容" onChange={this.handleContentChange.bind(this)} value={this.state.content} ref={(textarea) => this.textarea = textarea}></textarea>
                </div>
                <div className="btn">
                    <button onClick={this.handleSubmit.bind(this)}>发布</button>
                </div>
            </div>
        )
    }
}


export default CommentInput;