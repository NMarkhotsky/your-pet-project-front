import styled from 'styled-components';
import { Form, Field } from 'formik';

export const Container = styled.div`
  background-color: #fef9f9;
  /* padding: 16px 62px; */
`;

export const ImageBox = styled.div`
  position: relative;
  border-radius: 40px;
  margin: 0 auto;
  width: 182px;
  height: 182px;
  margin-bottom: 15px;
  background-color: #fef9f9;
`;

export const ImageInputBox = styled.div`
  text-align: center;
  margin-bottom: 26px;
`;

export const FormBox = styled(Form)`
  position: relative;
  width: 395px;
  padding: 20px 24px 16px;
  background-color: #ffffff;
  margin: 0 auto;
  border-radius: 40px;
`;

export const InputBox = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  margin-bottom: 10px;
`;

export const Label = styled.label`
  font-size: 18px;
  font-family: ${props => props.theme.fonts.main.semiBold};
  letter-spacing: 0.72px;
`;

export const Input = styled(Field)`
  /* float: right; */
  min-width: 255px;
  outline: none;
  border-radius: 20px;
  border: 1px solid ${props => props.theme.colors.blue};
  font-size: ${props => props.theme.fontSizes.md};
  letter-spacing: 0.64px;
  padding: 4px 12px;
`;

export const ButtonForm = styled.button`
  display: flex;
  justify-content: center;
  width: 255px;
  border: none;
  padding: 6px 0;
  border-radius: 40px;
  background: ${props => props.theme.colors.blue};
  color: #fef9f9;
  font-size: ${props => props.theme.fontSizes.md};
  font-family: ${props => props.theme.fonts.main.bold};
  letter-spacing: 0.64px;
  margin-left: auto;
`;

export const LogoutBox = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
`;

export const LogoutText = styled.p`
  color: ${props => props.theme.colors.grey};
  font-size: ${props => props.theme.fontSizes.md};
  font-family: ${props => props.theme.fonts.main.medium};
  letter-spacing: 0.64px;
`;

export const EditIcon = styled.span`
  display: block;
  position: absolute;
  /* top: 18; */
  /* right: 18; */
`;
