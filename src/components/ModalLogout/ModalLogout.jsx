import PropTypes from 'prop-types';

import { Modal, Title } from './ModalLogout.styled';

import {
  BtnWrapper,
  CancelButton,
  YesButton,
  ButtonText,
  IconWraper,
  StyledIcon,
} from '../../shared/sharedModalStyles/sharedModalStyles.styled';

export const ModalLogout = ({ handleModal }) => {
  return (
    <Modal>
      <Title>Already leaving?</Title>
      <BtnWrapper>
        <CancelButton onClick={handleModal}>
          <ButtonText>Cancel</ButtonText>
        </CancelButton>
        <YesButton>
          <ButtonText>Yes</ButtonText>
          <IconWraper>
            <StyledIcon iconName="icon-logout" stroke={'#FDF7F2'} />
          </IconWraper>
        </YesButton>

        {/* <YesButton onClick={handleLogout}>
          <ButtonText>Yes</ButtonText>
          <IconWraper>
            <StyledIcon iconName="icon-logout" stroke={'#FDF7F2'} />
          </IconWraper>
        </YesButton> */}
      </BtnWrapper>
    </Modal>
  );
};

ModalLogout.propTypes = {
  handleModal: PropTypes.func.isRequired,
  // handleLogout: PropTypes.func.isRequired,
};
