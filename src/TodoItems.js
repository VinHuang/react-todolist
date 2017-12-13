import React, { Component } from 'react';

class TodoItems extends Component {
  constructor(props) {
    super(props);
    this.handleRemoveTodoItem = this.handleRemoveTodoItem.bind(this);
  }  
  handleRemoveTodoItem(e){
    this.props.removeItem(e.target.getAttribute('data-index'));
  }

  render() {
    var displayItems = this.props.items.map(function(item,index) {
      return (<li key={item.id}><span className="item">{item.data}</span><button className="button is-success" data-index={index} onClick={this.handleRemoveTodoItem}>done</button></li>);
    }.bind(this));

    return (
      <div className="itemlist">
        <ol>
          {displayItems}
        </ol>
      </div>
    );
  }
}

export default TodoItems;
