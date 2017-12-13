import React, { Component } from 'react';
import TodoItems from './TodoItems';
import AddTodoForm from './AddTodoForm';

class TodoList extends Component {
  constructor(props) {
    super(props);
    this.handleAddTodoItem = this.handleAddTodoItem.bind(this);
    this.handleRemoveTodoItem = this.handleRemoveTodoItem.bind(this);
    this.state = {todoItems: [{ id: 1, data: "do something" },{ id: 2, data: "do something other" }]};
  }  
  handleAddTodoItem(todoText){
    var items = this.state.todoItems;
    items.push({
        id: items[items.length - 1].id + 1,
        data: todoText
    });
    this.setState({todoItems: items});
  }
  handleRemoveTodoItem(index){
    var items = this.state.todoItems;
    items.splice(index,1);
    this.setState({todoItems: items});
  }

  render() {
    return (
      <div className="todoList">
        <TodoItems items={this.state.todoItems} removeItem={this.handleRemoveTodoItem}/>
        <AddTodoForm addItem={this.handleAddTodoItem}/>
      </div>
    );
  }
}

export default TodoList;
