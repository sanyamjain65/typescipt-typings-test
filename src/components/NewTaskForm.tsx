import React, { FunctionComponent } from 'react';
import styled from 'styled-components';
import { Task } from './../models/task';

const InputData = styled.input`
  padding:20px;
  border: 1px solid lightcoral;
  border-bottom-left-radius: 10px;
  border-top-left-radius: 10px;
`;

const ButtonSubmit = styled.button`
  padding:20px;
  border: 1px solid lightcoral;
  border-bottom-right-radius: 10px;
  border-top-right-radius: 10px;
  background-color: lightcoral;
  color: white;
`;

interface Props {
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onAdd: (event: React.FormEvent<HTMLFormElement>) => void;
  task: Task;
}

export const NewTaskForm: FunctionComponent<Props> = ({
  onChange,
  onAdd,
  task
}) => (
    <form onSubmit={onAdd}>
      <InputData onChange={onChange} value={task.name} />
      <ButtonSubmit type='submit'>Add a task</ButtonSubmit>
    </form>
  );
