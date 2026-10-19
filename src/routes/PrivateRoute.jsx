/* eslint-disable react/prop-types */
import { Loader } from '../shared/components/Loader/Loader';
import { Navigate } from 'react-router-dom';
import { useAuth } from '../hooks/useAuth/useAuth';

const PrivateRoute = ({ component: Component, redirectTo = '/' }) => {
  const { isLoggedIn, isRefreshing } = useAuth();
  if (isRefreshing) return <Loader />;
  const shouldRedirect = !isLoggedIn && !isRefreshing;

  return shouldRedirect ? <Navigate to={redirectTo} /> : Component;
};

export default PrivateRoute;
