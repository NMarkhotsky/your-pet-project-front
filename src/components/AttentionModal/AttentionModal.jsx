import PropTypes from 'prop-types';

import { ModalApproveAction } from '../../shared/components/ModalApproveAction/ModalApproveAction';

import { Icon } from '../Icon/Icon';
import {
  LinkLogStyled,
  Span,
  LinkRegStyled,
} from '../Header/NavRegAndLog/NavRegAndLog.styled';
import { Modal, Title, Text } from './AttentionModal.styled';
import { BtnWrapper } from '../../shared/sharedModalStyles/sharedModalStyles.styled';

export const AttentionModal = ({ onClose }) => {
  return (
    <ModalApproveAction onClose={onClose}>
      <Modal>
        <Title>Attention</Title>
        <Text>
          We would like to remind you that certain functionality is available
          only to authorized users.If you have an account, please log in with
          your credentials. If you do not already have an account, you must
          register to access these features.
        </Text>
        <BtnWrapper>
          <LinkLogStyled to="/login">
            Log <Span>in</Span>
            <Icon
              iconName={'icon-pawprint'}
              width={'24px'}
              height={'24px'}
              fill={'#FEF9F9'}
            />
          </LinkLogStyled>
          <LinkRegStyled to="/register">Registration</LinkRegStyled>
        </BtnWrapper>
      </Modal>
    </ModalApproveAction>
  );
};

AttentionModal.propTypes = {
  onClose: PropTypes.func.isRequired,
};
