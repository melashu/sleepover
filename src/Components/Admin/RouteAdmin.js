import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Logout from './Logout/logout';
import ManageHotel from './ManageHotel/manageHotel';
import CreateHotel from './CreateHotel/createHotel';
import ManageRoom from './ManageRoom/manageRoom';
import CreateRoom from './CreateRoom/createRoom';

export default function RouteAdmin() {
  return (
    <div>
      <Routes>
        <Route path="/admin" element={<ManageHotel />} />
        <Route path="/ManageHotel" element={<ManageHotel />} />
        <Route path="/CreateHotel" element={<CreateHotel />} />
        <Route path="/ManageRoom" element={<ManageRoom />} />
        <Route path="/CreateRoom" element={<CreateRoom />} />
        <Route path="/Logout" element={<Logout />} />
      </Routes>
    </div>
  );
}
