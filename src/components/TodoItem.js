import React, { Component } from 'react';
import PropTypes from 'prop-types';

export class TodoItem extends Component {
    getStyle = () => {
        return {
            backgroundColor: '#f4f4f4',
            padding: '10px',
            borderBottom: '1px #ccc dotted',
            textDecoration: this.props.todo.completed ? 'line-through' : 'none'
        }
    }

    render() {
        const { id, title } = this.props.todo;
        return (
            <div style={this.getStyle()}>

                <p>
                    <input type="checkbox" onChange={this.props.markComplete.bind(this, id)}/> {' '}
                    { title }
                    <button onClick={this.props.deleteTodo.bind(this, id)} style={btnStyle}>x</button>
                </p>
            </div>
        )
    }
}

// PropTypes
TodoItem.propType = {
    todo: PropTypes.array.isRequired
}

const btnStyle = {
    backgroundColor: '#ff0000',
    border: 'none',
    color: '#fff',
    padding: '5px 11px',
    borderRadius: '50%',
    cursor: 'pointer',
    float: 'right'
}

export default TodoItem