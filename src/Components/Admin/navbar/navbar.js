import { Link } from 'react-router-dom';
import './navbar.scss';

const Navbar = () => (
  <div className="navbar bg-dark text-white">
    <p>
      You Loged as
      {' '}
      <strong>Meshu</strong>
    </p>
    <p>
      {' '}
      <Link to="logout">Logout</Link>
    </p>
  </div>
);

export default Navbar;
