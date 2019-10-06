import React, { Component } from 'react';
import TodoItem from "./TodoItem";
// import './Todos.css';
import PropTypes from 'prop-types';

class Todos extends Component{
    render() {
        // checkout your properties: console.log(this.props.todos);
        return this.props.todos.map((todo) => (
           <TodoItem key={ todo.id } todo={ todo } markComplete={this.props.markComplete} deleteTodo={this.props.deleteTodo} />
        ));
    }
}

// PropTypes
Todos.propType = {
    todos: PropTypes.array.isRequired
}

export default Todos;