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
      <div className="field has-addons">
        <div className="control is-primary">
          <input 
            className="input is-primary" 
            type="text" 
            placeholder="Input Item Name" 
            value={this.state.todoText}
            onChange={this.handleTodoChange}/>
        </div>
        <div className="control">
          <a 
            className="button is-primary"
            onClick={this.handleAddTodoItem}>
              Add Todo Item
          </a>
        </div>
      </div>      
    );
  }
}

export default AddTodoForm;
