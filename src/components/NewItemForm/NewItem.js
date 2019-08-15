import React from 'react';
import './NewItem.css';
import TodoItem from "../TodoItem/TodoItem";

class NewItem extends React.Component {
    state = {
        text: null
    };

    addBtnHandler = () => {
        /*{Add new label with this.state.text}*/
        return (
            <TodoItem label={this.state.text} />
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
            </div>
        );
    }
};

export default NewItem;