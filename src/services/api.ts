import axios from 'axios';

const api = axios.create({
  baseURL: 'https://ignite-desafio4-fakeapi.herokuapp.com' || 'http://localhost:3333',
});

export default api;
