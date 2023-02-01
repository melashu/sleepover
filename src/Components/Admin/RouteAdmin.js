import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Logout from './Logout/logout';
import ManageHotel from './ManageHotel/manageHotel';
import CreateHotel from './CreateHotel/createHotel';
import ManageRoom from './ManageRoom/manageRoom';
import CreateRoom from './CreateRoom/createRoom';
import Sidebar from './SideRoute/sideRoute';
import './SideRoute/sideRoute.css';
import Protected from '../protectedroute';
import Login from '../login/Login';
import Dashboard from './Dashboard/dashboard';
import Hotel from '../Hotel/hotel';
import Reservedroom from './reservedroom/reservedroom';
import Navbar from './navbar/navbar';
import Detail from './detail/detail';
import Footer from '../Footer/footer';
import PageNotFound from '../PageNotFound/pagenotfound';
import Hoteldetail from '../HotelDetail/hoteldetail';
import RoomDetail from '../RoomDetail/roomdetail';

export default function RouteAdmin() {
  return (
    <>
      <div className="me-admin-contrainer">
        <Sidebar />
        <div className="me-main">
          <Navbar />

          <Routes>
            <Route
              path="/admin"
              element={(
                <Protected>
                  {' '}
                  <Dashboard />
                </Protected>
              )}
            />
            <Route path="/" element={<Login />} />
            <Route path="/manageHotel">
              <Route
                index
                element={(
                  <Protected>
                    <ManageHotel />
                  </Protected>
                )}
              />
              <Route
                path="create-hotel"
                element={(
                  <Protected>
                    <CreateHotel />
                  </Protected>
                )}
              />
              <Route
                path=":id"
                element={(
                  <Protected>
                    <Detail />
                  </Protected>
                )}
              />
            </Route>
            <Route path="/manageRoom">
              <Route
                index
                element={(
                  <Protected>
                    <ManageRoom />
                  </Protected>
                )}
              />
              <Route
                path="create-room"
                element={(
                  <Protected>
                    <CreateRoom />
                  </Protected>
                )}
              />
            </Route>
            <Route
              path="/reserved-room"
              element={(
                <Protected>
                  <Reservedroom />
                </Protected>
              )}
            />
            <Route path="/logout" element={<Logout />} />
            <Route path="*" element={<PageNotFound />} />
            <Route path="/hotel">
              <Route index element={<Hotel />} />
              <Route path=":id">
                <Route index element={<Hoteldetail />} />
                <Route path="detail" element={<RoomDetail />} />
              </Route>
            </Route>
          </Routes>
        </div>
      </div>
      <Footer />
    </>
  );
}
