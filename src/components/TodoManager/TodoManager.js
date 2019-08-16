import React from 'react';
import TodoList from "../TodoList/TodoList";
import './TodoManager.css';

class TodoManager extends React.Component {
    state= {
        text: null,
        todoList: []
    };

    textChangeHandler = event => {
        this.setState({
            text: event.target.value
        });
    };

    addBtnHandler = () => {
        this.setState({
            todoList: [...this.state.todoList, {label: this.state.text}]
        });
    };

    render() {
        return (
            <div className='new-item-input'>
                <span>
                    <label>New Item</label>
                    <input onChange={this.textChangeHandler}/>
                </span>
                <button
                    className='btn-add'
                    onClick={this.addBtnHandler}>
                    Add
                </button>
                <TodoList items={this.state.todoList} />
            </div>
        );
    }
};

export default TodoManager;