import propTypes from 'prop-types';
import { Box, TextField } from "@mui/material";
import Autocomplete from '@mui/material/Autocomplete';
import { MUSE_CATEGORIES } from '../../../apiUtilities/museCategories';


const MuseHeader = ({ category, changeCategory }) => {

  const handleCategoryChange = (event) => {
    const newCategory = event.target.textContent ? event.target.textContent : '';
    changeCategory(newCategory);
  }
  return (
    <Box component={'section'} className="muse-header dash-card">
      <div className="muse-search">
        <Autocomplete
          size='small'
          disablePortal
          options={MUSE_CATEGORIES}
          sx={{ width: '60%', marginTop: '.6rem'}}
          renderInput={(params) => <TextField {...params} 
            label="Search by Category..." 
            variant="outlined"
          />}
          onChange={handleCategoryChange}
          value={category}
        />
      </div>
      <div className="muse-powered">
        <span>POWERED BY OUR FRIENDS AT</span>
        <h3>THE MUSE</h3>
      </div>
    </Box>
  )
}

MuseHeader.propTypes = {
  category: propTypes.string,
  changeCategory: propTypes.func,
}

export default MuseHeader
