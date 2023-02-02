import './App.css';
import {
  // BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';
import CustomNav from './Components/nav/nav';
import RoomDetail from './Components/RoomDetail/roomdetail';
import Hoteldetail from './Components/HotelDetail/hoteldetail';
import PageNotFound from './Components/PageNotFound/pagenotfound';
import Hotel from './Components/Hotel/hotel';
import Signup from './Components/signup/signup';
import Login from './Components/login/Login';
import CreateReserve from './Components/CreateReserve/createreserve';
import Protected from './Components/protectedroute';
import Myreservation from './Components/Myreservation/myreservation';

// import RouteConfig from './Components/Admin/RouteAdmin';

function App() {
  return (
    <div>

      
      <div className="lk-app-container lk-flex ">
        <CustomNav />
        <div className="me-inner">
          <Routes>

            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="*" element={<PageNotFound />} />
            <Route path="/my-reservation" element={<Protected><Myreservation /></Protected>} />
            <Route path="/">
              <Route index element={<Hotel />} />
              <Route path="hotel/:id">
                <Route index element={<Hoteldetail />} />
                <Route path="detail">
                  <Route index element={<RoomDetail />} />
                  <Route
                    path="create-reserve"
                    element={(
                      <Protected>
                        <CreateReserve />
                      </Protected>
)}
                  />
                </Route>
              </Route>
            </Route>
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default App;
