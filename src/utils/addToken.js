import axios from 'axios';

const addToken = token => {
  axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
};

export default addToken;
