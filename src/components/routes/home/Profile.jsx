import propTypes from 'prop-types';
import TextField from '@mui/material/TextField';

const Profile = ({ userName, userEmail, updateName }) => {

  return (
    <div>
      <h2>Profile</h2>
      <p>Update your profile below</p>
      <TextField
        id="name"
        name="name"
        label="Name"
        value={userName}
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
  userEmail: propTypes.string,
  updateName: propTypes.func
}

export default Profile;
