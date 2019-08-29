import React from 'react';
import TodoList from "../TodoList/TodoList";
import './TodoManager.css';

class TodoManager extends React.Component {
    state = {
        text: null,
        todoList: [],
        isTodoEmpty: true
    };

    deleteHandler = itemToDelete => {
        let newItems = this.state.items.filter(newItem => {
            return newItem != itemToDelete
        });

        this.setState({
            items: newItems
        })
    };

    clearTodoList = () => {
        this.setState({
            todoList: [],
            isTodoEmpty: true
        });
    };

    textChangeHandler = event => {
        this.setState({
            text: event.target.value
        });
    };

    addBtnHandler = () => {
        this.setState({
            text: null,
            todoList: [...this.state.todoList, {label: this.state.text}],
            isTodoEmpty: false
        }, () => {
            this.refs.todo.value = ''
        });
    };

    render() {
        return (
            <div className='new-item-input'>
                <span>
                    <label>New Item</label>
                    <input onChange={this.textChangeHandler} ref="todo"/>
                </span>
                <button
                    disabled={!this.state.text}
                    onClick={this.addBtnHandler}>
                    Add
                </button>
                    <button
                        disabled={this.state.isTodoEmpty}
                        className='btn-clear'
                        onClick={this.clearTodoList}>
                        Clear
                    </button>

                <TodoList items={this.state.todoList} deleteHandler={this.deleteHandler}/>
            </div>
        );
    }
};

export default TodoManager;