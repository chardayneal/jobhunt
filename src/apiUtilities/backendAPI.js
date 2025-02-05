import axios from 'axios';

const kbaseURL = import.meta.env.VITE_BACKEND_URL;

// create a new user
export const createUser = (user) => {
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
      console.log(response.data);
      return response.data;
    })
    .catch((error) => {
      console.error(error);
    });
}

// get user if token valid
export const getUserByToken = (token) => {
  return axios.get(`${kbaseURL}/auth/token?id=${token}`)
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      console.error(error);
    });
}