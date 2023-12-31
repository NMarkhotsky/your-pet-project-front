import { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { logout } from '../../redux/auth/operations';
import { useAuth } from '../../hooks/useAuth/useAuth';
import { Icon } from '../Icon/Icon';
import { NavLink, UserMenuBox, UserMenuButton } from './UserMenu.styled';
import { ModalLogout } from '../ModalLogout/ModalLogout';
import { ModalApproveAction } from '../../shared/components/ModalApproveAction/ModalApproveAction';
import { ThemeSwitcher } from '../../shared/components/ThemeSwitcher/ThemeSwitcher';
import { t } from 'i18next';
import LanguageSwitcher from '../LanguageSwitcher/LanguageSwitcher';

export const UserMenu = ({ open, handleToggleBurger }) => {
  const dispatch = useDispatch();
  const { user } = useAuth();
  const [isDesktop, setIsDesktop] = useState(false);
  const [showModal, setShowModal] = useState(false);

  const openModal = () => {
    setShowModal(true);
    handleToggleBurger();
  };

  const closeModal = () => {
    setShowModal(false);
  };

  useEffect(() => {
    const checkScreenSize = () => {
      setIsDesktop(window.innerWidth >= 1280);
    };

    checkScreenSize();

    window.addEventListener('resize', checkScreenSize);

    return () => {
      window.removeEventListener('resize', checkScreenSize);
    };
  }, []);

  return (
    <>
      {isDesktop ? (
        <UserMenuBox>
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
      ) : (
        <UserMenuBox>
          <LanguageSwitcher />
          <ThemeSwitcher />
          {open ? (
            <UserMenuButton type="button" onClick={openModal}>
              {t('auth_logoutBtn')}
              <Icon
                iconName={'icon-logout'}
                width={'24px'}
                height={'24px'}
                stroke={'#FEF9F9'}
              />
            </UserMenuButton>
          ) : (
            <NavLink to="/user">
              <Icon
                iconName={'icon-user'}
                width={'24px'}
                height={'24px'}
                fill={'#FFC107'}
              />
              {user.name}
            </NavLink>
          )}
        </UserMenuBox>
      )}
      {showModal && (
        <ModalApproveAction onClose={closeModal}>
          <ModalLogout
            handleModal={closeModal}
            handleLogout={() => dispatch(logout())}
          />
        </ModalApproveAction>
      )}
    </>
  );
};

UserMenu.propTypes = {
  open: PropTypes.bool.isRequired,
  handleToggleBurger: PropTypes.func,
};
