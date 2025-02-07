export const calculateInterviews = (leads) => {
    let counter = 0;

    leads.forEach((lead) => {
        lead.historyList.forEach((history) => {
            if (history.status === 'Interviewing') counter++;
        });
    });
    return counter / leads.length * 100;
};

export const calculateOffered = (leads) => {
    let counter = 0;

    leads.forEach((lead) => {
        lead.historyList.forEach((history) => {
            if (history.status === 'Offered') counter++;
        });
    });
    return counter / leads.length * 100;
}

export const calculateApplied = (leads) => {
    let counter = 0;

    leads.forEach((lead) => {
        lead.historyList.forEach((history) => {
            if (history.status === 'Applied') counter++;
        });
    });
    return counter / leads.length * 100;
}

export const calculateTasks = (tasks) => {
  let counter = 0;

  tasks.forEach((task) => {
    if (task.isComplete) counter++;

  });
  return counter / tasks.length * 100;
}