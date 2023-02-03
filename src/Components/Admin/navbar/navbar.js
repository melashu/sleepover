import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import './navbar.scss';

const Navbar = () => {
  const user = useSelector((state) => state.user);
  return (

    <div className="navbar bg-dark text-light">

      <p>
        You Loged as
        {' '}
        <strong>{user.user.username}</strong>
      </p>
      <p>
        {' '}
        <Link to="logout">Logout</Link>
      </p>
    </div>
  );
};

export default Navbar;
