import './App.css';
import { useState } from 'react';

import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Signup from './Signup';
import Login from './Login';
import LandingPage from './Components/LandingPage';



const router = createBrowserRouter([
  {
    path: '/',
    element: <LandingPage />
  },
  {
    path: '/signup',
    element: <Signup/>
  },
  {
    path:'/login',
    element: <Login/>
  }
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
