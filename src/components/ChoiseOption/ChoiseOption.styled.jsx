import styled from 'styled-components';
import { selectTablet, selectDesktop } from '../../utils';

export const MyForm = styled.form`
  width: 100%;
  height: calc(100% - 120px);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-top: 24px;

  @media ${selectTablet} {
    max-width: 458px;
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
  gap: 20px;
  margin-top: ${props => (props.page === 'yourPet' ? '44px' : 'auto')};

  @media ${selectTablet} {
    flex-direction: row-reverse;
    justify-content: center;
    gap: 32px;
  }
`;
