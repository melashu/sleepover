import React from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom'
import { logout } from '../../Redux/authentification/login';
import './home.css';


const Home = () => {
  const dispatch = useDispatch();
  const history = useNavigate();
  const handleLogout = () => {
    console.log("deleted");
    history("/login");
    dispatch(logout());
  }
return(
  <div className=''>
    <div className="backdrop-saturate-50 home-picture w-sreen h-screen bg-cover">

    </div>
    <div className='flex flex-col justify-center items-center absolute top-50  left-20' >
      <div className='p-5 bg-black bg-opacity-50 rounded-3 w-3/6 ml-5 flex flex-col justify-center items-center'>
        <p className='text-center text-white font-pop'>
         <span className='font-extrabold'>Sleep over</span> helps you Booking rooms in advance to be ready for a meeting is called Room Booking.
          With a room booking system, people are able to search for and book a meeting
          room in advance, based on their needs and wishes.
        </p>
        <p
          className='mt-5 px-5 text-white cursor-pointer py-3 border-4 rounded-5 border-light-white-700 border-opacity-100 hover:bg-yellow-700'
        ><Link to="/login">Book a room</Link></p>
      </div>
      <button onClick={handleLogout}>LOGOUT</button>
    </div>
  </div>
)};

export default Home;
