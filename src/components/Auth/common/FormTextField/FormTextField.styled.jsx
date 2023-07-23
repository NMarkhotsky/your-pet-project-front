import styled from 'styled-components';

export const FormLabel = styled.label`
  position: relative;
`;

export const FormInput = styled.input`
  margin-bottom: 32px;
  padding: 12px 16px;
  width: 100%;
  position: relative;
  align-items: center;
  gap: 10px;
  border-radius: 40px;
  border-color: ${props =>
    props.$invalid
      ? props.theme.colors.red
      : props.$valid
      ? props.theme.colors.green
      : props.theme.colors.blue};
  border-width: 1px;
  border-style: solid;
  outline: none;
  color: ${props => props.theme.colors.gray};
  font-size: ${props => props.theme.fontSizes.md};
  line-height: 150%;
  letter-spacing: 0.64px;

  &:last-of-type {
    margin-bottom: 40px;
  }
`;

const FormMessage = styled.p`
  position: absolute;
  bottom: -34px;
  left: 16px;
`;

export const ErrorMessage = styled(FormMessage)`
  color: ${props => props.theme.colors.red};
`;

export const SuccessMessage = styled(FormMessage)`
  color: ${props => props.theme.colors.green};
`;
