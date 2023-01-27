import './App.css';
import { Route, Routes } from 'react-router-dom';
import Login from './Components/login/Login';
import Home from './Components/Home/home';
import ProtectedRoute from './Components/protectedroute';

function App() {
  return (
    <>
      <Login />
      <Routes>
        <Route path="/" element={<Login />} />
        <Route
          path="/home"
          element={(
            <ProtectedRoute>
              <Home />
            </ProtectedRoute>
          )}
        />
      </Routes>
    </>
  );
}

export default App;
