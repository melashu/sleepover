import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';
import { getHotel, getHotelThank } from '../../../Redux/hotelSlices';
import './createRoom.scss';

/* eslint jsx-a11y/label-has-associated-control: ["error", { assert: "either" } ] */

const CreateRoom = () => {
  const [roomNo, setRoomNo] = useState('');
  const [numberofBed, setNumberofBed] = useState('');
  const [prices, setPrices] = useState('');
  const [photo, setPhoto] = useState([]);
  const [hotel, setHotel] = useState('');
  const [message, setMessage] = useState('');
  const hotels = useSelector(getHotel);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getHotelThank());
  }, []);
  const o = hotels.map((hotel) => (
    <option value={hotel.id} key={hotel.id}>
      {hotel.name}
    </option>
  ));

  const create = async (e) => {
    e.preventDefault();

    const data = new FormData();
    data.append('room_no', roomNo);
    data.append('number_of_bed', numberofBed);
    data.append('prices', prices);
    data.append('user_id', 1);
    data.append('hotel_id', hotel);
    data.append('photo', photo[0]);
    try {
      const response = await axios.post(
        'http://127.0.0.1:3000/api/v1/rooms',
        data,
      );
      if (response.data.message === 'success') {
        setMessage('success');
        setRoomNo('');
        setNumberofBed('');
        setHotel('');
        setPrices('');
      } else setMessage(response.data.message);
    } catch (error) {
      setMessage(error.toString());
    }
  };

  return (
    <div className="p-3">
      {message === 'success' ? (
        <div className="alert alert-success">{message}</div>
      ) : (
        <div className="alert alert-danger">{message}</div>
      )}
      <form onSubmit={create}>
        <div className="mb-3">
          <label htmlFor="room" className="form-label me-label">
            Room Number
          </label>
          <input
            type="number"
            value={roomNo}
            className="form-control p-3 me-input"
            id="room"
            required
            placeholder="e.g 001"
            onChange={(e) => setRoomNo(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="bed" className="form-label me-label">
            Number of Bed
          </label>
          <input
            type="number"
            value={numberofBed}
            required
            className="form-control p-3 me-input"
            id="bed"
            placeholder="e.g 3"
            onChange={(e) => setNumberofBed(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="prices" className="form-label me-label">
            Prices
          </label>
          <input
            type="number"
            value={prices}
            className="form-control p-3 me-input"
            id="prices"
            required
            placeholder="e.g $100"
            onChange={(e) => setPrices(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="hotel" className="form-label me-label">
            Select Hotel
          </label>
          <select
            value={hotel}
            required
            id="hotel"
            onChange={(e) => {
              setHotel(e.target.value);
            }}
            className="form-control"
          >
            <option defaultValue=""> Select Hotel </option>
            {o}
          </select>
        </div>

        <div className="mb-3">
          <label htmlFor="file" className="form-label me-label">
            Upload Image:
          </label>
          <input
            type="file"
            accept="image/*"
            id="file"
            required
            onChange={(e) => setPhoto(e.target.files)}
            className="form-control p-4"
          />
        </div>
        <button
          type="submit"
          className="btn btn-outline-primary btn-lg btn-sm  me-btn-save"
        >
          Save
        </button>
      </form>
    </div>
  );
};

export default CreateRoom;
