import React from 'react';
import { useParams } from 'react-router-dom';

import TodoInfo from '../../components/Todo/TodoInfo';

export default function Todo() {
  const { id } = useParams();
  return (
    <div>
      <TodoInfo todoId={id} />
    </div>
  );
}
