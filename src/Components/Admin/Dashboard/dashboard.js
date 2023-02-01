import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import Widget from '../widget/widget';
// import {getHo}
import './dashboard.scss';
import { getHotelThank } from '../../../Redux/hotelSlices';
import { reservedRoomThunk, unReserveRoomThunk } from '../../../Redux/reservationSlices';

const Dashboard = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getHotelThank());
    dispatch(reservedRoomThunk());
    dispatch(unReserveRoomThunk());
  }, [dispatch]);

  return (
    <div className="me-dashboard">
      <Widget type="hotel" />
      <Widget type="reserved" />
      <Widget type="unreserved" />
    </div>
  );
};

export default Dashboard;
