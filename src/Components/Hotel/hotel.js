import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { Link } from 'react-router-dom';
import './hotel.scss';
import logo from '../../assets/hotel.jpg';
import loading from '../../assets/loding.svg';

const Hotel = () => {
  const [hotels, setHotels] = useState([]);

  const fetchHotel = async () => {
    const response = await axios.get('http://127.0.0.1:3000/api/v1/hotels');
    setHotels(response.data);
  };

  useEffect(() => {
    fetchHotel();
  }, []);

  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 2,
      slidesToSlide: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
      slidesToSlide: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1,
    },
  };

  return (
    <div className="lk-hotel-container lk-c-flex">
      <h2 className="me-title">Available Hotels for reservations</h2>
      {hotels.length === 0 ? (
        <div className="loading-wrapper">
          <img
            src={loading}
            className="lk-loading"
            alt="Loading"
          />
        </div>
      ) : null}
      <Carousel
        swipeable
        draggable={false}
        showDots={false}
        responsive={responsive}
        infinite={false}
        autoPlaySpeed={1000}
        keyBoardControl
        slidesToSlide={1}
        renderArrowsWhenDisabled
        customTransition="all .5"
        transitionDuration={500}
        focusOnSelect
        centerMode
        containerClass="carousel-container"
        // removeArrowOnDeviceType={['tablet', 'mobile']}
        itemClass="carousel-item-padding-40-px lk-item"
      >
        {hotels.map((hotel) => (
          <div className="card lk-flex" key={hotel.id}>
            <img
              // Todo: remember to change the logo
              src={logo}
              className="card-img-top"
              alt={hotel.name}
            />
            <div className="card-body text-center">
              <h4 className="me-card-title">

                {hotel.name}
              </h4>
              <p className="card-text detail">
                Country
                <strong>{hotel.country}</strong>
              </p>
              <p className="card-text detail">
                City
                <strong>{hotel.city}</strong>
              </p>
              <p className="card-text detail">{hotel.detail}</p>
              <p className="card-text">

                {hotel.rooms.length}
                {' '}
                unreserved room
                available.

                {' '}

              </p>
              <Link to={`hotel/${hotel.id}`} state={hotel} className="btn btn-primary lk-btn-green">
                See all rooms
              </Link>
            </div>
          </div>
        ))}

      </Carousel>
      ;
    </div>
  );
};

export default Hotel;
