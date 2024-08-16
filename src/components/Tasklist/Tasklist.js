import React, { useState } from "react";
import "./Tasklist.css";
import PropTypes from "prop-types";

export default function Tasklist({ title, task, onAddTask }) {
    const [taskTitle, setTaskTitle] = useState("");
    const [taskDesc, setTaskDesc] = useState("");
    const [taskDate, setTaskDate] = useState("");
    const [expandedTask, setExpandedTask] = useState(null);

    const handleAddTask = (event) => {
        event.preventDefault();
        onAddTask(taskTitle, taskDesc, taskDate);
        setTaskTitle("");
        setTaskDesc("");
        setTaskDate("");
    };

    const toggleForm = () => {
        const form = document.getElementById("task-form");
        form.style.display = form.style.display === "none" || form.style.display === "" ? "block" : "none";
    };

    const toggleTaskDetails = (taskId) => {
        setExpandedTask(expandedTask === taskId ? null : taskId);
    };

    return (
        <div className="tasklist">
            <div className="tasklist-header">
                <h2>{title}</h2>
                <button className="btn btn-add" onClick={toggleForm}>Add Task</button>
            </div>
            <div id="task-form" className="tasklist-form">
                <form onSubmit={handleAddTask}>
                    <div className="form-group">
                        <label htmlFor="task-title">Título</label>
                        <input
                            type="text"
                            id="task-title"
                            value={taskTitle}
                            onChange={(e) => setTaskTitle(e.target.value)}
                            placeholder="Digite o título da tarefa"
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="task-desc">Descrição</label>
                        <textarea
                            id="task-desc"
                            value={taskDesc}
                            onChange={(e) => setTaskDesc(e.target.value)}
                            placeholder="Digite a descrição da tarefa"
                        ></textarea>
                    </div>
                    <div className="form-group">
                        <label htmlFor="task-date">Data</label>
                        <input
                            type="date"
                            id="task-date"
                            value={taskDate}
                            onChange={(e) => setTaskDate(e.target.value)}
                            placeholder="Digite a data da tarefa"
                        />
                    </div>
                    <button type="submit" className="btn btn-save">
                        Salvar
                    </button>
                </form>
            </div>
            <div className="tasklist-body">
                {task
                    .filter((taskItem) => taskItem.status === title)
                    .map((taskItem) => (
                        <div className="task" key={taskItem.id}>
                            <div className="task-title">
                                {taskItem.title}
                                <button className="btn btn-toggle" onClick={() => toggleTaskDetails(taskItem.id)}>
                                    {expandedTask === taskItem.id ? "▲" : "▼"}
                                </button>
                            </div>
                            {expandedTask === taskItem.id && (
                                <div className="task-details">
                                    <p>{taskItem.description}</p>
                                    <p>Data: {taskItem.date}</p>
                                </div>
                            )}
                            <div className="task-actions">
                                <button className="btn btn-edit">Editar</button>
                                <button className="btn btn-delete">Deletar</button>
                            </div>
                        </div>
                    ))}
            </div>
        </div>
    );
}

Tasklist.propTypes = {
    title: PropTypes.string.isRequired,
    onAddTask: PropTypes.func.isRequired,
    task: PropTypes.array.isRequired,
};
