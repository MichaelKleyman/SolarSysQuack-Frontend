import Axios from 'axios';

export const BASE_URL = 'https://solarsysquack-i5fu.onrender.com'; // 'http://localhost:3001';

export const Client = Axios.create({ baseURL: BASE_URL });