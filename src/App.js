import './App.css';
import {
  // BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';
import CustomNav from './Components/nav/nav';
import Signup from './Components/signup/signup';
import Login from './Components/login/Login';
import RouteConfig from './Components/Admin/RouteAdmin';

function App() {
  return (
    <div>
        {/* <RouteConfig /> */}
        <div className="lk-app-container lk-flex ">
          {/* <Router> */}
          <CustomNav />
          <Routes>

            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
          </Routes>
          {/* </Router> */}
      </div>
    </div>
  );
}

export default App;
