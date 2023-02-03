import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useSelector } from 'react-redux';

const Myreservation = () => {
  const [reserved, setReserved] = useState([]);
  const user = useSelector((state) => state.user);
  const getMyreservation = async () => {
    const response = await axios.get(
      `http://127.0.0.1:3000/api/v1/reservations/my/${user.user.id}`,
    );
    setReserved(response.data);
  };

  useEffect(() => {
    getMyreservation();
  }, []);
  if (reserved.length === 0) {
    return (
      <div className="lk-hotel-container  lk-flex">
        <div className="row">
          <h1 className="col-12 ABLoading"> Loading ...</h1>
        </div>
      </div>
    );
  }
  return (
    <div className="lk-hotel-container">
      <h1 className="text-center py-5 ABTotalTitle">Your reservations</h1>
      <div className="my-5">
        <div className="lk-myreservation lk-flex">
          {reserved.map((item) => (
            <div className=" " key={item.id}>
              <img
                className=" ABRoomImage"
                src={item.room.photo.url}
                alt="Room"
              />

              <div className="me-info">
                <p>
                  Your name:
                  {item.user.name}
                </p>
                <p>
                  Your room number
                  {item.room.room_no}
                </p>
                <p>
                  Number of bed
                  {item.room.number_of_bed}
                </p>
                <p>
                  Price:
                  {item.room.prices}
                  $
                </p>
                <p className="p-1">

                  Reserved from:
                  {item.start_date}
                  {' '}
                  to
                  {item.end_date}
                </p>
              </div>

            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
export default Myreservation;
