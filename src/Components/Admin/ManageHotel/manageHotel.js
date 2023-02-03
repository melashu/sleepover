import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getHotel, getHotelThank, removeHotel } from '../../../Redux/hotelSlices';
import './manageHotel.scss';

const ManageHotel = () => {
  const hotels = useSelector(getHotel);
  const dispatch = useDispatch();
  const [searchTearm, setSearchTearm] = useState('');
  const [deleteMessage, setDeleteMessage] = useState('');
  useEffect(() => {
    dispatch(getHotelThank());
  }, []);
  const deleteHotel = async (id) => {
    const response = await axios.delete(
      `http://127.0.0.1:3000/api/v1/hotels/${id}`,
    );
    if (response.data.message === 'success') {
      setDeleteMessage('Successfuly deleted');
      dispatch(removeHotel(id));
    }
  };

  const filteredHotels = hotels.filter((hotel) => {
    if (
      hotel.name.toLowerCase().includes(searchTearm)
        || hotel.city.toLowerCase().includes(searchTearm)
    ) {
      return hotel;
    }
    return null;
  });

  return (
    <div>
      <div className="add-new-hotel">
        <div className="title">Hotels registered in Sleep Over</div>

        <Link to="create-hotel" className="btn btn-outline-primary p-3 fs-4">
          Add New Hotel
        </Link>
      </div>
      {deleteMessage ? (
        <div className="alert alert-success">{deleteMessage}</div>
      ) : null}

      <div className="m-2 mb-4">
        <input
          type="search"
          className="form-control p-3 m-2 me-search-input"
          placeholder="Search hotel name or city"
          onChange={(e) => {
            setSearchTearm(e.target.value);
          }}
        />
      </div>

      {filteredHotels.map((hotel) => (
        <div className="me-hotel" key={hotel.id}>
          <img
            src={hotel.image.url}
            className="me-hotel-image"
            alt={hotel.name}
          />
          <div>
            <p>
              Hotel Name:
              {hotel.name}
            </p>
            <p>
              City:
              {hotel.city}
            </p>
            <p>
              Country:
              {hotel.country}
            </p>
            <button
              type="button"
              className="btn btn-outline-danger me-btn"
              onClick={() => {
                deleteHotel(hotel.id);
              }}
            >
              Delete
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ManageHotel;
