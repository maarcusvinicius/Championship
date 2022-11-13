import axios from 'axios';

export const api = axios.create({
  baseURL: 'http://26.78.49.240:3333'
})