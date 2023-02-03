import React from 'react';
import { useLocation, Link } from 'react-router-dom';
import image from '../../assets/logo.ico';

const RoomDetail = () => {
  const { state } = useLocation();
  return (
    <div className="me-container d-flex bg-light">
      <img src={state.photo.url} alt={state.room_no} />
      <div className="m-4 flex-4">
        <h3>
          Room Number:
          <strong>{state.room_no}</strong>
        </h3>
        <p>
          Number of Bed:
          <strong>{state.number_of_bed}</strong>
        </p>
        <p>
          Prices:
          <strong>
            {state.prices}
            $
          </strong>
        </p>
        <Link to="create-reserve" state={{ id: state.id }} className="btn btn-outline-primary fs-4 me-btn">Reserve this room</Link>
      </div>
    </div>
  );
};

export default RoomDetail;
