import Axios from 'axios';

export const BASE_URL = 'http://localhost:3001';

export const Client = Axios.create({ baseURL: BASE_URL });