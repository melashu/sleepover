import React from 'react';
import {
  Link,
} from 'react-router-dom';
import {
  FaTwitter, FaFacebookF, FaGooglePlus, FaVenus, FaPinterestP,
} from 'react-icons/fa';

const CustomNav = () => (
  <header className="lk-header lk-c-flex">

    <div className="lk-log">Logo here</div>
    <div className="lk-nav-wrapper lk-c-flex">
      <nav className="lk-nav-container lk-c-flex">
        <ul className="nav-ul lk-c-flex">
          <li><Link to="/" className="nav-list">Hotels</Link></li>
          <li><Link to="/user-reservation" className="">Reservation</Link></li>
          <li><Link to="/my-reservation" className="">My Reservation</Link></li>
          <li><Link to="/signup" className="">Signup</Link></li>
          <li><Link to="/logout" className="">Logout</Link></li>
          <li><Link to="/login" className="">login</Link></li>
        </ul>
      </nav>

      <div className="lk-social lk-c-flex ">
        <di className="lk-social-wrapper lk-flex">
          <Link to="h" className="nav-list"><FaTwitter className="fa" /></Link>
          <Link to="h" className="nav-list"><FaFacebookF className="fa" /></Link>
          <Link to="h" className="nav-list"><FaGooglePlus className="fa" /></Link>
          <Link to="h" className="nav-list"><FaVenus className="fa" /></Link>
          <Link to="h" className="nav-list"><FaPinterestP className="fa" /></Link>
        </di>
        <div className="lk-copy-right lk">
          <p>2023 SleepOver all right reserved</p>
        </div>
      </div>
    </div>
  </header>
);

export default CustomNav;
