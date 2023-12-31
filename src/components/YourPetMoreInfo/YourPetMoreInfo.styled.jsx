import styled from 'styled-components';
import { selectDesktop, selectTablet } from '../../utils';

export const FormYourPetMoreInfo = styled.form`
  height: calc(100% - 120px);
  display: flex;
  flex-direction: column;
  gap: 24px;
  margin-top: 16px;
  max-width: 458px;
  @media ${selectTablet} {
    height: calc(100% - 160px);
    max-width: 702px;
  }

  @media ${selectDesktop} {
    height: calc(100% - 140px);
    max-width: 822px;
  }
`;
