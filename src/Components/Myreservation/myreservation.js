// import { useDispatch, useSelector } from 'react-redux';
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useSelector } from 'react-redux';

const Myreservation = () => {
  const [reserved, setReserved] = useState({});
  //   const dispatch = useDispatch();
  const user = useSelector((state)=>state.user)

  const getMyreservation = async () => {
    const response = await axios.get(
      `http://127.0.0.1:3000/api/v1/reservations/my/${user.user.id}`
    );
    setReserved(response.data);
  };

  useEffect(() => {
    getMyreservation();
  }, []);
  if (Object.keys(reserved).length === 0) {
    return (
      <div className="container bg-light d-flex justify-content-center my-5 py-5">
        <div className="row">
          <h1 className="col-12 ABLoading"> Reserved Room Loading ...</h1>
        </div>
      </div>
    );
  }
  // console.log(reserved);
  return (
    <div className="container AllReserved bg-light p-5">
      <h1 className="text-center py-5 ABTotalTitle">Your reservations</h1>
      <div className="row my-5">
        <div className="col-12 row">
          {/* {reserved.map((item) => ( */}
          <div className="col-6 row px-5">
            <img className="col-6 ABRoomImage" src={reserved.room.photo.url} alt="Room" />
            <div className="col-6">
              <p>
                Your name:
                {' '}
                {' '}
                {reserved.user.name}
              </p>
              <p>
                {reserved.room.number_of_bed}
                {' '}
                Bed Room
              </p>
              <p>
                Price:
                {' '}
                {' '}
                {reserved.room.prices}
                $
              </p>
              <p className="p-5">
                Reserved from:

                {reserved.start_date}
                {' '}

                to

                {reserved.end_date}
              </p>
            </div>
          </div>
          {/* //   ))} */}
        </div>
      </div>
    </div>
  );
};
export default Myreservation;
