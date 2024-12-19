import axios from 'axios';

export const api = axios.create({
  baseURL: 'https://book-app-55wx.onrender.com/api/books',
});
