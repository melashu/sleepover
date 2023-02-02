/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState } from 'react';
import axios from 'axios';
import './createHotel.scss';
import { useSelector } from 'react-redux';

const CreateHotel = () => {
  const [name, setName] = useState('');
  const [city, setCity] = useState('');
  const [country, setCountry] = useState('');
  const [image, setImage] = useState([]);
  const [phone, setPhone] = useState('');
  const [detail, setDetail] = useState('');
  const [message, setMessage] = useState('');
  const currentUser = useSelector((state)=>state.user)

  const create = async (e) => {
    e.preventDefault();

    const data = new FormData();
    data.append('name', name);
    data.append('country', country);
    data.append('city', city);
    data.append('phone', phone);
    data.append('user_id', currentUser.user.id);
    data.append('detail', detail);
    data.append('image', image[0]);
    try {
      const response = await axios.post(
        'http://127.0.0.1:3000/api/v1/hotels',
        data,
      );
      if (response.data.message === 'success') {
        setMessage('Successfly created!');
        setCity('');
        setCountry('');
        setPhone('');
        setDetail('');
        setName('');
      } else setMessage(response.data.message);
    } catch (error) {
      setMessage('Connection Error');
    }
  };

  return (
    <div className="p-3">
      {message === 'success' ? (
        <div className="alert alert-success">{message}</div>
      ) : null}
      <form onSubmit={create}>
        <div className="mb-3">
          <label
            htmlFor="exampleFormControlInput1"
            className="form-label me-label"
          >
            Hotel Name
          </label>
          <input
            type="text"
            value={name}
            required
            className="form-control p-3 me-input"
            id="exampleFormControlInput1"
            placeholder="e.g Lale Hotel"
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label
            htmlFor="exampleFormControlInput1"
            className="form-label me-label"
          >
            Country
          </label>
          <input
            type="text"
            value={country}
            required
            className="form-control p-3 me-input"
            id="exampleFormControlInput1"
            placeholder="e.g Ethiopia"
            onChange={(e) => setCountry(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label
            htmlFor="exampleFormControlInput1"
            className="form-label me-label"
          >
            City
          </label>
          <input
            type="text"
            value={city}
            className="form-control p-3 me-input"
            required
            id="exampleFormControlInput1"
            placeholder="e.g Addis Ababa"
            onChange={(e) => setCity(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label
            htmlFor="exampleFormControlInput1"
            className="form-label me-label"
          >
            Phone
          </label>
          <input
            type="text"
            value={phone}
            required
            className="form-control p-3 me-input"
            id="exampleFormControlInput1"
            placeholder="e.g +2519..."
            onChange={(e) => setPhone(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label
            htmlFor="exampleFormControlInput1"
            className="form-label me-label"
          >
            Description
          </label>
          <textarea
            className="form-control p-4 me-input"
            required
            id="exampleFormControlInput1"
            placeholder="We value our customer...."
            value={detail}
            onChange={(e) => setDetail(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label
            htmlFor="exampleFormControlInput1"
            className="form-label me-label"
          >
            Upload Image:
          </label>
          <input
            type="file"
            required
            accept="image/*"
            onChange={(e) => setImage(e.target.files)}
            className="form-control p-4"
          />
        </div>
        <button
          type="submit"
          className="btn btn-outline-primary btn-lg  me-btn-save"
        >
          Save
        </button>
      </form>
    </div>
  );
};

export default CreateHotel;
