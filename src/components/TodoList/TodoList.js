import React from 'react';
import TodoItem from "../TodoItem/TodoItem";

class TodoList extends React.Component {
    render() {
        return (
            <div>
                {this.props.items.map(item => <TodoItem label={item.label} />)}
            </div>
        );
    }
};

export default TodoList;