import { Image, Logo, HeaderStyle } from './Header.styled';
import logo from '../../assets/images/logo.png';
import { Burger } from './Burger/Burger';

export const Header = () => {
  return (
    <HeaderStyle>
      <Logo to="/">
        <Image src={logo} />
      </Logo>
      <Burger />
    </HeaderStyle>
  );
};
