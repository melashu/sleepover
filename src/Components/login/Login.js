import React from 'react';
import { Link, Outlet } from 'react-router-dom';
// import ProtectedRoute from '../protectedroute';

const Login = () => (
  <div>
    <h1>Login form here</h1>
    <Link to="/">Login</Link>
    <Link to="/home">Home</Link>
    <Outlet />
  </div>
);

export default Login;
