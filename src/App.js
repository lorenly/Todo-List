import React, {Component} from 'react'
import uuid from 'uuid'
import './App.css';
import ItemList from './components/ItemList'
import ItemAdd from './components/ItemAdd'
class App extends Component {
  
  state = {
    content: '',
    todos: []
  }

  
  ItemAdd = (content) => {
    const newTodo = {
      id: uuid.v4(),
      content: content,
      status: false
    }
    this.setState({todos: [...this.state.todos, newTodo]})
  }
  
  statusChange = (id) => {
    this.setState({todos: this.state.todos.map(todo => {
      if(todo.id === id){
        todo.status = !todo.status
      }
      return todo;
    })})
    console.log(this.state.todos);
  }

  render() {    

    return (
      <div class="todos">
        <h1 class="todoTW">TODO LIST</h1>
        
        <ItemAdd ItemAdd = {this.ItemAdd} />

        <ItemList statusChange = {this.statusChange}  
                  todos = {this.state.todos} />
        
      </div>
    );
  }
}

export default App;
