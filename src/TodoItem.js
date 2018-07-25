import React, { Component } from "react";

class TodoItem extends Component {
  render() {
    return (
      <div>
        <h4>{this.props.title}</h4>
        <p>{this.props.description}</p>
      </div>
    );
  }
}

export default TodoItem;
