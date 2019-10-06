import React, { Component } from 'react';
import './App.css';
import Todos from './components/Todos';
import Header from './components/layout/Header';
import AddTodo from './components/AddTodo';
import uuid from 'uuid';
import { BrowserRouter as Router, Route } from 'react-router-dom';

class App extends Component{

  // https://www.youtube.com/watch?v=sBws8MSXN7A parei em 38:00

  state = {
    todos: [
      {
        id: uuid.v4(),
        title: 'Viajar pra puta que o pariu',
        completed: false
      },
      {
        id: uuid.v4(),
        title: 'Criar paciência pra começar uma pós',
        completed: false
      },
      {
        id: uuid.v4(),
        title: 'Ficar rico vendendo herbalife',
        completed: false
      },
    ]
  }

  markComplete = (id) => {
    this.setState({ todos: this.state.todos.map(todo => {
        if(todo.id === id) {
          todo.completed = !todo.completed
        }
        return todo;
      }) })
  }

  deleteTodo = (id) => {
    this.setState({ todos: [...this.state.todos.filter(todo => todo.id !== id)]});
  }

  addTodo = (title) => {
    const newTodo = {
      id: uuid.v4(),
      title,
      completed: false
    }
    this.setState({ todos: [...this.state.todos, newTodo ]})
  }

  render() {
    // check state content: console.log(this.state.todos[1].title);
    return (
      <Router>
        <div className="App">
          <div className="container">
            <Header />
            <AddTodo addTodo={this.addTodo} />
            <Todos todos={ this.state.todos } markComplete={this.markComplete} deleteTodo={this.deleteTodo}/>
          </div>
        </div>
      </Router>
    );
  }
}

export default App;