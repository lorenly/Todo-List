import React, {Component} from 'react'
import uuid from 'uuid'
import './App.css';

class App extends Component {
  
  state = {
    content: '',
    todos: [
      
    ]
  }

  onSubmit = (e) => {
    e.preventDefault()
    if (this.state.content !== '') {
      this.state.todos.push({
        id: uuid.v4(),
        content: this.state.content,
        status: false
      })
    }
    console.log(this.state.todos)
  }

  onChange = (e) => {
    this.setState({content: e.target.value})
    console.log(this.state.content)
  }


  render() {

    const headerStyle = {
      fontSize: '80px',
    }

    const wrapperStyle = {
      backgroundColor: '#000',
      color: 'white',
      textAlign: 'center'
    }

    const inputStyle = {
      width:'100%',
      height: '50px',
      fontSize: '30px',
      textAlign: 'center'
    }

    const btnStyle = {
      width:'100%',
      height: '50px',
    }

    return (
      <div style = {wrapperStyle}>
        <h1 style = {headerStyle}>TODO TW</h1>
        
        <form onSubmit = {this.onSubmit}>
          <input onChange = {this.onChange} style = {inputStyle} type = "text"></input>
          <button style = {btnStyle} type = "submit">ADD TODO</button>
        </form>
        
      </div>
    );
  }
}

export default App;
