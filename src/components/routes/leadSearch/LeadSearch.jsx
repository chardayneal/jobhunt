import { useState, useEffect } from "react";
import { useNavigate } from "react-router";
import MuseHeader from "./MuseHeader";
import MuseResults from "./MuseResults";
import MuseLeadView from "./MuseLeadView";
import FilterPanel from "./FilterPanel";
import Divider from '@mui/material/Divider';
import { getMuseLeads, formatLead, getMuseLeadById } from "../../../apiUtilities/museAPI";
import './LeadSearch.css';
import { getUserByToken } from "../../../apiUtilities/backendAPI";

const LeadSearch = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState({});
  const [leadResults, setLeadResults] = useState([]);
  const [selectedLead, setSelectedLead] = useState({});
  const [queryParams, setQueryParams] = useState({ page: 0});
  const [category, setCategory] = useState('');

  useEffect(() => {
    const token = localStorage.getItem('userToken');
    if (token) {
      getUserByToken(token)
        .then((user) => {
          setUser(user);
        })
        .catch((error) => {
          console.error(error);
        });
    }
    else {
      navigate('/login');
    }
  }, [navigate]);

  useEffect(() => {
    const token = localStorage.getItem('userToken');
    if (token) {
      getMuseLeads(queryParams).then((leads) => {
        let formattedLeads = leads.map((lead) => {
          if (lead.locations.length == 0) {
            lead.locations[0] = { name: 'In Description' };
          }
          return formatLead(lead);
        });
        setLeadResults((prevLeads) => prevLeads.concat(formattedLeads));
      });
    }
    else {
      navigate('/login');
    }
  }, [queryParams, navigate]);

  const increasePageCount = () => {
    setQueryParams({ ...queryParams, page: queryParams.page + 1 });
  };

  const handleLeadView = (id) => {
    getMuseLeadById(id)
      .then((lead) => {
        setSelectedLead(formatLead(lead));
      })
      .catch((error) => {
        console.error(error);
      });
  }

  const updateQueryParams = (newParams) => {
    const params = { page: 0 }
    if (category) {
      params.category = category;
    }
    if (newParams.location) {
      params.location = newParams.location;
    }
    if (newParams.level) {
      params.level = newParams.level;
    }
    if (newParams.category) {
      params.category = newParams.category;
    }
    console.log('New Params:', params);
    setQueryParams(params);
    setLeadResults([]);
    setSelectedLead({});
  }

  const handleCategoryChange = (category) => {
    setCategory(category);
    updateQueryParams({ category });
  }

  return (
    <div className="grid-item flex-area lead-search">
      <FilterPanel onApplyFilters={updateQueryParams}/>
      <MuseHeader category={category} changeCategory={handleCategoryChange}/>
      <div className="dash-card search-container">
        <MuseResults userId={user.id}  onViewLeadClick={handleLeadView} onLoadMoreData={increasePageCount} leadResults={leadResults} />
        <Divider fullwidth="true" orientation="vertical" />
        <MuseLeadView selectedLead={selectedLead}/>
      </div>
    </div>
  )
  }
  
  export default LeadSearch;