import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';
import CustomNav from './Components/nav/nav';
import Signup from './Components/signup/signup';
import Homepage from './Components/home/home';
import './App.css';

function App() {
  return (
    <div className="lk-app-container lk-flex ">
      <Router>
        <CustomNav />
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/signup" element={<Signup />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
