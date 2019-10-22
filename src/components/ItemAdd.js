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
            this.state.content = ''
        }
    }

    render() {
          const btnStyle = {
            width:'20%',
            height: '30px',
          }
        return (
            <div>
                <form onSubmit = {this.onSubmit}>
                    <div>
                    <input class="items" onChange = {this.onChange} type="text"  value={this.state.content}></input>
                    </div>
                    <button class="btnAddItems" type = "submit">ADD TODO</button>
                </form>
            </div>
        )
    }
}

export default ItemAdd
