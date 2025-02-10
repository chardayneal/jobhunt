export const calculateStat = (data, type) => {
  let counter = 0;
  
  switch(type) {
    case 'interviews':
      data.forEach((lead) => {
        lead.historyList.forEach((history) => {
          if (history.status === 'Interviewing') counter++;
        });
      });
      break;
    case 'offered':
      data.forEach((lead) => {
        lead.historyList.forEach((history) => {
          if (history.status === 'Offered') counter++;
        });
      });
      break;
    case 'applied':
      data.forEach((lead) => {
        lead.historyList.forEach((history) => {
          if (history.status === 'Applied') counter++;
        });
      });
      break;
    case 'tasks':
      data.forEach((task) => {
        if (task.isComplete) counter++;
      });
      break;
    default:
      return 0;
  }

  if (counter === 0) return 0;
  let value = counter / data.length * 100;
  return Math.round(value);
}