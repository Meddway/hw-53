import React from "react";

interface IAddTaskFormProps extends React.PropsWithChildren {
  onAddTask: React.MouseEventHandler;
}

const AddTaskForm: React.FC<IAddTaskFormProps> = props => {
  return (
    <div>
      <input type="text" placeholder="Add new task"/>
      <button onClick={props.onAddTask}>Add</button>
    </div>
  );
};

export default AddTaskForm;