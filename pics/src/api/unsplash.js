import axios from 'axios';

export default axios.create({
  baseURL: 'https://api.unsplash.com',
  headers: {
    Authorization: 'Client-ID wYJTammjZP-Bmb8xTUjj5szWb3XkHYJDcdHiUZ1dyVs'
  }
});