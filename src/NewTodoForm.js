import React, { Component } from "react";

class NewTodoForm extends Component {
  handleSubmit = e => {
    e.preventDefault();
    let newTodo = {
      title: e.target.title.value,
      description: e.target.description.value
    };
    this.props.addTodo(newTodo);
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input type="text" name="title" placeholder="title" />
        <input type="text" name="description" placeholder="description" />
        <input type="submit" value="submit" />
      </form>
    );
  }
}

export default NewTodoForm;
