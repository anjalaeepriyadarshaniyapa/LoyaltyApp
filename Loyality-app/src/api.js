// api.js
import axios from 'axios';

const instance = axios.create({
  baseURL: 'http://localhost:8080', // replace with your API base URL
});

export default instance;
