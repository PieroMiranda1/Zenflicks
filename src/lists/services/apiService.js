import axios from 'axios';

const API_URL = 'https://zenflicks-fake-api.onrender.com/api/v1';

export default {
    // Obtener contenido por ID
    async getContentById(id) {
        try {
            const response = await axios.get(`${API_URL}/content/${id}`);
            return response.data;
        } catch (error) {
            console.error('Error fetching content:', error);
            return null;
        }
    },

    // Autenticar usuario por nombre de usuario y contraseña
    async authenticateUser(username, password) {
        try {
            const response = await axios.get(`${API_URL}/users`);
            const users = response.data;
            const user = users.find(user => user.userName === username && user.password === password);
            if (user) {
                // Guardar el usuario en el localStorage con el nombre 'currentUser'
                localStorage.setItem('currentUser', JSON.stringify(user));
                return user; // Devuelve el usuario si la autenticación es correcta
            } else {
                throw new Error("Invalid username or password");
            }
        } catch (error) {
            console.error("Authentication failed:", error.message);
            throw error;
        }
    },

    // Obtener usuario autenticado desde el localStorage
    getLoggedUser() {
        const storedUser = localStorage.getItem('currentUser');
        if (storedUser) {
            try {
                return JSON.parse(storedUser); // Devuelve el usuario parseado desde localStorage
            } catch (error) {
                console.error("Error parsing logged user from localStorage", error);
                return null;
            }
        }
        return null; // Si no hay usuario logueado
    },

    // Cerrar sesión y eliminar al usuario del localStorage
    logout() {
        localStorage.removeItem('currentUser');
    }
};


import apiService from './apiService';

apiService.authenticateUser('username', 'password')
    .then(user => {
        console.log('User authenticated:', user);
    })
    .catch(error => {
        console.error('Authentication failed:', error.message);
    });

const loggedUser = apiService.getLoggedUser();
if (loggedUser) {
    console.log('Logged in user:', loggedUser);
} else {
    console.log('No user is logged in');
}

apiService.logout();
console.log('User has been logged out');


