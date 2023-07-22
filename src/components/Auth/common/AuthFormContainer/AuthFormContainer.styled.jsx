import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const StyledContainer = styled.div`
  margin: 80px auto 0 auto;
  padding: 50px 75px;
  width: 608px;
  background-color: #fff;
  border-radius: 40px;
  box-shadow: ${props => props.theme.boxShadow.main};
`;

export const FormTitle = styled.h1`
  margin-bottom: 40px;
  color: ${props => props.theme.colors.black};
  text-align: center;
  font-family: ${props => props.theme.fonts.main.medium};
  font-size: 36px;
  line-height: normal;
  letter-spacing: 1.44px;
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
