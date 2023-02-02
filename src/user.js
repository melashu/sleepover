import './App.css';
import {
  // BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';
import { useSelector } from 'react-redux';
import CustomNav from './Components/nav/nav';
import PageNotFound from './Components/PageNotFound/pagenotfound';
import Hotel from './Components/Hotel/hotel';
import Signup from './Components/signup/signup';
import Login from './Components/login/Login';


import RoomDetail from './Components/RoomDetail/roomdetail';
import Hoteldetail from './Components/HotelDetail/hoteldetail';
import CreateReserve from './Components/CreateReserve/createreserve';
import Protected from './Components/protectedroute';
import Myreservation from './Components/Myreservation/myreservation';
// import { authenticated } from './Redux/users/users';
// import RouteConfig from './Components/Admin/RouteAdmin';



// import { authenticated } from './Redux/users/users';
// import RouteConfig from './Components/Admin/RouteAdmin';

function UsersPage() {

  return (
    <div>
      <div className="lk-app-container lk-flex ">
        <CustomNav />
        <div className="me-inner">
          <Routes>
            <Route path="/">
              <Route index element={<Hotel />} />
              <Route path="/signup" element={<Signup />} />
              <Route path="/login" element={<Login />} />

              <Route
                path="/my-reservation"
                element={
                  <Protected>
                    <Myreservation />
                  </Protected>
                }
              />
              <Route path="/hotel/:id">
                <Route index element={<Hoteldetail />} />
                <Route path="detail">
                  <Route index element={<RoomDetail />} />
                  <Route
                    path="create-reserve"
                    element={
                      <Protected>
                        <CreateReserve />
                      </Protected>
                    }
                  />
                </Route>
              </Route>
            </Route>

            <Route path="*" element={<PageNotFound />} />
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default UsersPage;
