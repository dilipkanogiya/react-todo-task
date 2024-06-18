import { ToDoItem } from './ToDoItem';

// TodoList component for displaying a list of Todo items
export function ToDoList({ todos, updateStatus, deleteTodo }) {
  return (
    <div className="row">
      {todos.map(todo => (
        <ToDoItem
          key={todo.id}
          todo={todo}
          updateStatus={updateStatus}
          deleteTodo={deleteTodo} />
      ))}
    </div>
  );
}
