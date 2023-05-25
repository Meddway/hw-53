import React from 'react';

interface ITaskProps extends React.PropsWithChildren {
  taskText: string;
  taskId: number;
  onRemoveTask: React.MouseEventHandler;
}

const Task: React.FC<ITaskProps> = props => {
  return (
    <div>
      <div>
        <span>{props.taskText}</span>
        <button onClick={props.onRemoveTask}>Remove</button>
      </div>
    </div>
  );
};

export default Task;