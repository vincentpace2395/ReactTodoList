import React from 'react';
import './TodoItem.css';

class TodoItem extends React.Component {
    render() {
        return (
            <div className='todo-item'>
                <input type="checkbox" />
                <label>
                    {this.props.label}
                </label>
                <button style={{backgroundColor: 'red', borderRadius: '4px', float: 'right', height: '20px'}}>Remove</button>
            </div>
        );
    }
};

export default TodoItem;