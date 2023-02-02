import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import DatePicker from 'react-datepicker';
import axios from 'axios';
import 'react-datepicker/dist/react-datepicker.css';
import './createreserve.scss';

/* eslint jsx-a11y/label-has-associated-control: ["error", { assert: "either" } ] */

const CreateReserve = () => {
  const { state } = useLocation();
  const today = new Date();
  const [start, setStart] = useState(today);
  const [end, setEnd] = useState(today);
  const [message, setMessage] = useState('');
  const create = async () => {
    const data = new FormData();
    data.append('start_date', start);
    data.append('end_date', end);
    data.append('room_id', state.id);
    data.append('user_id', 1);
    const response = await axios.post('http://127.0.0.1:3000/api/v1/reservations', data);
    setMessage(response.data.message);
  };

  return (
    <div className="container bg-light justify-content-center my-5 py-5 shadow">
      <form className="row justify-content-center">
        <p>{message}</p>
        <div className="container py-5">
          <div className="row  justify-content-center">
            <div className="col-lg-3 col-sm-6">
              <label htmlFor="startDate" className="KAReseterlabel">Start date</label>

              <DatePicker id="startDate" selected={start} className="date" onChange={(date) => setStart(date)} />
            </div>
            <div className="col-lg-3 col-sm-6">
              <label htmlFor="endDate" className="KAReseterlabel">End date</label>
              <DatePicker id="endDate" selected={end} className="date" onChange={(date) => setEnd(date)} />

            </div>
          </div>

        </div>
        <button
          type="button"
          className="btn btn-outline-primary me-btn me-btn-create m-4"
          onClick={(e) => {
            create();
          }}
        >
          {' '}
          Create
        </button>

      </form>
    </div>
  );
};

export default CreateReserve;
