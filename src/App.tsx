import React, {useState} from 'react';
import './App.css';
import AddTaskForm from "./AddTaskForm/AddTaskForm";
import Task from "./Task/Task";

const App = () => {
  const [tasks, setTasks] = useState([
    {taskText: 'buy milk', id: 1123},
    {taskText: 'buy bread', id: 1124},
    {taskText: 'buy vodka', id: 1125}
  ]);

  const addTask = () => {
    const taskCopy = [...tasks];
    console.log(123);
    setTasks(taskCopy);
  };

  const removeTask = (id: number) => {
    const taskCopy = [...tasks];
    const index = tasks.findIndex(task => task.id === id);
    taskCopy.splice(index, 1);
    setTasks(taskCopy);
  };

  let taskList: React.ReactNode | null = null;

  taskList = tasks.map((task, index) =>{
    return(
      <Task
        key={task.id}
        taskId={task.id}
        taskText={task.taskText}
        onRemoveTask={() => removeTask(task.id)}
      >
      </Task>
    )
  })

  return (
    <div className="App">
      <AddTaskForm
        onAddTask={addTask}
      ></AddTaskForm>
      {taskList}
    </div>
  );
};
export default App;
