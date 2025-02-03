import { Box, AppBar, Toolbar, Typography, TextField, InputAdornment } from "@mui/material";
import SearchIcon from '@mui/icons-material/Search';


const MuseHeader = () => {
  return (
    <Box component={'section'} className="muse-header">
      <AppBar position="static" className="muse-app-bar">
        <Toolbar>
          <div></div>
          <TextField
            id="input-with-icon-textfield"
            className='muse-search-bar'
            placeholder="Search by Title or company..."
            slotProps={{
              input: {
                startAdornment: (
                  <InputAdornment position="start">
                    <SearchIcon />
                  </InputAdornment>
                ),
                inputProps: {
                  'aria-label': 'search leads',
                  // onInput: handleQueryChange,
                  // value: searchQuery
                }
              },
              
            }}
            variant="standard"
          />
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

export default MuseHeader
