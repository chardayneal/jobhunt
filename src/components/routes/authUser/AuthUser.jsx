import propTypes from 'prop-types';
import { Navigate } from 'react-router';


const AuthUser = () => {

  if (!localStorage.getItem('userToken')) {
    return <Navigate to="/login" />
  }
  return <Navigate to="/dashboard" />
}

AuthUser.propTypes = {
    isAuth: propTypes.bool.isRequired,
};

export default AuthUser
