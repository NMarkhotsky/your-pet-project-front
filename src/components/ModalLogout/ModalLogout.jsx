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
import { t } from 'i18next';

export const ModalLogout = ({ handleModal, handleLogout }) => {
  return (
    <Modal>
      <Title>{t('modal_logout_title')}</Title>
      <BtnWrapper>
        <CancelButton onClick={handleModal}>
          <ButtonText>{t('other_cancel')}</ButtonText>
        </CancelButton>
        <YesButton onClick={handleLogout}>
          <ButtonText>{t('other_yes')}</ButtonText>
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
  handleLogout: PropTypes.func.isRequired,
};
