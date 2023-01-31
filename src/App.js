import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';
import React from 'react';
import CustomNav from './Components/nav/nav';
import Signup from './Components/signup/signup';

// import Admin from './Components/Admin/SideRoute/sideRoute';
// import RouteAdmin from './Components/Admin/RouteAdmin';
import Login from './Components/login/Login';

import Home from './Components/Home/home';

import './App.css';

function App() {
  return (

    <div className="lk-app-container lk-flex ">
      <Router>
        {/* <Admin />
         <RouteAdmin />
         <Login /> */}
        <CustomNav />
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
