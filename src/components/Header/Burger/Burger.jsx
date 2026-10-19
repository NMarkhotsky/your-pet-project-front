import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { useBodyScrollLock } from '../../../hooks/useBodyScrollLock';
import { useState } from 'react';
import { StyledBurger } from './Burger.styled';
import { Navigation } from '../Navigation/Navigation';
import { Icon } from '../../../components/Icon/Icon';
import { IconBurgerBox } from './Burger.styled';
import { NavRegAndLog } from '../NavRegAndLog/NavRegAndLog';
import { UserMenu } from '../../UserMenu/UserMenu';
import { useAuth } from '../../../hooks/useAuth/useAuth';

export const Burger = () => {
  const [open, setOpen] = useState(false);

  const { isLoggedIn } = useAuth();

  const handleToggleBurger = () => {
    setOpen(!open);
  };

  const { pathname } = useLocation();
  useBodyScrollLock(open);
  useEffect(() => { setOpen(false); }, [pathname]);
  useEffect(() => {
    const media = window.matchMedia('(min-width: 1280px)');
    const close = () => { if (media.matches) setOpen(false); };
    media.addEventListener('change', close);
    return () => media.removeEventListener('change', close);
  }, []);

  return (
    <>
      <Navigation open={open} handleToggleBurger={handleToggleBurger} />
      {isLoggedIn ? (
        <UserMenu open={open} handleToggleBurger={handleToggleBurger} />
      ) : (
        <NavRegAndLog />
      )}

      <StyledBurger aria-label="Menu" aria-expanded={open} open={open} onClick={handleToggleBurger}>
        {!open ? (
          <IconBurgerBox>
            <Icon
              iconName={'icon-menu-hamburger'}
              width={'24px'}
              height={'24px'}
              stroke={'#FFC107'}
            />
          </IconBurgerBox>
        ) : (
          <IconBurgerBox>
            <Icon
              iconName={'icon-cross-small'}
              width={'24px'}
              height={'24px'}
              stroke={'#FFC107'}
            />
          </IconBurgerBox>
        )}
      </StyledBurger>
    </>
  );
};
