import React, { Component } from 'react';


class TodoInputText extends Component {

      state={
          text:this.props.text || ''
      }
    // 添加任务
    handleSubmit(e) {
        const { onSave, newTodo } = this.props;
        const text = e.target.value.trim();
        if (e.which === 13) {
            onSave(text);
            if (newTodo) {
               this.setState({
                   text:''
               })
            }
        }
    }
    // 要不然input值不能修改
    onHandleChange(e){
        this.setState({
            text:e.target.value
        })
    }
    onHandleBlur(e) {
        if (!this.props.newTodo) {
            this.props.onSave( e.target.value)
        }

    }


    render() {
        return (
            <div className="inputList">
                <input type="text"
                    value={this.state.text}
                    autoFocus="true"
                    placeholder={this.props.placeholder}
                    onChange={this.onHandleChange.bind(this)}
                    onKeyDown={this.handleSubmit.bind(this)}
                    onBlur={this.onHandleBlur.bind(this)}
                />
            </div>
        )
    }
}


export default TodoInputText 