import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { selectTablet, selectDesktop } from '../../utils/selectMediaRequests';

export const HeaderStyle = styled.header`
  background-color: '#FEF9F9';
  padding-top: 24px;
  display: flex;
  /* justify-content: space-between; */
  align-items: center;

  @media ${selectTablet} {
    padding-top: 32px;
  }

  @media ${selectDesktop} {
    padding-top: 30px;
  }
`;

export const Image = styled.img`
  display: block;
  width: 116px;

  @media ${selectTablet} {
    width: 162px;
  }
`;

export const Logo = styled(Link)`
  @media (max-width: 767px) {
    margin-right: 120px;
  }
  display: block;
  z-index: 11;
  margin-right: 159px;
`;