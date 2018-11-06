import React, { Component } from 'react';
import { connect } from "react-redux";
import { addTodo, removeTodo } from './actions/index';

const mapStateToProps = state => {
    return { todos: state.todos };
};

const mapDispatchToProps = dispatch => {
  return {
    addTodo: todo => dispatch(addTodo(todo)),
    removeTodo: todo => dispatch(removeTodo(todo)),
  };
};

class TodoList extends Component {

  state = {
    todoInputValue: ''
  }

  handleOnClick = () => {
    const id = Math.floor((Math.random() * 1000000)+1); // Can collide.
    const body = this.state.todoInputValue;
    this.props.addTodo({ id, body });
    this.setState({ todoInputValue: '' });
  }

  handleOnTodoInputChange = event => {
    const todoInputValue = event.target.value;
    this.setState({ todoInputValue });
  }

  handleRemoveTodo = todo => {
    this.props.removeTodo(todo);
  }

  render() {
    const todos = this.props.todos.map(todo => 
      (<div key={todo.id} onClick={() => this.handleRemoveTodo(todo)}>
          <p>{todo.body}</p>
      </div>)
    );

    return (
      <div>
        <input type="text" value={this.state.todoInputValue} onChange={this.handleOnTodoInputChange}/>
        <button onClick={this.handleOnClick}>Add todo</button>
        {todos}
      </div>
    )
  }
}

const List = connect(mapStateToProps, mapDispatchToProps)(TodoList);
export default List;