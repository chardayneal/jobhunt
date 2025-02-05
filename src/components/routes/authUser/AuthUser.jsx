import { Dashboard } from '@mui/icons-material';
import { useEffect } from 'react';
import { useNavigate } from 'react-router';


const AuthUser = () => {
  const navigate = useNavigate();
  console.log("Now on AuthUser")

  useEffect(() => {
    if (!localStorage.getItem('userToken')) {
      console.log("No token found, navigating to login");
      return navigate("/login");
    }
  }, [navigate]);
  console.log("Token found, navigating to dashboard");
  return <Dashboard />;
}

export default AuthUser
