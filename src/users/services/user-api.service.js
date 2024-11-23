import http from '../../shared/services/http-common';

export class UserApiService {

    createUser(userResource) {
        return http.post('/users', userResource);
    }

    authenticateUser(username, password) {
        return http.get('/users')
            .then(response => {
                const users = response.data;
                const user = users.find(user => user.userName === username && user.password === password);
                if (user) {
                    return user; // Devuelve el usuario si coincide
                } else {
                    throw new Error("Invalid username or password"); // Lanza un error si no coincide
                }
            })
            .catch(error => {
                console.error("Authentication failed: ", error.message);
                throw error;
            });
    }
}
