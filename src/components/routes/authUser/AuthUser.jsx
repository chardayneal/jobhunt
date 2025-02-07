import { useEffect } from 'react';
import { useNavigate } from 'react-router';
// import Home from '../home/Home';


const AuthUser = () => {
  const navigate = useNavigate();
  console.log("Now on AuthUser")

  useEffect(() => {
    if (!localStorage.getItem('userToken')) {
      console.log("No token found, navigating to login");
      return navigate("/login");
    }
    console.log("Token found, navigating to dashboard");
    return navigate("/dashboard");
  }, [navigate]);
}

export default AuthUser
