import React from 'react';
import AddItem from "./components/AddItem";
import TodoList from "./components/TodoList/TodoList";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <AddItem />
        <TodoList />
      </header>
    </div>
  );
}

export default App;
