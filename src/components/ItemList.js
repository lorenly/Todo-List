import React, { Component } from 'react'

export class ItemList extends Component {
    render() {
        const checkboxStyle = {
            marginLeft: '3%',
            float: 'left',
            transform: 'scale(3)'
        }

        const contentStyle = {
            
            fontSize: '50px',
            
        }

        const contentStyle2 = {
            fontSize: '50px',
            textDecoration: 'line-through'
        }


        return this.props.todos.map((todo) => (
            <div key = {todo.id}>
                <input onChange = {this.props.statusChange.bind(this, todo.id)} style = {checkboxStyle} type = "checkbox" />
                {todo.status ? <h1 style = {contentStyle2}>{todo.content}</h1> : <h1 style = {contentStyle}>{todo.content}</h1>}
            </div>
        ))
    }
}

export default ItemList
