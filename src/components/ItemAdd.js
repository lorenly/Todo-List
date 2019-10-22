import React, { Component } from 'react'

export class ItemAdd extends Component {
    state = {
        content: ''
    }
    onChange = (e) => {
        this.setState({content: e.target.value})
    }

    onSubmit = (e) => {
        e.preventDefault()
        if (this.state.content !== '') {
            this.props.ItemAdd(this.state.content)
        }
    }

    render() {
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
            <div>
                <form onSubmit = {this.onSubmit}>
                    <input onChange = {this.onChange} style = {inputStyle} type = "text"></input>
                    <button style = {btnStyle} type = "submit">ADD TODO</button>
                </form>
            </div>
        )
    }
}

export default ItemAdd
