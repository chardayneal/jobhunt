import { BrowserRouter as Router, Routes, Route } from 'react-router';
import { useState } from 'react';
import AuthUser from './components/routes/authUser/AuthUser';
import LogIn from './components/routes/authUser/LogIn';
import Home from './components/routes/home/Home';
import Dashboard from './components/routes/dashboard/Dashboard';
import LeadSearch from './components/routes/leadSearch/LeadSearch';
import Insights from './components/routes/insights/Insights';
import './App.css';

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const handleAuthentication = (auth) => {
    setIsAuthenticated(auth);
  };

  return (
    <Router>
      <Routes>
        <Route path='/' element={<AuthUser isAuth={isAuthenticated}/>} />
        <Route path='/login' element={<LogIn setAuth={handleAuthentication}/>} />
        <Route  path="/dashboard" element={<Home setAuth={handleAuthentication}/>}>
        <Route index element={<Dashboard/>} />
        <Route path="search" element={<LeadSearch />} />
        <Route path="insights" element={<Insights />} />
        </Route>
      </Routes>
    </Router>
  )
}

export default App
