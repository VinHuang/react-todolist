import React, { Component } from 'react';
import TodoItems from './TodoItems';
import AddTodoForm from './AddTodoForm';

class TodoList extends Component {
  render() {
    return (
      <div className="todoList">
        <h1>我是一個TodoList容器</h1>
        <h2>我組合了TodoItems以及AddTodoForm兩個元件</h2>
        <TodoItems />
        <AddTodoForm />
      </div>
    );
  }
}

export default TodoList;
