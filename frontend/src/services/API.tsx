import axios from 'axios';
// require('dotenv').config();
export default axios.create({
  baseURL: 'https://quiet-sands-60458.herokuapp.com/',
  headers: {
    'content-Type': 'application/json',
  },
});
