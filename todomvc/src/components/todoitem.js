import React, {Component} from 'react';
import TodoInputText from './TodoInputText';
import '../index.css';
class TodoItem extends Component{
    constructor(){
        super();
        this.state={
            isEdit:false
        }
    }

    handleDoubleClick(){
        this.setState({
            isEdit:true
        })
    }

    handleBlur(id,text){
          if(text.length!==0){
              this.props.eidtTodo(id,text);
              this.setState({
                  isEdit:false
              })
          }
    }

    render(){
        const {todo,completeTodo,deleteTodo}=this.props;
        let element;
        if(this.state.isEdit){
            element=(<TodoInputText {...todo}  onSave={(text)=>this.handleBlur(todo.id,text)}/>)
        }else{
            element=(<div className="item"> 
            <i className={todo.complete?"checked":''}></i>
                <input type="checkbox" checked={todo.complete} onChange={()=>completeTodo(todo.id)}/>
               
                <span className={todo.complete?"complete":''}
                onDoubleClick={this.handleDoubleClick.bind(this)}>{todo.text}</span>
                <button onClick={()=>deleteTodo(todo.id)}></button>
                </div>)
        }
        return(
            <li >
               {element}
            </li>
             
        )
    }
}

export default TodoItem;