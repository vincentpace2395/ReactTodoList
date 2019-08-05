import React from 'react';
import TodoItem from "../TodoItem/TodoItem";

class TodoList extends React.Component {
    render() {
        return (
            <div>
                <TodoItem />
                {/*
                    1. add todo
                    2. display todo
                    3. cross off todo
                    4. show number of active todos
                    5. filter all/active/complete
                    6. delete todo
                    7. delete all complete
                        7.1. only show if at least one is complete
                    8. button to toggle all on/off
                 */}
            </div>
        );
    }
};

export default TodoList;