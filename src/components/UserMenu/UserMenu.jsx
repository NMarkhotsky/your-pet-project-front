import { useDispatch } from 'react-redux';
import { logout } from '../../redux/auth/operations';
import { useAuth } from '../../hooks/useAuth/useAuth';
import { Icon } from '../Icon/Icon';
import { NavLink, UserMenuBox, UserMenuButton } from './UserMenu.styled';

export const UserMenu = () => {
  const dispatch = useDispatch();
  const { user } = useAuth();

  return (
    <UserMenuBox>
      <UserMenuButton type="button" onClick={() => dispatch(logout())}>
        Log out
        <Icon
          iconName={'icon-logout'}
          width={'24px'}
          height={'24px'}
          stroke={'#FEF9F9'}
        />
      </UserMenuButton>
      <NavLink to="/user">
        <Icon
          iconName={'icon-user'}
          width={'24px'}
          height={'24px'}
          fill={'#FFC107'}
        />
        {user.name}
      </NavLink>
    </UserMenuBox>
  );
};
