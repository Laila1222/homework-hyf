import React, {Component} from 'react';
import TodoItems from './TodoItems';

class Todos extends Component {
  render() {
    console.log(this.props.todos);
    return this.props.todos.map(todo => (
      <TodoItems
        key={todo.id}
        todo={todo}
        checked={this.props.checked}
        delete={this.props.delete}
      />
    ));
  }
}

export default Todos;
