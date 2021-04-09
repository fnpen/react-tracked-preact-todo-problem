import React from 'react';
import { useFlasher } from '../hooks/useFlasher';

type Props = {
  onClick: (e: React.MouseEvent) => void;
  completed: boolean;
  text: string;
};

const Todo: React.FC<Props> = ({ onClick, completed, text }) => (
  <li
    ref={useFlasher()}
    onClick={onClick}
    role="presentation"
    style={{
      textDecoration: completed ? 'line-through' : 'none',
      cursor: 'pointer',
    }}
  >
    {text}
  </li>
);

export default Todo;
