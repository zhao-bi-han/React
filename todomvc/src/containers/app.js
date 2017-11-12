import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as TodoActions from '../actions/index';
import Header from '../components/header';
import MainSection from '../components/miansection';

const App = ({todos,actions}) => {
    return (
        <div className="wrap">
            <Header addTodo={actions.addTodo} completeAll={actions.completeAll} todos={todos}/>
             <MainSection  todos={todos} actions={actions}/>
        </div>
    )
}

 


const mapStateToProps = (state, ownProps) => {
    return {
        todos: state.todos
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        actions: bindActionCreators(TodoActions, dispatch)
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(App)