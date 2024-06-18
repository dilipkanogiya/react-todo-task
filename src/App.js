import logo from './logo.svg';
import './App.css';
import { useState } from "react";
import ToDoForm from './components/ToDoForm';
import { ToDoList } from './components/ToDoList';

function App() {
  const [todos, setTodos] = useState([]);

  const addTodo = (newTodo) => {
    setTodos([...todos, { id: Date.now(), ...newTodo }]);
  };

  const deleteTodo = (id) => {
    const updatedTodos = todos.filter(todo => todo.id !== id);
    setTodos(updatedTodos);
  };

  const updateStatus = (id, newStatus) => {
    const updatedTodos = todos.map(todo => {
      if (todo.id === id) {
        todo.status = newStatus;
      }
      return todo;
    });
    setTodos(updatedTodos);
  };
  return (
    <div className="App">
      <div className="container">
        <div className="row py-5">
          <h1 className="text-center">Todo App</h1>
          <ToDoForm addTodo={addTodo} />
        </div>
        {/* <div className="row py-4"> */}
        <ToDoList
          todos={todos}
          updateStatus={updateStatus}
          deleteTodo={deleteTodo}
        />
        {/* </div> */}
      </div>
    </div>
  );
}

export default App;