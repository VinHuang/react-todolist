import React, { Component } from 'react';

class AddTodoForm extends Component {
  constructor(props) {
    super(props);
    this.handleTodoChange = this.handleTodoChange.bind(this);
    this.handleAddTodoItem = this.handleAddTodoItem.bind(this);
    this.state = {todoText: ""};
  }  
  handleTodoChange(e){
    this.setState({todoText: e.target.value});        
  }
  handleAddTodoItem(e){
    this.props.addItem(this.state.todoText);
  }

  render() {
    return (
      <div>
        <input 
          type="text" 
          value={this.state.todoText} 
          onChange={this.handleTodoChange}/>
        <button
          onClick={this.handleAddTodoItem}>Add Todo Item
        </button>
      </div>
    );
  }
}

export default AddTodoForm;
