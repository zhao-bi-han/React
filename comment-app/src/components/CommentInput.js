import React, { Component } from 'react';

class CommentInput extends Component {
    constructor() {
        super();
        this.state = {
            username: '',
            context: ''
        }
    }
    // 用户名改变
    usernameChange(event) {
        this.setState({
            username: event.target.value
        })
    }
    // 内容改变
    contextChange(event) {
        this.setState({
            context: event.target.value
        })
    }
    // 点击发布时
    btnClick() {
        if (this.props.onSubmit) {
            /* console.log(this.props.onSubmit);  
               this.props.onSubmit = function  handleSubmit(comment) {console.log(comment); }
            */
            //const { username, context } = this.state;
            this.props.onSubmit({
                username: this.state.username,
                context: this.state.context,
                createTime: +new Date()
            });   // 执行上面那个函数
            this.setState({ context: '' })
        }
    }
    // localStorage 存值
    _setValue(key, val) {
        localStorage.setItem(key, val);
    }
    //input 失去焦点，保存用户名
    setUsername(event) {
        this._setValue("username", event.target.value);
        // console.log(localStorage);
    }

    //得到用户名
    _getUsername() {
        const username = localStorage.getItem("username");
        if (username) {
            this.setState({
                username: username
            })
        }
    }
    //加载时调用
    componentWillMount() {
        this._getUsername();
    }

    // 当页面加载完毕后执行，自动获取焦点到评论框
    componentDidMount() {
        this.textarea.focus();
    }

    render() {
        return (
            <div className="commentInput">
                <div className="user">
                    <label>用户名</label>
                    <input type="text" placeholder="请输入用户名" onChange={this.usernameChange.bind(this)} value={this.state.username} onBlur={this.setUsername.bind(this)} />
                </div>
                <div className="context">
                    <label>内容</label>
                    <textarea placeholder="请输要评论的内容" onChange={this.contextChange.bind(this)} value={this.state.context} ref={(textarea) => this.textarea = textarea}></textarea>
                </div>
                <div className="btn">
                    <button onClick={this.btnClick.bind(this)}>发布</button>
                </div>
            </div>
        )
    }
}


export default CommentInput;