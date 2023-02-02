import { Link, Route, Routes } from 'react-router-dom';

import React, { useState, useEffect } from 'react';

import {
  FaTwitter, FaFacebookF, FaGooglePlus, FaVenus,
  FaPinterestP, FaBars, FaTimes,
} from 'react-icons/fa';

import Login from '../login/Login';
import Signup from '../signup/signup';

import image from '../../assets/logo.ico';

const CustomNav = () => {
  const [hiden, setHide] = useState(true);

  useEffect(() => {
  // setMessage('');

  }, [hiden]);

  const closeNav = () => {
    if (!hiden) {
      const doc = document.querySelector('.lk-header');
      doc.classList.add('lk-hide');
      setHide(!hiden);
    }
  };

  const openNav = () => {
    const doc = document.querySelector('.lk-header');
    doc.classList.remove('lk-hide');
    setHide(!hiden);
  };

  return (
    <>
      <header className="lk-header nav-mobile lk-hide lk-c-flex">
        <div className="lk-close lk-flex">
          <FaTimes className="fa" onClick={closeNav} />

        </div>
        <div className="lk-log  lk-flex">
          {' '}
          <img src={image} alt="logo" />
        </div>
        <div className="lk-nav-wrapper lk-c-flex">
          <nav className="lk-nav-container lk-c-flex">
            <ul className="nav-ul lk-c-flex">
              <li><Link to="/" className="nav-list">Hotels</Link></li>
              <li><Link to="/my-reservation" className="" onClick={closeNav}>My Reservation</Link></li>
              <li><Link to="/signup" className="" onClick={closeNav}>Signup</Link></li>
              <li><Link to="/logout" className="" onClick={closeNav}>Logout</Link></li>
              <li><Link to="/login" className="" onClick={closeNav}>login</Link></li>
            </ul>
          </nav>

          <div className="lk-social lk-c-flex ">
            <div className="lk-social-wrapper lk-flex">
              <Link to="h" className="nav-list"><FaTwitter className="fa" /></Link>
              <Link to="h" className="nav-list"><FaFacebookF className="fa" /></Link>
              <Link to="h" className="nav-list"><FaGooglePlus className="fa" /></Link>
              <Link to="h" className="nav-list"><FaVenus className="fa" /></Link>
              <Link to="h" className="nav-list"><FaPinterestP className="fa" /></Link>
            </div>
            <div className="lk-copy-right lk">
              <p>2023 SleepOver all right reserved</p>
            </div>
          </div>
        </div>
      </header>
      <div className="lk-menu">
        <FaBars className="fa" onClick={openNav} />
      </div>
    </>
  );
};

export default CustomNav;
