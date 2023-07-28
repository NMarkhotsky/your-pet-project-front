import { Link } from 'react-router-dom';
import styled from 'styled-components';
import {
  selectTablet,
  selectDesktop,
  selectPhone,
} from '../../utils/selectMediaRequests';
import { Icon as IconLogo } from '../Icon/Icon';

export const HeaderStyle = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  margin: 0 auto;
  padding-top: 24px;
  padding-left: 20px;
  padding-right: 20px;

  background-color: ${({ theme }) => theme.colors.bgdColor};

  transition: ${({ theme }) => theme.transitionHover};

  @media ${selectPhone} {
    max-width: 480px;
  }

  @media ${selectTablet} {
    max-width: 768px;

    padding-top: 32px;
    padding-left: 32px;
    padding-right: 32px;
    justify-content: start;
  }

  @media ${selectDesktop} {
    max-width: 1280px;

    padding-top: 30px;
    padding-left: 16px;
    padding-right: 16px;
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

  & > svg {
    fill: ${({ theme }) => theme.colors.logo};
  }
`;
