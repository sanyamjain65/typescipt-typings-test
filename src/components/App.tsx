import React, { Component } from 'react';
import { Task } from './../models/task';
import { NewTaskForm } from './NewTaskForm';
import { TaskList } from './TaskList';
import Wrapper from './wrappers/Wrapper';

interface State {
  newTask: Task;
  tasks: Task[];
}

class App extends Component<{}, State> {
  state = {
    newTask: {
      id: 1,
      name: ''
    },
    tasks: []
  };

  addTask = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    this.setState(previousState => ({
      newTask: {
        id: previousState.newTask.id + 1,
        name: ''
      },
      tasks: this.state.newTask.name ? [...previousState.tasks, previousState.newTask] : [...previousState.tasks]
    }));
  }

  handleTaskChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({
      newTask: {
        ...this.state.newTask,
        name: event.target.value
      }
    });
  }

  render() {
    return (
      <Wrapper>
        <h2>Hello React TS!</h2>
        <NewTaskForm
          task={this.state.newTask}
          onAdd={this.addTask}
          onChange={this.handleTaskChange}
        />
        <TaskList tasks={this.state.tasks} />
      </Wrapper>
    );
  }
}
export default App;
