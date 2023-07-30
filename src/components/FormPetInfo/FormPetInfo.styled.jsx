import styled from 'styled-components';
import { selectTablet, selectDesktop } from '../../utils';

export const FormPetInfo = styled.form`
  display: flex;
  flex-direction: column;
  gap: 20px;
  height: calc(100% - 140px);
  box-sizing: border-box;
  margin-top: 16px;
  margin-bouttom @media ${selectTablet} {
    margin-top: 20px;
    gap: 24px;
    height: calc(100% - 160px);
  }
  @media ${selectDesktop} {
    margin-top: 16px;
    gap: 24px;
    height: calc(100% - 140px);
  }
`;
