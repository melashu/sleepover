import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import {
  createRoomThunk,
  getRooms,
  removeRoom,
} from '../../../Redux/roomSlices';
import './manageRoom.scss';

const ManageRoom = () => {
  const dispatch = useDispatch();
  const rooms = useSelector(getRooms);
  const [searchTearm, setSearchTearm] = useState('');
  const [message, setMessage] = useState('');

  useEffect(() => {
    dispatch(createRoomThunk());
  }, []);
  const filteredRoom = rooms.filter((room) => {
    if (
      room.hotel.name.toLowerCase().includes(searchTearm)
      || room.hotel.city.toLowerCase().includes(searchTearm)
    ) {
      return room;
    }
    return null;
  });

  const deleteRoom = async (id) => {
    const response = await axios.delete(
      `http://127.0.0.1:3000/api/v1/rooms/${id}`,
    );
    if (response.data.message === 'success') {
      dispatch(removeRoom(id));
      setMessage('Successfuly Deleted!');
    }
  };

  return (
    <div className="container">
      <div className="add-new-hotel">
        <div className="title">Rooms registered in Sleep Over</div>
        <Link to="create-room" className="btn btn-outline-primary p-3 fs-4">
          Add New Room
        </Link>
      </div>

      <div className="m-2">
        <input
          type="search"
          className="form-control p-3 m-2 me-search-input"
          placeholder="Search rooms by hotel name or city"
          onChange={(e) => {
            setSearchTearm(e.target.value);
          }}
        />
      </div>
      <hr />
      {message ? <div className="alert alert-success">{message}</div> : null}
      <div className="me-room-container">
        {filteredRoom.map((room) => (
          <div className="me-room" key={room.id}>
            <img src={room.photo.url} alt={room.hotel.name} />
            <p>
              Hotel Name:
              {room.hotel.name}
            </p>
            <p>
              City:
              {room.hotel.city}
            </p>
            <p>
              Room No:
              {room.room_no}
            </p>
            <p>
              Number of Bed:
              {room.number_of_bed}
            </p>
            <p>
              Country:
              {room.hotel.country}
            </p>
            <button
              type="button"
              className="btn btn-outline-danger me-btn"
              onClick={() => {
                deleteRoom(room.id);
              }}
            >
              Delete
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ManageRoom;
