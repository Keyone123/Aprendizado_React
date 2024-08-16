import React from 'react';
import './App.css';
import Navbar from "./components/Navbar/Navbar";
import Tasklist from "./components/Tasklist/Tasklist";

const Task = {
    id: 1,
    title: String,
    description: String,
    date: String,
    status: "Pendente"
}

function App() {
    const [tasks, setTasks] = React.useState([Task]);

    const addTask = (title: any, description: any, date: any) => {
        const newTask = {
            id: tasks.length + 1,
            title,
            description,
            date,
            status: "Pendente"
        }
        setTasks(existingTasks => {
            return[...existingTasks, newTask];
        });
    }

  return (
    <div className="App">
        <Navbar />
        <Tasklist title="Pendente" onAddTask={addTask} task={tasks}/>
        <Tasklist title="Em Andamento" onAddTask={addTask} task={tasks}/>
        <Tasklist title="Concluído" onAddTask={addTask} task={tasks}/>
    </div>
  );
}

export default App;
