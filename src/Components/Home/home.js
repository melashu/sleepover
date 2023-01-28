import React from 'react';
import './home.css';

const Home = () => (
  <div className=''>
    <div className="backdrop-saturate-50 home-picture w-sreen h-screen bg-cover">

    </div>
    <div className='flex flex-col justify-center items-center absolute top-50  left-20' >
      <div className='p-5 bg-black bg-opacity-25 rounded-3 w-3/6 ml-5 flex flex-col justify-center items-center'>
        <p className='text-center text-white'>
         <span className='font-extrabold'>Sleep over</span> helps you Booking rooms in advance to be ready for a meeting is called Room Booking.
          With a room booking system, people are able to search for and book a meeting
          room in advance, based on their needs and wishes.
        </p>
        <p className='mt-5 px-5 cursor-pointer py-3 border-4 rounded-5 border-light-white-500 border-opacity-100 hover:bg-yellow-700 hover:text-white'>Book Hotel</p>
      </div>
    </div>
  </div>
);

export default Home;
