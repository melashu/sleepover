import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import PropTypes from 'prop-types';
import { authenticated } from '../Redux/users/users';

const Protected = ({ children }) => {
  const loginstatus = useSelector(authenticated);
  if (!loginstatus) {
    return <Navigate to="/login" replace />;
  }
  return children;
};

Protected.propTypes = {
  children: PropTypes.element.isRequired,
};
export default Protected;
