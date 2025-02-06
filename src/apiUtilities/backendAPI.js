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
      return user;
    })
    .catch((error) => {
      console.error(error);
    });
}

// get leads by user id
export const getLeadsByUserId = (userId) => {
  return axios.get(`${kbaseURL}/users/${userId}/leads`)
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      console.error(error);
    });
}

// add a new lead for user
export const addNewLead = (id, lead) => {
  console.log(id, lead);
  return axios.post(`${kbaseURL}/users/${id}/leads`, lead)
    .then((response) => {
      console.log(response.data);
      return formatLeadData(response.data);
    })
    .catch((error) => {
      console.error(error);
    });
}

// get tasks by user id
export const getTasksByUserId = (userId) => {
  return axios.get(`${kbaseURL}/users/${userId}/tasks`)
    .then((response) => {
      return response.data.map(formatTaskData);
    })
    .catch((error) => {
      console.error(error);
    });
}

// update task status for user
export const updateTaskStatus = (taskId, newValue) => {
  const endpoint = newValue ? 'complete' : 'incomplete';
  return axios.patch(`${kbaseURL}/tasks/${taskId}/mark_${endpoint}`)
    .then((response) => {
    return formatTaskData(response.data);
    })
    .catch((error) => {
      console.error(error);
    });
}

// add a new task for user
export const addNewTask = (id, task) => {
  return axios.post(`${kbaseURL}/users/${id}/tasks`, task)
    .then((response) => {
      const newTask = formatTaskData(response.data.tasks.at(-1));
      return newTask;
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
    description: lead.description,
    location: lead.location,
    jobURL: lead.jobURL,
    status: lead.status
  };
};

const formatTaskData = (task) => {
  return {
    id: task.id,
    text: task.text,
    date: new Date(task.date).toDateString(),
    isComplete: task.complete
  }
};