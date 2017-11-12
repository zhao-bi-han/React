import React,{Component} from 'react';
import {SHOW_ALL,SHOW_ACTIVE,SHOW_COMPLETE} from '../actions/filter';

const  filterTab={
    [SHOW_ALL]: "所有任务",
    [SHOW_ACTIVE]:"未完成",
    [SHOW_COMPLETE]:"已完成"
 }

class Footer extends Component{
    
   
  /// 数目
    renderTodoCount(){
        const {todos}=this.props;
        return(
            <span>{todos.length} {todos.length===1?'item':"items"}</span>
        )
    }
    // 列表切换
    renderFilterLink(filter){
        const {onShow,currentFilter}=this.props;
        return(
            <a href="javascrit:;" onClick={()=>onShow(filter)} className={filter===currentFilter?"active":''}>{filterTab[filter]}</a>
        )
    }

render(){
    const mark=this.props.todos.some(todo=>todo.complete);
    return(
        <div className="footer">
           {this.renderTodoCount()}
           <ul>
            {[SHOW_ALL,SHOW_ACTIVE,SHOW_COMPLETE].map((filter)=>
                <li key={filter}>
                   {this.renderFilterLink(filter)}
                </li>
               
            )}
           </ul>
          {mark? <p onClick={()=>this.props.clearComplete()}>清除已完成的任务</p>:''}
        </div>
    )
}
}

export default Footer;