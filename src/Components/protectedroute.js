import { useSelector } from 'react-redux';
import { Navigate, useNavigate  } from 'react-router-dom';
import { isAuthenticatedUser } from '../Redux/users/users';

const ProtectedRoute = ({ childern }) => {
    const loginstatus = useSelector(isAuthenticatedUser);
    // const naviage = useNavigate()
  if (!loginstatus) {
    return <Navigate to="/" replace/>
  }
    console.log(childern)
  return childern;
};

export default ProtectedRoute;
