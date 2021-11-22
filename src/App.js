import React, { useEffect, useState } from 'react';
import { getUser, safeLocalStorage } from './service-user';
import TableUsers from './component/table';
import FormUsers from './component/form';

import './style.css';

export default function App() {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        console.log('users Ha cambiado', users);
        safeLocalStorage('clientes', users);
    }, [users]);

    useEffect(() => {
        getUser().then((dataUser) => setUsers(dataUser));
    }, []);

    return (
        <div className="container">
            <h1 className="text-center">Bienvenidos a Technisupport</h1>
            <FormUsers setUsers={setUsers} users={users} />
            <TableUsers users={users} setUsers={setUsers} />
        </div>
    );
}