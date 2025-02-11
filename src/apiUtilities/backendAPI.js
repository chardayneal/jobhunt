import axios from 'axios';

const kbaseURL = import.meta.env.VITE_BACKEND_URL;

// ------------------ USER API calls ------------------

export const createUser = (user) => {
  return axios.post(`${kbaseURL}/auth/signup`, user)
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      console.error(error);
    });
};

export const loginUser = (user) => {
  return axios.post(`${kbaseURL}/auth/signin`, user)
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      console.error(error);
    });
};

export const getUserByToken = (token) => {
  return axios.get(`${kbaseURL}/auth/token?id=${token}`)
    .then((response) => {
      const user = formatUserData(response.data);
      return user;
    })
    .catch((error) => {
      console.error(error);
    });
};

export const updateUser = (id, user) => {
  console.log(id, user);
  return axios.patch(`${kbaseURL}/users/${id}`, user)
    .then((response) => {
      return formatUserData(response.data);
    })
    .catch((error) => {
      console.error(error);
    });
};

const formatUserData = (user) => {
  const formattedUser = {
    id: user.id,
    name: user.name,
    email: user.email,
    leads: user.leads.map(formatLeadData),
    tasks: user.tasks.map(formatTaskData)
  };

  return formattedUser;
};

// ------------------ LEAD API calls ------------------

export const getLeadsByUserId = (userId) => {
  return axios.get(`${kbaseURL}/users/${userId}/leads`)
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      console.error(error);
    });
};

export const addNewLead = (id, lead) => {
  console.log(id, lead);
  return axios.post(`${kbaseURL}/users/${id}/leads`, lead)
    .then((response) => {
      return formatLeadData(response.data.leads.at(-1));
    })
    .catch((error) => {
      console.error(error);
    });
};

export const updateLeadInfo = (leadId, lead) => {
  return axios.patch(`${kbaseURL}/leads/${leadId}`, lead)
    .then((response) => {
      return formatLeadData(response.data);
    })
    .catch((error) => {
      console.error(error);
    });
};

export const updateLeadStatus = (leadId, newStatus) => {
  return axios.post(`${kbaseURL}/leads/${leadId}/history`, { status: newStatus })
    .then((response) => {
      return formatLeadData(response.data);
    })
    .catch((error) => {
      console.error(error);
    }
  );
};

export const deleteLead = (leadId) => {
  return axios.delete(`${kbaseURL}/leads/${leadId}`)
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      console.error(error);
    }
  );
};

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

// ------------------ TASK API calls ------------------

export const getTasksByUserId = (userId) => {
  return axios.get(`${kbaseURL}/users/${userId}/tasks`)
    .then((response) => {
      return response.data.map(formatTaskData);
    })
    .catch((error) => {
      console.error(error);
    });
};

export const updateTaskStatus = (taskId, newValue) => {
  const endpoint = newValue ? 'complete' : 'incomplete';
  return axios.patch(`${kbaseURL}/tasks/${taskId}/mark_${endpoint}`)
    .then((response) => {
    return formatTaskData(response.data);
    })
    .catch((error) => {
      console.error(error);
    });
};

export const addNewTask = (id, task) => {
  return axios.post(`${kbaseURL}/users/${id}/tasks`, task)
    .then((response) => {
      const newTask = formatTaskData(response.data.tasks.at(-1));
      return newTask;
    })
    .catch((error) => {
      console.error(error);
    });
};

export const deleteTask = (taskId) => {
  return axios.delete(`${kbaseURL}/tasks/${taskId}`)
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      console.error(error);
    }
  );
};

const formatTaskData = (task) => {
  return {
    id: task.id,
    text: task.text,
    date: new Date(task.date).toDateString(),
    isComplete: task.complete
  }
};


// ------------------ INSIGHT API calls ------------------

export const getInsightsByUserId = (userId) => {
  return axios.get(`${kbaseURL}/users/${userId}/insights`)
    .then((response) => {
      return response.data.map(formatInsightData);
    })
    .catch((error) => {
      console.error(error);
    });
}

export const addInsight = (userId, insight) => {
  return axios.post(`${kbaseURL}/users/${userId}/insights`, insight)
    .then((response) => {
      return formatInsightData(response.data.insights.at(-1));
    })
    .catch((error) => {
      console.error(error);
    });
}

export const deleteInsight = (insightId) => {
  return axios.delete(`${kbaseURL}/insights/${insightId}`)
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      console.error(error);
    });
}

export const formatInsightData = (insight) => {
  return {
    id: insight.id,
    date: new Date(insight.date).toDateString(),
    text: insight.text
  }
};

// ------------------ HISTORY calls ------------------

export const formatHistoryData = (history) => {
  return {
    date: new Date(history.date).toDateString(),
    status: history.status
  }
}