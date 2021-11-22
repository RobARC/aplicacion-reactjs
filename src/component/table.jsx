import React from 'react';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';
import Table from 'react-bootstrap/Table';
import { Button } from 'react-bootstrap';

withReactContent(Swal);

export default function TableUsers({ users, setUsers }) {
  function deleteUser(e) {
    const userId = e.target.name;
    const newUser = users.filter((user) => user.id !== userId);
    setUsers(newUser);
  }

  async function updateUser(e) {
    let user = users.filter((user) => user.id === e.target.name)[0];
    const { value: formValues } = await Swal.fire({
      title: 'Multiple inputs',
      html: `
        <input id="swal-input1" class="swal2-input" value="${user.nombre}">
        <input id="swal-input2" class="swal2-input" value="${user.apellido}">
        <input id="swal-input3" class="swal2-input" value="${user.telefono}">
        <input id="swal-input4" class="swal2-input" value="${user.direccion}">
      `,
      focusConfirm: false,
      preConfirm: () => {
        return {
          nombre: document.getElementById('swal-input1').value,
          apellido: document.getElementById('swal-input2').value,
          telefono: document.getElementById('swal-input3').value,
          direccion: document.getElementById('swal-input4').value,
        };
      },
    });

    Object.assign(user, formValues);
    let newUser = users.filter((obj) => obj.id !== e.target.name);
    newUser.push(user);
    setUsers(newUser);
  }

  return (
    <div className="container">
      <hr />
      <h2 className="text-center">Tabla Clientes</h2>
      <table>
        <thead>
          <tr>
            <th>Nombre</th>
            <th>Apellido</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody></tbody>
      </table>
      <Table striped bordered hover size="sm">
        <thead>
          <tr>
            <th>Nombres</th>
            <th>Apellido</th>
            <th>Telefono</th>
            <th>Direccion</th>
            <th>Id</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr>
              <td>{user.nombre}</td>
              <td>{user.apellido}</td>
              <td>{user.telefono}</td>
              <td>{user.direccion}</td>
              <td>{user.id}</td>
              <td>
                <Button variant="primary" name={user.id} onClick={updateUser}>
                  edit
                </Button>{' '}
                <Button variant="primary" name={user.id} onClick={deleteUser}>
                  delete
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
}
