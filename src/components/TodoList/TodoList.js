import React from 'react';
import TodoItem from "../TodoItem/TodoItem";

class TodoList extends React.Component {
    render() {
        return (
            <div>
                {this.props.items.map(item => {
                    return (
                        <React.Fragment>
                            <TodoItem label={item.label} />

                            <button
                                onClick={this.props.deleteHandler.bind(this, item)}
                                style={{backgroundColor: 'red', borderRadius: '4px', float: 'right', height: '20px'}}>
                                Remove
                            </button>
                        </React.Fragment>
                    )


                })}

            </div>
        );
    }
};

export default TodoList;