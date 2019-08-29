import React from 'react';
import TodoItem from "../TodoItem/TodoItem";

class TodoList extends React.Component {
    onHandleDelete = item => {
        this.props.deleteHandler(item);
    };

    render() {
        return (
            <div>
                {this.props.items.map(item => {
                    return (
                        <React.Fragment>
                            <TodoItem label={item.label} />
                        </React.Fragment>
                    )


                })}

            </div>
        );
    }
};

export default TodoList;