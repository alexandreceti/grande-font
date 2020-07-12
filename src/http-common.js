import axios from 'axios';

//Define a URL base da origem para consumo do servico
export default axios.create({
  baseURL: 'https://still-brook-75941.herokuapp.com/',
  headers: {
    'Content-type': 'application/json',
  },
});
