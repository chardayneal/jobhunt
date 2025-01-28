import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";
import './Home.css';

const Home = () => {
  return (
    <div className="home grid-container">
        <Sidebar/>
        <div className="grid-item header">HEADER</div>
        <Outlet></Outlet>
      </div>
  )
}

export default Home