import './App.css';
import { useState } from 'react';

import Signup from './Signup';
import Login from './Login';

function App() {

  //hold state for login
  const [toggleLogin, setToggleLogin] = useState(false);


  const handleLoginToggle = () => {
    setToggleLogin(()=> !toggleLogin);
  };


  return (
    <div>
      {toggleLogin ? <Login handleLoginToggle={handleLoginToggle}/> : <Signup handleLoginToggle={handleLoginToggle}/>}
    </div>
  );
}

export default App;
