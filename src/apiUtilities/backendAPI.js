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
      const user = formatUserData(response.data);
      console.log(user);
      return user;
    })
    .catch((error) => {
      console.error(error);
    });
}

// format the user data
const formatUserData = (user) => {
  const formattedUser = {
    id: user.id,
    name: user.name,
    email: user.email,
    leads: user.leads.map(formatLeadData),
    tasks: user.tasks.map(formatTaskData)
  };

  return formattedUser;
}

const formatLeadData = (lead) => {
  return {
    id: lead.id,
    title: lead.title,
    company: lead.company,
    level: lead.level,
    category: lead.category,
    description: lead.description,
    location: lead.location,
    jobURL: lead.jobURL,
    jobPostingDate: lead.jobPostingDate,
    status: lead.status,
    userId: lead.userId
  };
};

const formatTaskData = (task) => {
  return {
    id: task.id,
    text: task.text,
    date: task.date,
  }
};