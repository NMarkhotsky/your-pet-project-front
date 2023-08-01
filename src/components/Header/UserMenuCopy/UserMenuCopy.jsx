import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { logout } from '../../../redux/auth/operations';
import { Icon } from '../../Icon/Icon';
import {
  UserMenuBoxCopy,
  UserMenuButton,
  Wrapper,
} from './UserMenuCopy.styled';
import { useAuth } from '../../../hooks/useAuth/useAuth';
import { UserMenuName } from '../../UserMenu/UserMenu.styled';
import { NavLink } from 'react-router-dom';
import { ModalApproveAction } from '../../../shared/components/ModalApproveAction/ModalApproveAction';
import { ModalLogout } from '../../ModalLogout/ModalLogout';
import { useState } from 'react';
import { ThemeSwitcher } from '../../../shared/components/ThemeSwitcher/ThemeSwitcher';
import { t } from 'i18next';
import LanguageSwitcher from '../../LanguageSwitcher/LanguageSwitcher';

export const UserMenuCopy = ({ handleToggleBurger }) => {
  const dispatch = useDispatch();
  const { user } = useAuth();
  const [showModal, setShowModal] = useState(false);

  const openModal = () => {
    setShowModal(true);
    handleToggleBurger();
  };

  const closeModal = () => {
    setShowModal(false);
  };

  return (
    <UserMenuBoxCopy>
      <Wrapper>
        <LanguageSwitcher />
        <ThemeSwitcher />
        <UserMenuButton type="button" onClick={openModal}>
          {t('auth_logoutBtn')}
          <Icon
            iconName={'icon-logout'}
            width={'24px'}
            height={'24px'}
            stroke={'#FEF9F9'}
          />
        </UserMenuButton>
        <NavLink to="/user" onClick={handleToggleBurger}>
          <UserMenuName>
            <Icon
              iconName={'icon-user'}
              width={'24px'}
              height={'24px'}
              fill={'#FFC107'}
            />

            {user.name}
          </UserMenuName>
        </NavLink>
      </Wrapper>
      {showModal && (
        <ModalApproveAction onClose={closeModal}>
          <ModalLogout
            handleModal={closeModal}
            handleLogout={() => dispatch(logout())}
          />
        </ModalApproveAction>
      )}
    </UserMenuBoxCopy>
  );
};

UserMenuCopy.propTypes = {
  handleToggleBurger: PropTypes.func.isRequired,
};
