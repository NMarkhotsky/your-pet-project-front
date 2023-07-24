import styled from 'styled-components';
import { selectTablet } from '../../../../utils/selectMediaRequests';

export const FormInputContainer = styled.div`
  margin-bottom: 14px;
  position: relative;

  &:last-of-type {
    margin-bottom: 40px;
  }

  @media ${selectTablet} {
    margin-bottom: 32px;
  }
`;

export const FormInput = styled.input`
  padding: 12px 16px;
  width: 100%;
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
  color: ${props => props.theme.colors.grey};
  font-size: ${props => props.theme.fontSizes.md};
  line-height: 150%;
  letter-spacing: 0.64px;

  &::placeholder {
    color: ${props => props.theme.colors.grey};
  }
`;

const FormMessage = styled.p`
  position: absolute;
  bottom: -9px;
  left: 16px;
  font-size: 8px;

  @media ${selectTablet} {
    font-size: ${props => props.theme.fontSizes.xs};
    bottom: -18px;
  }
`;

export const ErrorMessage = styled(FormMessage)`
  color: ${props => props.theme.colors.red};
`;

export const SuccessMessage = styled(FormMessage)`
  color: ${props => props.theme.colors.green};
`;

export const FormIconContainer = styled.div`
  position: absolute;
  top: 12px;
  right: 16px;
`;

export const FormIconEyeContainer = styled.div`
  position: absolute;
  top: 12px;
  right: ${props => (props.$touched ? '52px' : '16px')};
`;
