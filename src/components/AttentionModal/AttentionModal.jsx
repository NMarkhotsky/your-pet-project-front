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
import { Trans } from 'react-i18next';
import { t } from 'i18next';

export const AttentionModal = ({ onClose }) => {
  return (
    <ModalApproveAction onClose={onClose}>
      <Modal>
        <Trans i18nKey="modal_attention">
          <Title>Attention</Title>
          <Text>
            We would like to remind you that certain functionality is available
            only to authorized users.If you have an account, please log in with
            your credentials. If you do not already have an account, you must
            register to access these features.
          </Text>
        </Trans>
        <BtnWrapper>
          <LinkLogStyled to="/login">
            <Trans i18nKey="header_nav_loginBtn">
              Log <Span>in</Span>
            </Trans>
            <Icon
              iconName={'icon-pawprint'}
              width={'24px'}
              height={'24px'}
              fill={'#FEF9F9'}
            />
          </LinkLogStyled>
          <LinkRegStyled to="/register">
            {t('header_nav_signupBtn')}
          </LinkRegStyled>
        </BtnWrapper>
      </Modal>
    </ModalApproveAction>
  );
};

AttentionModal.propTypes = {
  onClose: PropTypes.func.isRequired,
};
