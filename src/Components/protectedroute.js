import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import PropTypes from 'prop-types';
import { isAuthenticatedAdmin } from '../Redux/users/users';

const Protected = ({ children }) => {
  const loginstatus = useSelector(isAuthenticatedAdmin);
  if (!loginstatus) {
    return <Navigate to="/" replace />;
  }
  return children;
};

Protected.propTypes = {
  children: PropTypes.element.isRequired,
};
export default Protected;
