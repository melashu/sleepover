import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { logout } from '../../../Redux/users/users';
import './navbar.scss';

const Navbar = () => {
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();

  return (
    <div className="navbar bg-dark text-white">
      <p>
        You Loged as
        {' '}
        <strong>{user.user.username}</strong>
      </p>
      <p>
        {' '}
        <Link
          to="/logout"
          onClick={(e) => {
            e.preventDefault();
            dispatch(logout());
          }}
        >
          Logout
        </Link>
      </p>
    </div>
  );
};

export default Navbar;
