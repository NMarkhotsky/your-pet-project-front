import styled from 'styled-components';
import { selectTablet, selectDesktop } from '../../utils';

export const MyForm = styled.form`
  height: calc(100% - 120px);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-top: 24px;

  @media ${selectTablet} {
    height: calc(100% - 160px);
    margin-top: 40px;
  }
  @media ${selectDesktop} {
    height: calc(100% - 140px);
  }
`;

export const ChooseOptionWrapper = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 131px;
  gap: 12px;
  margin-bottom: 91px;
  @media ${selectTablet} {
    margin-bottom: 137px;
  }
`;

export const ButtonsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
  margin-top: auto;

  @media ${selectTablet} {
    flex-direction: row-reverse;
  }
`;
