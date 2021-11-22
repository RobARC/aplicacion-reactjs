import axios from 'axios';

export async function getUser() {
    console.log('entrando en getUser');
    try {
        const response = await axios.get(
            'https://618aac0d34b4f400177c480e.mockapi.io/api/v1/contactos'
        );
        safeLocalStorage('clientes', response.data);
        return response.data;
    } catch (error) {
        console.error(error);
    }
}

export function addUser(cliente) {
    // ler los datos del localStorage
    let users = readLocalStorage('clientes');
    // modificamos
    users.push(cliente);
    // guardamos nuevamente en el localStorage
    safeLocalStorage('clientes', users);
}

export function safeLocalStorage(key, data) {
    localStorage.setItem(key, JSON.stringify(data));
}

export function readLocalStorage(key) {
    return JSON.parse(localStorage.getItem(key));
}
