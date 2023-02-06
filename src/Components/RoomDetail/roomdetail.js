import React from 'react';
import { useLocation, Link } from 'react-router-dom';
import { FaAngleRight } from 'react-icons/fa';
import image from '../../assets/logo.ico';
import logo from '../../assets/hotel.jpg';
import colorWheel from '../../assets/color-wheel.jpg';

const RoomDetail = () => {
  const { state } = useLocation();
  return (
    <div className="lk-hotel-container  lk-flex">
      <div className="lk-room-detail lk-flex">
        <div className="lk-reserve-room-img-wrapper lk-c-flex">
          <img src={state.photo.url} alt={state.room_no} />
          {/* <img src={logo} alt={state.room_no} />  */}
        </div>
        <div className="lk-reserve-room-details-wrapper lk-c-flex">
          <div className="lk-reserve-room-details  flex-4">

            {/* //Todo: add hotel name in h3  */}
            <p>
              Room Number:
              <strong>{state.room_no}</strong>
            </p>
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

            <div className="lk-color-wheel lk-flex ">
              <img src={colorWheel} alt="color wheel" />
            </div>

            <div className="lk-btn-reserve-room-wrapper lk-flex">
              <Link to="create-reserve" state={{ id: state.id }} className="btn ">
                Reserve
                {' '}
                <FaAngleRight className="fa" />
              </Link>
            </div>

          </div>
        </div>

      </div>
    </div>
  );
};

export default RoomDetail;
