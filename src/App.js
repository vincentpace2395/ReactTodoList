import React from 'react';
import TodoList from "./components/TodoList/TodoList";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        TodoList
        <TodoList />
        <TodoList />
        <TodoList />
        <TodoList />
      </header>
    </div>
  );
}

export default App;
