import React from 'react';
import AddItem from '../AddItem';
import TodoList from '../TodoList/TodoList';

class TodoForm extends React.Component {
    render () {
        return (
            <React.Fragment>
                <AddItem />
                <TodoList />
            </React.Fragment>
        );
    }
};

export default TodoForm;