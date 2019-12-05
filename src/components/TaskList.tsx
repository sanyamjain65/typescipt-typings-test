import React, { FunctionComponent } from 'react';
import { Task } from './../models/task';
import { SingleTask } from './SingleTask';

interface Props {
  tasks: Task[];
}

export const TaskList: FunctionComponent<Props> = ({ tasks }) => (

  <ul style={{padding: 0}}>
    {tasks.map(task => (
      <SingleTask key={task.id} task={task} />
    ))}
  </ul>

);
