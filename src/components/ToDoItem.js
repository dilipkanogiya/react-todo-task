// TodoItem component for displaying individual Todo items
export function ToDoItem({ todo, updateStatus, deleteTodo }) {
  return (
    <div className="col-md-4">
      <div className="card bg-success-1">
        <div className="card-body text-left">
          <div className="card-title"><b>Name:</b> {todo.taskName}</div>
          <p className="card-text"><b>Description:</b> {todo.description}</p>
          <div className="card-subtitle mb-2 text-body-secondary">
            Status: <select onChange={() => updateStatus(todo.id, todo.status === 'completed' ? 'not completed' : 'completed')}>
                    <option value='not completed'>Not Completed</option>
                    <option value='completed'>Completed</option>
                  </select>
          </div>
          <div className='d-flex justify-content-end'>
            <button onClick={() => deleteTodo(todo.id) } className='btn btn-success'>Edit</button>
            <button onClick={() => deleteTodo(todo.id)} className='btn btn-danger mx-2'>Delete</button>
          </div>
          
        </div>
      </div>
    </div>
  );
}
