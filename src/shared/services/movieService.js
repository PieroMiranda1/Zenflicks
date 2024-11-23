import axios from 'axios';

const apiClient = axios.create({
    baseURL: 'https://zenflicks-fake-api.onrender.com/api/v1',
    withCredentials: false,
    headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
    }
});

export default {
    getMovies() {
        return apiClient.get('/content');
    },
    getRecentMovies() {
        return apiClient.get('/content-recent');
    },
    getForum() {
        return apiClient.get('/forums');
    }
};
