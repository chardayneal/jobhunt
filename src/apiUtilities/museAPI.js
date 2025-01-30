import axios from "axios";
import DOMPurify from 'dompurify';
import {v4 as uuidv4} from 'uuid';
// const api_key = import.meta.env.MUSE_API_KEY;

const kbaseURL = 'https://www.themuse.com/api/public/jobs';

export const getMuseLeads = (queryParams) => {
  return axios.get(kbaseURL, {params: queryParams})
      .then((response) => {
        console.log(response);
        return response.data.results;
      })
      .catch((error) => {
        console.error(error);
      });

};

export const getMuseLeadById= (id) => {
  return axios.get(`${kbaseURL}/${id}`)
      .then((response) => {
        return response.data;
      })
      .catch((error) => {
        console.error(error);
      });
};


export const formatLead = (lead) => {
  const date = new Date(lead.publication_date.slice(0, 10));

  return {
    id: uuidv4(),
    museId: lead.id,
    name: lead.name,
    company: lead.company.name,
    location: lead.locations[0].name,
    level: lead.levels[0].name,
    jobPostingDate: date.toDateString(),
    description: DOMPurify.sanitize(lead.contents),
    jobURL: lead.refs.landing_page
  }
};
