import React from 'react';
import { Button } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';

export default function FormUsers({ setUsers, users }) {
  function getUserId() {
    const ids = users.map((e) => parseInt(e.id));
    let max = Math.max(...ids);
    return (max + 1).toString();
  }
  function guardarUser(e) {
    e.preventDefault();
    setUsers([
      ...users,
      {
        nombre: e.target[0].value,
        apellido: e.target[1].value,
        telefono: e.target[2].value,
        direccion: e.target[3].value,
        id: getUserId(),
      },
    ]);
  }

  return (
    <div className="container">
      <Form onSubmit={guardarUser}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Nombres</Form.Label>
          <Form.Control type="text" placeholder="Nombres" required />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Apellido</Form.Label>
          <Form.Control type="text" placeholder="Apellido" required />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Telefono</Form.Label>
          <Form.Control type="text" placeholder="Telefono" required />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Direccion</Form.Label>
          <Form.Control type="text" placeholder="Direccion" required />
        </Form.Group>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </div>
  );
}
