import { useSelector } from 'react-redux';
import {
  selectUser,
  selectToken,
  selectIsLoggedIn,
  selectIsRefreshing,
  selectIsNewUser,
  selectError,
} from '../../redux/auth/selectors';

export const useAuth = () => {
  const user = useSelector(selectUser);
  const token = useSelector(selectToken);
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const isRefreshing = useSelector(selectIsRefreshing);
  const isNewUser = useSelector(selectIsNewUser);
  const error = useSelector(selectError);

  return {
    user,
    token,
    isLoggedIn,
    isRefreshing,
    isNewUser,
    error,
  };
};

// Використання:
// const { user,
//     token,
//     isLoggedIn,
//     isRefreshing,
//     isNewUser,
//     error } = useAuth();
