

import './App.css';
import { Route, Routes } from 'react-router-dom';
import Login from './Components/login/Login';
import Home from './Components/Home/home';
import ProtectedRoute from './Components/protectedroute';
import Admin from "./Components/Admin/SideRoute/sideRoute";
import RouteAdmin from "./Components/Admin/RouteAdmin";


function App() {
  return (

    <div>
      <Admin />
      <RouteAdmin />
      <Login />
    </div>

  );
}

export default App;
