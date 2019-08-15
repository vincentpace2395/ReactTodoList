import React from 'react';
import TodoList from '../TodoList/TodoList';
import './NewItem.css';

class NewItem extends React.Component {
    state = {
        text: null,
        todoList: []
    };

    addBtnHandler = () => {
        /*{Add new label with this.state.text}*/
        return (
            this.setState({
                todoList: [...this.state.todoList, {label: this.state.text}]
            })
        );
    };

    textChangeHandler = event => {
        return (
            this.setState({
                text: event.target.value
            }, () => {
                console.log(this.state.text)
            })
        )
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

export default NewItem;