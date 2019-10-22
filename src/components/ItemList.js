import React, { Component } from 'react'

export class ItemList extends Component {
    render() {
        const contentStyle = {
            marginRight: '20%',
            fontSize: '30px',
            
        }

        const contentStyle2 = {
            marginRight: '20%',
            fontSize: '30px',
            textDecoration: 'line-through'
        }


        return this.props.todos.map((todo) => (
            <div key = {todo.id}>
                <input class="checkBox" onChange = {this.props.statusChange.bind(this, todo.id)} type = "checkbox" />
                {todo.status ? <span style = {contentStyle2}>{todo.content}</span> : <span style = {contentStyle}>{todo.content}</span>}
            </div>
        ))
    }
}

export default ItemList
