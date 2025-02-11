import { BrowserRouter as Router, Routes, Route } from 'react-router';
import AuthUser from './components/routes/authUser/AuthUser';
import LogIn from './components/routes/authUser/LogIn';
import SignUp from './components/routes/authUser/SignUp';

import './App.css';
import { lazy } from 'react';

const Home = lazy(() => import('./components/routes/home/Home'));
const Dashboard = lazy(() => import('./components/routes/dashboard/Dashboard'));
const LeadSearch = lazy(() => import('./components/routes/leadSearch/LeadSearch'));
const Insights = lazy(() => import('./components/routes/insights/Insights'));



function App() {

  return (
    <Router>
      <Routes>
        <Route path='/' element={<AuthUser />} />
        <Route path='/login' element={<LogIn />} />
        <Route path='/signup' element={<SignUp />} />
        <Route  path="/dashboard" element={<Home />}>
        <Route index element={<Dashboard/>} />
        <Route path="search" element={<LeadSearch />} />
        <Route path="insights" element={<Insights />} />
        </Route>
      </Routes>
    </Router>
  )
}

export default App
