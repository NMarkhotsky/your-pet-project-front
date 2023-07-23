import PropTypes from 'prop-types';

import { ModalApproveAction } from '../../shared/components/ModalApproveAction/ModalApproveAction';
import { PawButton } from '../../shared/components/PawButton/PawButton';

import { Modal, Title, Text } from './ModalCongrats.styled';

export const ModalCongrats = ({ onClose }) => {
  return (
    <ModalApproveAction onClose={onClose}>
      <Modal>
        <Title>Congrats!</Title>
        <Text>Your registration is success</Text>
        <PawButton onClick={onClose} text="Go to profile" />
      </Modal>
    </ModalApproveAction>
  );
};

ModalCongrats.propTypes = {
  onClose: PropTypes.func.isRequired,
};
