import { Link } from 'react-router-dom';
import './footer.scss';

const Footer = () => (
  <footer className="fluid-container bg-light text-dark p-4">
    <div className="row col-12">
      <div className="col-4" />
      <div className="col-4 text-center">
        <h3>Designed By</h3>
        <Link to="https://github.com/melashu">Melashu Amare</Link>
        {' '}
        |
        {' '}
        <Link to="https://github.com/AbigiyaTY">Abigiya Tadesse</Link>
        {' '}
        |
        {' '}
        <Link to="https://github.com/kusiLaw">Lawrence Addai Kusi</Link>
        {' '}
        |
        {' '}
        <Link to="https://github.com/Moathal">
          Moathal Sabah Mousa Alkhafaji
        </Link>
        {' '}
        |
        {' '}
        <Link to="https://github.com/iambenkis">Ben Kisenge</Link>
        <hr />
        <i> Copyright &copy; 2023, Sleep Over</i>
      </div>
      <div className="col-4" />
    </div>
  </footer>
);

export default Footer;
