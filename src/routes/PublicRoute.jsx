/* eslint-disable react/prop-types */
import { Navigate } from 'react-router-dom';
import { useAuth } from '../hooks/useAuth/useAuth';

const PublicRoute = ({ component: Component, redirectTo = '/' }) => {
  const { isLoggedIn } = useAuth();

  return isLoggedIn ? <Navigate to={redirectTo} /> : Component;
};

export default PublicRoute;
