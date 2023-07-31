import styled from 'styled-components';
import { selectTablet } from '../../utils';
import { Link } from 'react-router-dom';

export const ButtonNext = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 12px;
  padding: 8px 28px;
  max-width: 248px;
  color: #fff;
  font-size: 16px;
  font-weight: 700;
  line-height: calc(20 / 16);
  letter-spacing: 0.64px;
  background-color: #54adff;
  border-radius: 40px;
  border: none;
  transition: all 300ms ease;

  &:disabled {
    cursor: no-drop;
    background-color: #cce4fb;
  }

  @media ${selectTablet} {
    flex-basis: 66%;
  }
`;

export const ButtonPrev = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: transparent;
  border: none;
  gap: 12px;
  color: #54adff;
  font-size: 16px;
  font-style: normal;
  font-weight: 700;
  letter-spacing: 0.64px;

  @media ${selectTablet} {
    flex-basis: 33%;
  }
`;

export const ButtonPrevLink = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;
`;
