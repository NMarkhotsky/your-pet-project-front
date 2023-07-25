import { Image, Logo, HeaderStyle } from './Header.styled';
import { Burger } from './Burger/Burger';

export const Header = () => {
  return (
    <HeaderStyle>
      <Logo to="/">
        <Image iconName="icon-logo" width="100%" height="100%" />
      </Logo>

      <Burger />
    </HeaderStyle>
  );
};
