import React from 'react';
import { Link } from 'react-router-dom';
import './sideRoute.css';

export default function sideRoute() {
  return (
    <div className="offcanvas offcanvas-start show dropdown-menu-dark bg-dark" tabIndex="-1" id="offcanvasDark" aria-labelledby="offcanvasDarkLabel">
      <div className="offcanvas-header text-white">
        <h5 className="offcanvas-title" id="offcanvasDarkLabel">Sleep over</h5>
        <h5 className="offcanvas-title" id="offcanvasDarkLabel">Admin</h5>
      </div>
      <div className="offcanvas-body my-5">
        <h1 className="offcanvas-body my-5 ABTitleNav"><Link to="/admin">Home</Link></h1>
        <h1 className="offcanvas-body my-5 ABTitleNav"><Link to="/ManageHotel">Manage Hotel</Link></h1>
        <h1 className="offcanvas-body my-5 ABTitleNav"><Link to="/ManageRoom">Manage Room</Link></h1>
        <h1 className="offcanvas-body my-5 ABTitleNav"><Link to="/ManageRoom">Reserved Room</Link></h1>
        <h1 className="offcanvas-body my-5 ABTitleNav"><Link to="/Logout">Log out</Link></h1>
      </div>
    </div>
  );
}
