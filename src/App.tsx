import React, {useState} from 'react';
import './App.css';
import AddTaskForm from "./AddTaskForm/AddTaskForm";
import Task from "./Task/Task";
import task from "./Task/Task";

const App = () => {
  const [tasks, setTasks] = useState([
    {taskText: 'buy milk', id: 1123},
    {taskText: 'buy bread', id: 1124},
    {taskText: 'buy vodka', id: 1125}
  ]);

  let taskList: React.ReactNode | null = null;


  taskList = tasks.map((task, index) =>{
    return(
      <Task
        taskId={task.id}
        taskText={task.taskText}
      >
      </Task>
    )
  })

  return (
    <div className="App">
      <AddTaskForm></AddTaskForm>
      {taskList}
    </div>
  );
};
export default App;
