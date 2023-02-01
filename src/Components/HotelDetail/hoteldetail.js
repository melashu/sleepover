import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

const Hoteldetail = () => {
  const { state } = useLocation();
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
    <div>
      <h2 className="me-title">
        Available Rooms inside
        {state.name}
        {' '}
        Hotel
      </h2>
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
        removeArrowOnDeviceType={['tablet', 'mobile']}
        itemClass="carousel-item-padding-40-px"
      >
        {state.rooms.map((room) => (
          <div className="card" key={room.id}>
            <img
              src={room.photo.url}
              className="card-img-top"
              alt={room.hotel.name}
            />
            <div className="card-body text-center">
              <h2 className="me-card-title">
                Room Number
                {' '}
                <strong>{room.room_no}</strong>
              </h2>
              <p className="card-text">
                Number of bed
                {' '}
                <strong>{room.number_of_bed}</strong>
              </p>
              <p className="card-text">
                Prices
                {' '}
                <strong>
                  {room.prices}
                  {' '}
                  $
                </strong>
                {' '}
              </p>
              <Link to="detail" className="btn btn-primary">
                See Detail
              </Link>
            </div>
          </div>
        ))}
      </Carousel>
      ;
    </div>
  );
};

export default Hoteldetail;
