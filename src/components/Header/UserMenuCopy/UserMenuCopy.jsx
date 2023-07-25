import { useDispatch } from 'react-redux';
import { logout } from '../../../redux/auth/operations';
import { Icon } from '../../Icon/Icon';
import { UserMenuBoxCopy } from './UserMenuCopy.styled';
import { useAuth } from '../../../hooks/useAuth/useAuth';
import { UserMenuButton, UserMenuName } from '../../UserMenu/UserMenu.styled';

export const UserMenuCopy = () => {
  const dispatch = useDispatch();
  const { user } = useAuth();

  return (
    <UserMenuBoxCopy>
      <UserMenuButton type="button" onClick={() => dispatch(logout())}>
        Log out
        <Icon
          iconName={'icon-logout'}
          width={'24px'}
          height={'24px'}
          stroke={'#FEF9F9'}
        />
      </UserMenuButton>
      <UserMenuName>
        <Icon
          iconName={'icon-user'}
          width={'24px'}
          height={'24px'}
          fill={'#FFC107'}
        />
        {user.name}
      </UserMenuName>
    </UserMenuBoxCopy>
  );
};
