import React, { Component } from 'react';
import TodoItem from './todoitem';
import Footer from './footer';
import { SHOW_ALL, SHOW_ACTIVE, SHOW_COMPLETE } from '../actions/filter';

const TODO_FILTERS = {
    [SHOW_ALL]: () => true,
    [SHOW_ACTIVE]: todo => !todo.complete,
    [SHOW_COMPLETE]: todo => todo.complete
}

class MainSection extends Component {
    state = {
        filter: "SHOW_ALL"
    }


    handleFilter(filter) {
        this.setState({ filter })
    }
 
    renderTodoList() {
        const { todos, actions } = this.props;
        const {filter}=this.state;
        const filterTodos = todos.filter(TODO_FILTERS[filter])

        return (
            <div className="main">
                <ul>
                    {filterTodos.map(todo => <TodoItem todo={todo} key={todo.id} {...actions} />)}
                </ul>

            </div>
        )
    }
    renderFooter() {
        const { todos,actions } = this.props;
        return (
            <Footer todos={todos} onShow={this.handleFilter.bind(this)} currentFilter={this.state.filter} clearComplete={actions.clearComplete} />
        )
    }
    render() {
        return (
            <div className="mainsection">
                {this.renderTodoList()}
                {this.renderFooter()}
            </div>

        )
    }
}


export default MainSection;