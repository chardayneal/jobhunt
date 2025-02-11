import { useState, useEffect} from 'react';
import { useNavigate } from 'react-router';
import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Avatar from '@mui/material/Avatar';
import Divider from '@mui/material/Divider';
import ListItemIcon from '@mui/material/ListItemIcon';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import Logout from '@mui/icons-material/Logout';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import Button from '@mui/material/Button';
import './Home.css';
import { getUserByToken, updateUser } from '../../../apiUtilities/backendAPI';
import Profile from './Profile';

const Home = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const [user, setUser] = useState({name: '', email: ''});
  const [showProfile, setShowProfile] = useState(false);
  const [profileName, setProfileName] = useState(user.name);
  const open = Boolean(anchorEl);
  const navigate = useNavigate();
  

  useEffect(() => {
    const token = localStorage.getItem('userToken');
    getUserByToken(token)
      .then((user) => {
        setUser(user);
      })
      .catch((error) => {
        console.error(error);
        navigate("/login");
      });

    if (!token) {
      navigate("/login");
    }
  });

  const handleLogout = () => {
    localStorage.removeItem('userToken');
    localStorage.removeItem('userId');
    navigate("/login");
  };

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleProfileClose = () => {
    setShowProfile(false);
  }

  const handleUserChanges = () => {
    updateUser(user.id, {name: profileName})
      .then((updatedUser) => {
        setUser(updatedUser);
        console.log(updatedUser);
        setShowProfile(false);
      })
      .catch((error) => {
        console.error(error);
      });
  }

  return (
    <div className="home grid-container">
        <Sidebar/>
        <div className="grid-item header">
          {/* <div className="spacer"></div> */}
          <h2>Dashboard</h2>
          <Tooltip title="Account settings">
            <IconButton
              onClick={handleClick}
              size="small"
              sx={{ ml: 2 }}
              aria-controls={open ? 'account-menu' : undefined}
              aria-haspopup="true"
              aria-expanded={open ? 'true' : undefined}
            >
              <Avatar sx={{ width: 32, height: 32 }}>{user.name[0]}</Avatar>
            </IconButton>
          </Tooltip>
          <Menu
            anchorEl={anchorEl}
            id="account-menu"
            open={open}
            onClose={handleClose}
            onClick={handleClose}
            slotProps={{
              paper: {
                elevation: 0,
                sx: {
                  overflow: 'visible',
                  filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
                  mt: 1.5,
                  '& .MuiAvatar-root': {
                    width: 32,
                    height: 32,
                    ml: -0.5,
                    mr: 1,
                  },
                  '&::before': {
                    content: '""',
                    display: 'block',
                    position: 'absolute',
                    top: 0,
                    right: 14,
                    width: 10,
                    height: 10,
                    bgcolor: 'background.paper',
                    transform: 'translateY(-50%) rotate(45deg)',
                    zIndex: 0,
                  },
                },
              },
            }}
            transformOrigin={{ horizontal: 'right', vertical: 'top' }}
            anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
          >
          <MenuItem onClick={() => setShowProfile(true)}>
            <ListItemIcon>
              <AccountCircleIcon/>
            </ListItemIcon> 
            Profile
          </MenuItem>
          <Divider />
          <MenuItem onClick={handleLogout}>
            <ListItemIcon>
              <Logout fontSize="small" />
            </ListItemIcon>
            Logout
          </MenuItem>
        </Menu>
        
        </div>
        <Outlet></Outlet>
        <Dialog
          open={showProfile}
          onClose={handleProfileClose}
          slotProps={{
            paper: {
              component: 'form',
              }
            }}
        >
          <DialogContent>
            <Profile userName={profileName} userEmail={user.email} updateName={setProfileName}/>
          </DialogContent>
          <DialogActions>
            <Button variant='contained' onClick={handleUserChanges}>Save Changes</Button>
            <Button onClick={handleProfileClose}>Close</Button>
          </DialogActions>
        </Dialog>
      </div>
  )
}

export default Home