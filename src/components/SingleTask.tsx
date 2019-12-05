import React, { FunctionComponent } from 'react';
import styled from 'styled-components';
import { Task } from './../models/task';

interface SingleTaskProps {
  readonly colored: boolean;
}

const SlingleTaskWrapper = styled.li<SingleTaskProps>`
width:100%;
max-width:600px;
margin: 0 auto;
border: ${props => props.colored ? '1px solid #A3B5A5' : '1px solid #B6B6C9' };
border-radius: 5px;
list-style-type: none;
padding:20px 0;
margin-bottom:10px;
background-color: ${props => props.colored ? '#F4FFF5' : '#F4F4FF' };
`;

interface Props {
  task: Task;
}

export const SingleTask: FunctionComponent<Props> = ({ task }) => (

  <SlingleTaskWrapper colored={task.id % 2 === 0}>
    {task.name}
  </SlingleTaskWrapper>
);
