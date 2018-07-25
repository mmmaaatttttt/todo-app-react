import React, { Component } from "react";
import TodoItem from "./TodoItem";
import NewTodoForm from "./NewTodoForm";
import "./App.css";

class App extends Component {
  state = {
    todos: [
      {
        title: "first",
        description: "this is the first todo"
      },
      {
        title: "second",
        description: "this is the second todo"
      }
    ]
  };

  handleNewTodo = newTodo => {
    this.setState({ todos: [newTodo, ...this.state.todos] });
  };

  render() {
    let todos = this.state.todos.map(todo => (
      <TodoItem title={todo.title} description={todo.description} />
    ));
    return (
      <div className="App">
        <h1>Here are my todos:</h1>
        <NewTodoForm addTodo={this.handleNewTodo} />
        {todos}
      </div>
    );
  }
}

export default App;
