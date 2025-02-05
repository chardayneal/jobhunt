import { useNavigate } from 'react-router';


const AuthUser = () => {
  const navigate = useNavigate();

  if (!localStorage.getItem('userToken')) {
    return navigate("/login");
  }
  return navigate("/dashboard")
}

export default AuthUser
