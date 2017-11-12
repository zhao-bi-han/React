import React ,{Component}from 'react';
import TodoInputText from './TodoInputText';

class Header extends Component{


    saveTodo(text){
         if(text.lenght!==0){
             this.props.addTodo(text);
         }
    }
    completeAllHandle(){
           this.props.completeAll();
    }

    render(){
       const {todos}=this.props;
       const allMark = todos.every((todo) => todo.complete);
        return(
            <div className="head">
             <h1>任务列表</h1>
             <i className={allMark?'all':''} onClick={this.completeAllHandle.bind(this)}></i>
            <TodoInputText newTodo onSave={this.saveTodo.bind(this)} placeholder="写下你的任务吧！"/>
            </div>
        )
    }
}

export default Header;