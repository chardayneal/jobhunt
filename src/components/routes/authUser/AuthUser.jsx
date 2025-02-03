import propTypes from 'prop-types';
import { Navigate } from 'react-router';


const AuthUser = ({isAuth}) => {
  if (!isAuth) {
    return <Navigate to="/login" />

  }

  // check if user is logged in via localStorage
  // if not logged in, redirect to login page
  // if logged in, return Dashboard
  return (
    <div>
      
    </div>
  )
}

AuthUser.propTypes = {
    isAuth: propTypes.bool.isRequired,
};

export default AuthUser
