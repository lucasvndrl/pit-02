import React, { useState, useEffect } from 'react';
import { Card } from 'react-bootstrap';
import axios from '../../utils/api';

export default function TodoInfo({ todoId }) {
  const [todo, setTodo] = useState({});

  const fetchTodos = async () => {
    const response = await axios.get(`/todo?id=${todoId}`);
    // console.log(response.data[0]);
    if (response.data[0]) {
      setTodo(response.data[0]);
    }
  };

  useEffect(() => {
    fetchTodos();
    // console.log(todo);
  }, []);

  return (
    <div>
      <Card style={{ width: '18rem' }}>
        <Card.Body>
          <Card.Title>Todo {todoId}</Card.Title>
          <Card.Subtitle className="mb-2 text-muted">Informações</Card.Subtitle>
          <Card.Text>
            <h2>{todo.title}</h2>
          </Card.Text>
          <Card.Link href="/Todo">Voltar</Card.Link>
        </Card.Body>
      </Card>
    </div>
  );
}
