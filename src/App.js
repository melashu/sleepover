import './App.css';
import {
  // BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';
import RouteAdmin from './Components/Admin/RouteAdmin';
import UsersPage from './user';

function App() {
  return (
    <div>
      <Routes>
        <Route path="/*" element={<UsersPage />} />
        <Route path="/admin/*" element={<RouteAdmin />} />
      </Routes>
    </div>

  );
}

export default App;
