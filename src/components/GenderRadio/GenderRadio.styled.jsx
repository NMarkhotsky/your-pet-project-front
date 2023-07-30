import styled from 'styled-components';

export const LabelGenderInput = styled.label`
  display: flex;
  align-items: center;
  gap: 12px;
`;

export const GenderInput = styled.input`
  width: 0px;
  height: 0px;
  opacity: 0;
  visibility: hidden;
`;
export const Span = styled.span`
  color: ${props => props.theme.colors.grey};
  font-family: ${props => props.theme.fonts.main.regular};
  font-size: ${props => props.theme.fontSizes.md};
  line-height: 1.5;
  letter-spacing: 0.64px;
`;
