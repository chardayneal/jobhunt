import axios from 'axios';

const kbaseURL = import.meta.env.VITE_BACKEND_URL;

// create a new user
export const createUser = (user) => {
  console.log(kbaseURL);
  return axios.post(`${kbaseURL}/auth/signup`, user)
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      console.error(error);
    });
};

// login user
export const loginUser = (user) => {
  return axios.post(`${kbaseURL}/auth/signin`, user)
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      console.error(error);
    });
}