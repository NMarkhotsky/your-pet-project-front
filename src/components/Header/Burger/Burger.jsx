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

  if (window.innerWidth < 1280) {
    open
      ? (document.body.style.overflow = 'hidden')
      : (document.body.style.overflow = 'visible');
  }

  return (
    <>
      <Navigation open={open} handleToggleBurger={handleToggleBurger} />
      {isLoggedIn ? (
        <UserMenu open={open} handleToggleBurger={handleToggleBurger} />
      ) : (
        <NavRegAndLog />
      )}

      <StyledBurger open={open} onClick={handleToggleBurger}>
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
