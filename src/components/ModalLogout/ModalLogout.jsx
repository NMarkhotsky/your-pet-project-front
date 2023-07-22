// import PropTypes from 'prop-types';
import { Icon } from '../Icon/Icon';

import {
  Modal,
  Title,
  BtnWrapper,
  CancelButton,
  YesButton,
} from './ModalLogout.styled';

export const ModalLogout = ({}) => {
  return (
    <Modal>
      <Title>Already leaving?</Title>
      <BtnWrapper>
        <CancelButton>
          <span>Cancel</span>
        </CancelButton>
        <YesButton>
          <span>Yes</span>
          <Icon
            iconName="icon-logout"
            width="24px"
            height="24px"
            stroke={'#FDF7F2'}
          />
        </YesButton>
        {/* <CancelButton onClick={handleModal}>
          <span>Cancel</span>
        </CancelButton>
        <YesButton onClick={handleLogout}>
          <span>Yes</span>
          <Icon
            iconName="icon-logout"
            width="24px"
            height="24px"
            stroke={'#FDF7F2'}
          />
        </YesButton> */}
      </BtnWrapper>
    </Modal>
  );
};

ModalLogout.propTypes = {
  // handleModal: PropTypes.func.isRequired,
  // handleLogout: PropTypes.func.isRequired,
};
