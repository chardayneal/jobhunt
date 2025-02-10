import propTypes from 'prop-types';
import { Box, AppBar, Toolbar, Typography, TextField } from "@mui/material";
import Autocomplete from '@mui/material/Autocomplete';
import { MUSE_CATEGORIES } from '../../../apiUtilities/museCategories';


const MuseHeader = ({ category, changeCategory }) => {
  return (
    <Box component={'section'} className="muse-header">
      <AppBar position="static" className="muse-app-bar">
        <Toolbar>
          <div className="muse-search">
            <Autocomplete
              disablePortal
              options={MUSE_CATEGORIES}
              sx={{ width: '60%'}}
              renderInput={(params) => <TextField {...params} label="Search by Category..." variant="standard" />}
              onChange={(event)=> changeCategory(event.target.textContent)}
              value={category}
            />
          </div>
          <div>
            <Typography variant="span"
            noWrap
            component="div"
            sx={{ display: { xs: 'none', sm: 'block' } }}>
              API POWERED BY OUR FRIENDS AT
            </Typography>
            <Typography variant="span"
            noWrap
            component="div"
            sx={{ display: { xs: 'none', sm: 'block' } }}>
              THE MUSE
            </Typography>
          </div>
          </Toolbar>
      </AppBar>
    </Box>
  )
}

MuseHeader.propTypes = {
  category: propTypes.string,
  changeCategory: propTypes.func,
}

export default MuseHeader
