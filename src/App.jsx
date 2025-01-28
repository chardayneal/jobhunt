import { BrowserRouter as Router, Routes, Route } from 'react-router';
import Home from './components/routes/home/Home';
import Dashboard from './components/routes/dashboard/Dashboard';
import LeadSearch from './components/routes/leadSearch/LeadSearch';
import Insights from './components/routes/insights/Insights';
import './App.css';

function App() {

  return (
    <Router>
      <Routes>
        <Route  path="/" element={<Home/>}>
        <Route index element={<Dashboard/>} />
        <Route path="search" element={<LeadSearch />} />
        <Route path="insights" element={<Insights />} />
        </Route>
      </Routes>
    </Router>
  )
}

export default App
