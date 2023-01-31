import {
  BedroomParent, HomeOutlined, Hotel, KeyboardArrowDownOutlined, KeyboardArrowUpOutlined,
} from '@mui/icons-material';
import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { getHotel } from '../../../Redux/hotelSlices';
import { getReservedRoom, getUnreservedRoom } from '../../../Redux/reservationSlices';
import './widget.scss';

const Widget = ({ type }) => {
  const hotels = useSelector(getHotel);
  const reserved = useSelector(getReservedRoom);
  const unreserved = useSelector(getUnreservedRoom);
  let card;
  switch (type) {
    case 'hotel':
      card = {
        title: 'All Hotels',
        counter: hotels.length,
        link: '/managehotel',
        percent: 20,
        icon: (
          <Hotel
            className="icon"
            style={{
              color: 'red',
              backgroundColor: 'rgb(241, 171, 171)',
              padding: '5px',
            }}
          />
        ),
      };
      break;
    case 'reserved':
      card = {
        title: 'Reserved Rooms',
        counter: reserved.length,
        link: '/reserved-room',
        icon: (
          <BedroomParent
            className="icon"
            style={{
              color: 'rgb(0, 255, 0)',
              backgroundColor: 'rgba(0, 255, 0,0.3)',
              padding: '5px',
            }}
          />
        ),
      };
      break;
    case 'unreserved':
      card = {
        title: 'Unreserved Room',
        counter: unreserved.length,
        link: '/reserved-room',
        icon: (
          <HomeOutlined
            className="icon"
            style={{
              color: 'rgb(255,255,0)',
              backgroundColor: 'rgba(255,255,0,0.3)',
              padding: '5px',
            }}
          />
        ),
      };
      break;
    case 'room':
      break;
    case 'history':
      break;
    default:
      break;
  }

  return (
    <div className="widgetContainer">
      <div className="left">
        <span className="title">{card.title}</span>
        <span className="counter">
          {card.counter}
        </span>
        <Link to={card.link} className="link">
          See detaill
        </Link>
      </div>
      <div className="right">
        <div className="percent positive">
          {card.counter > 5 ? <KeyboardArrowUpOutlined className="icon" /> : <KeyboardArrowDownOutlined className="icon" style={{ color: 'red' }} /> }
        </div>
        {card.icon}
      </div>
    </div>
  );
};

Widget.propTypes = {
  type: PropTypes.string,
};

Widget.defaultProps = {
  type: '',
};
export default Widget;
