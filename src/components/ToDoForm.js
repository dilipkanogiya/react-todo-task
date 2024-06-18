import React, { useState } from "react";

const ToDoForm = ({ addTodo }) => {
    const [taskName, setTaskName] = useState('');
    const [description, setDescription] = useState('');
    const [status, setStatus] = useState('not completed');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (taskName.trim() !== '') {
            addTodo({
                taskName: taskName,
                description: description,
                status: status
            });
            setTaskName('');
            setDescription('');
            setStatus('not completed');
        }
    };

    return (
        <>
            <form className="row py-5" onSubmit={handleSubmit}>
                <div className="col-md-3">
                    <input className="form-control"
                        type="text"
                        placeholder="Task Name"
                        value={taskName}
                        onChange={(e) => setTaskName(e.target.value)}
                    />
                </div>
                <div className="col-md-3">
                    <input className="form-control"
                        type="text"
                        placeholder="Description"
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                    />
                </div>
                <div className="col-md-3">
                    <select className="form-control" value={status} onChange={(e) => setStatus(e.target.value)}>
                        <option value="not completed">Not Completed</option>
                        <option value="completed">Completed</option>
                    </select>
                </div>
                <div className="col-md-3">
                    <button type="submit" className="btn btn-primary mb-3 w-50">Add</button>
                </div>
            </form>
        </>
    );
}
export default ToDoForm;