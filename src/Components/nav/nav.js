import { Link, Route, Routes } from 'react-router-dom';

import React, { useState, useEffect } from 'react';

import {
  FaTwitter, FaFacebookF, FaGooglePlus, FaVenus,
  FaPinterestP, FaBars, FaTimes,
} from 'react-icons/fa';

import { useDispatch, useSelector } from 'react-redux';
import Login from '../login/Login';
import Signup from '../signup/signup';

import image from '../../assets/logo.ico';
import { logout } from '../../Redux/users/users';

const CustomNav = () => {
  const [hiden, setHide] = useState(true);
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const [log, setLog] = useState(true);
  useEffect(() => {
  }, [hiden, log]);

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
              <li>
                <Link
                  to="/"
                  className="nav-list"
                  onClick={() => {
                    closeNav();
                  }}
                >
                  Hotels
                </Link>
              </li>
              <li>
                <Link to="/my-reservation" className="" onClick={closeNav}>
                  My Reservation
                </Link>
              </li>
              {user.isAuthenticated ? (
                <li>
                  <Link
                    to="/logout"
                    className=""
                    onClick={(e) => {
                      e.preventDefault();
                      closeNav();
                      dispatch(logout());
                      setLog(!log);
                    }}
                  >
                    Logout
                  </Link>
                </li>
              ) : null}
              {' '}
              {user.isAuthenticated ? null : (
                <li>
                  <Link to="/signup" className="" onClick={closeNav}>
                    Signup
                  </Link>
                </li>
              )}
              {user.isAuthenticated ? null : (
                <li>
                  <Link to="/login" className="" onClick={closeNav}>
                    Login
                  </Link>
                </li>
              )}
            </ul>
          </nav>

          <div className="lk-social lk-c-flex ">
            <div className="lk-social-wrapper lk-flex">
              <Link to="h" className="nav-list">
                <FaTwitter className="fa" />
              </Link>
              <Link to="h" className="nav-list">
                <FaFacebookF className="fa" />
              </Link>
              <Link to="h" className="nav-list">
                <FaGooglePlus className="fa" />
              </Link>
              <Link to="h" className="nav-list">
                <FaVenus className="fa" />
              </Link>
              <Link to="h" className="nav-list">
                <FaPinterestP className="fa" />
              </Link>
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
