import propTypes from 'prop-types';
import TextField from '@mui/material/TextField';
import Divider from '@mui/material/Divider';

const Profile = ({ userName, placeholderName, userEmail, updateName }) => {

  return (
    <div className='profile'>
      <h2>Profile</h2>
      <Divider sx={{ margin: '.5rem 0 1rem' }}/>
      <p>Update your profile below</p>
      <TextField
        id="name"
        name="name"
        label="Name"
        value={userName}
        placeholder={placeholderName}
        onChange={(event) => updateName(event.target.value)}
        variant="standard"
        fullWidth
        required
      />
      <TextField
        id="email"
        name="email"
        label="Email"
        value={userEmail}
        variant="standard"
        fullWidth
        disabled
      />
    </div>
  )
}

Profile.propTypes = {
  userName: propTypes.string,
  placeholderName: propTypes.string,
  userEmail: propTypes.string,
  updateName: propTypes.func
}

export default Profile;
