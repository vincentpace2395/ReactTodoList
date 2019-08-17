import React from 'react';
import TodoList from "../TodoList/TodoList";
import './TodoManager.css';

class TodoManager extends React.Component {
    state = {
        text: null,
        todoList: []
    };

    clearTodoList = () => {
        this.setState({
            todoList: []
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
            todoList: [...this.state.todoList, {label: this.state.text}]
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
                {/*{this.state.todoList === [] ? null : (*/}
                    <button
                        disabled
                        className='btn-clear'
                        onClick={this.clearTodoList}>
                        Clear
                    </button>
                {/*)}*/}

                <TodoList items={this.state.todoList} />
            </div>
        );
    }
};

export default TodoManager;