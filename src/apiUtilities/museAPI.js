import axios from "axios";
import DOMPurify from 'dompurify';
// const api_key = import.meta.env.MUSE_API_KEY;

const kbaseURL = 'https://www.themuse.com/api/public/jobs';

export const getMuseLeads = (pageCount) => {
  return axios.get(kbaseURL, {
          params: {
            page: pageCount,
          }
        })
      .then((response) => {
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
    id: lead.id,
    name: lead.name,
    company: lead.company.name,
    location: lead.locations[0].name,
    level: lead.levels[0].name,
    jobPostingDate: date.toDateString(),
    description: DOMPurify.sanitize(lead.contents),
    jobURL: lead.refs.landing_page
  }
};
