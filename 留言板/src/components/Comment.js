import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Comment extends Component {

    // 验证数据类型
    static PropTypes = {
        comment: PropTypes.object.isRquired,
        deleteData: PropTypes.func,
        index: PropTypes.number
    }
    constructor() {
        super();
        this.state = {
            timeString: ''
        }
    }
    componentWillMount() {
        //console.log(+Date.now())
        this._updateTime();
        this._timer = setInterval(
            this._updateTime.bind(this),
            10000
        )      // 隔五秒更新一次
    }
    componentWillUnmount(){   //评论组件销毁的时候清除定时器
        clearInterval(this._timer)
    }

    _updateTime() {
        const comment = this.props.comment;
        const duration = (+Date.now() - comment.createTime) / 1000;
        this.setState({
            timeString: duration > 60 ? `${Math.round(duration / 60)}分钟前` : `${Math.round(Math.max(duration, 1))}秒前`
        })
    }

    // 删除
    deletComment() {
        if (this.props.onDeleteComment) {   // 这个参数是从commentlist中传来的    
            this.props.onDeleteComment(this.props.index);
        }
    }

    render() {
        return (
            <div className="comment">
                <div className="user">
                    <span>{this.props.comment.username}:</span>
                </div>
                <p>{this.props.comment.content}</p>
                <span className="time">{this.state.timeString}</span>
                <div className="delwarp">
                    <a href="javascript:;" onClick={this.deletComment.bind(this)} className="del">删除</a>
                </div>

            </div>
        )
    }
}


export default Comment;