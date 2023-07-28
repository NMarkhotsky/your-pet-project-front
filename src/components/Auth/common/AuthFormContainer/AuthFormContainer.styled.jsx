import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import {
  selectPhone,
  selectTablet,
} from '../../../../utils/selectMediaRequests';

export const StyledContainer = styled.div`
  margin: 80px auto 15px auto;
  padding: 40px 12px;
  width: 100%;
  background-color: ${props => props.theme.colors.bgColorAuth};
  background-color: #ffffff7a;
  border-radius: 40px;
  box-shadow: ${props => props.theme.boxShadow.main};

  @media ${selectPhone} {
    width: 280px;
  }

  @media ${selectTablet} {
    width: 608px;
    padding: 60px 75px;
  }
`;

export const FormTitle = styled.h1`
  margin-bottom: 20px;
  color: ${props => props.theme.colors.text};
  text-align: center;
  font-family: ${props => props.theme.fonts.main.medium};
  font-size: ${props => props.theme.fontSizes.xl};
  line-height: normal;
  letter-spacing: 1.44px;

  @media ${selectTablet} {
    font-size: 36px;
    margin-bottom: 40px;
  }
`;

export const FormText = styled.p`
  text-align: center;
  font-size: ${props => props.theme.fontSizes.xs};
  letter-spacing: 0.48px;
`;

export const FormLink = styled(NavLink)`
  color: ${props => props.theme.colors.blue};
  text-decoration: underline;
  text-decoration-skip-ink: none;
`;
