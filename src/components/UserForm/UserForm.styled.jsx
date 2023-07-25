import styled from 'styled-components';
import { Form, Field } from 'formik';
import { selectDesktop, selectTablet } from '../../utils/selectMediaRequests';

export const ContainerForm = styled.div``;

export const FormTitle = styled.h2`
  font-family: ${props => props.theme.fonts.main.medium};
  font-size: ${props => props.theme.fontSizes.lg};
  color: ${props => props.theme.colors.black};
  margin-bottom: 24px;

  @media ${selectTablet} {
    font-size: ${props => props.theme.fontSizes.xxl};
  }
`;

export const ImageBox = styled.div`
  position: relative;
  border-radius: 40px;
  margin: 0 auto;
  width: 182px;
  height: 182px;
  margin-bottom: 15px;
  background-color: ${props => props.theme.colors.bgdColor};
`;

export const ImageInputBox = styled.div`
  text-align: center;
  margin-bottom: 26px;
`;

export const ConfirmText = styled.p`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
`;

export const FormBox = styled(Form)`
  background-color: #ffffff;
  border-radius: 40px;
  position: relative;
  padding: 20px 8px 16px;
  margin-bottom: 46px;

  @media screen and (min-width: 768px) and (max-width: 1279px) {
    display: flex;
    flex-direction: row-reverse;
    justify-content: flex-end;
    gap: 71px;
    margin-bottom: 40px;
    padding: 20px 24px 16px;
  }

  @media ${selectDesktop} {
    box-shadow: ${props => props.theme.boxShadow.main};
    width: 395px;
    padding-left: 24px;
    padding-right: 24px;
  }
`;

export const InputBox = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  margin-bottom: 10px;
`;

export const Label = styled.label`
  font-size: ${props => props.theme.fontSizes.sm};
  font-family: ${props => props.theme.fonts.main.semiBold};
  letter-spacing: 0.56px;

  @media ${selectTablet} {
    font-size: 18px;
    letter-spacing: 0.72px;
  }
`;

export const Input = styled(Field)`
  width: 190px;
  outline: none;
  border-radius: 20px;
  border: 1px solid ${props => props.theme.colors.blue};
  font-size: ${props => props.theme.fontSizes.xs};
  letter-spacing: 0.48px;
  padding: 4px 12px;

  @media ${selectTablet} {
    min-width: 255px;
    font-size: ${props => props.theme.fontSizes.md};
    letter-spacing: 0.64px;

    &:first-child {
      margin-bottom: 90px;
    }
  }

  &:disabled {
    background-color: #ffffff;
  }

  &::placeholder {
    color: #dcdcdc;
  }
`;

export const ButtonForm = styled.button`
  display: flex;
  justify-content: center;
  width: 100%;
  border: none;
  padding: 6px 0;
  border-radius: 40px;
  background: ${props => props.theme.colors.blue};
  color: ${props => props.theme.colors.bgdColor};
  font-size: ${props => props.theme.fontSizes.md};
  font-family: ${props => props.theme.fonts.main.bold};
  letter-spacing: 0.56px;
  margin-left: auto;

  @media ${selectTablet} {
    letter-spacing: 0.64px;
  }
`;

export const LogoutBox = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  cursor: pointer;
`;

export const LogoutText = styled.p`
  color: ${props => props.theme.colors.grey};
  font-size: ${props => props.theme.fontSizes.md};
  font-family: ${props => props.theme.fonts.main.medium};
  letter-spacing: 0.64px;
`;

export const EditIcon = styled.div`
  display: block;
  position: absolute;
  top: 3%;
  right: 3%;
  cursor: pointer;
`;
