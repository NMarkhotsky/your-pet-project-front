import { useState } from 'react';
import { StyledBurger } from './Burger.styled';
import { Navigation } from '../Navigation/Navigation';
import { Icon } from '../../../components/Icon/Icon';
import { IconBurgerBox } from './Burger.styled';
import { NavRegAndLog } from '../NavRegAndLog/NavRegAndLog';

export const Burger = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <Navigation open={open} />
      <NavRegAndLog />

      <StyledBurger open={open} onClick={() => setOpen(!open)}>
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
