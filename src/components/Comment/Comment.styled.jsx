import styled from 'styled-components';
import { selectTablet } from '../../utils';

const generateBorderColor = ({ mistake }) =>
  mistake === 'true' ? '#F43F5E' : '#54ADFF';

export const Label = styled.label`
  color: ${props => props.theme.colors.black};
  font-family: ${props => props.theme.fonts.main.medium};
  font-size: ${props => props.theme.fontSizes.sm};
  line-height: 1.35;
  display: flex;
  flex-direction: column;
  gap: 4px;
  position: relative;
  @media ${selectTablet} {
    font-size: ${props => props.theme.fontSizes.lg};
    line-height: 1.4;
  }
`;

export const Textarea = styled.textarea`
  color: ${props => props.theme.colors.grey};
  font-family: ${props => props.theme.fonts.main.regular};
  font-size: ${props => props.theme.fontSizes.sm};
  line-height: 1.5;
  padding: 8px 16px;
  border-radius: 20px;
  resize: none;
  width: 100%;
  height: 92px;
  border: 1px solid ${generateBorderColor};

  @media ${selectTablet} {
    height: 108px;
    font-size: ${props => props.theme.fontSizes.md};
  }
`;
