import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { selectTablet, selectDesktop } from '../../utils/selectMediaRequests';
import { Icon as IconLogo } from '../Icon/Icon';

export const HeaderStyle = styled.header`
  background-color: ${({ theme }) => theme.colors.bgdColor};
  padding-top: 24px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media ${selectTablet} {
    padding-top: 32px;
    justify-content: start;
  }

  @media ${selectDesktop} {
    padding-top: 30px;
  }
`;

export const Image = styled(IconLogo)`
  display: block;
  width: 100%;
  height: 100%;
`;

export const Logo = styled(Link)`
  display: block;
  z-index: 11;

  width: 116px;
  height: 20px;

  @media ${selectTablet} {
    width: 162px;
    height: 28px;
  }
`;
