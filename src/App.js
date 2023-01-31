// import Admin from './Components/Admin/SideRoute/sideRoute';
// import RouteAdmin from './Components/Admin/RouteAdmin';
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Login from './Components/login/Login';
import SignUp from './Components/login/Signup';
import Home from './Components/Home/home';
import './App.css';

function App() {
  return (
    <div>
      {/* <Admin />
      <RouteAdmin />
      <Login /> */}
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
      </Routes>
    </div>

  );
}

export default App;
