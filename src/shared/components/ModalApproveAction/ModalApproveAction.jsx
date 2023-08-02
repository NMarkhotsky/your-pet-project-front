import { useEffect, useCallback } from 'react';
import { createPortal } from 'react-dom';
import PropTypes from 'prop-types';

import { Icon } from '../../../components/Icon/Icon';
import { Backdrop, Modal, CloseBtn } from './ModalAprroveAction.styled';

const modalRoot = document.querySelector('#modal-root');

export const ModalApproveAction = ({ children, onClose }) => {
  const handleClose = useCallback(
    ({ target, currentTarget, code }) => {
      if (target === currentTarget || code === 'Escape') {
        onClose();
      }
    },
    [onClose]
  );

  useEffect(() => {
    window.addEventListener('keydown', handleClose);

    return () => {
      window.removeEventListener('keydown', handleClose);
    };
  }, [handleClose]);

  return createPortal(
    <Backdrop onClick={handleClose}>
      <Modal>
        <CloseBtn type="button" onClick={onClose} aria-label="close">
          <Icon
            iconName="icon-cross-small"
            width="50px"
            height="50px"
            stroke={'#54ADFF'}
          />
        </CloseBtn>
        {children}
      </Modal>
    </Backdrop>,
    modalRoot
  );
};

ModalApproveAction.propTypes = {
  onClose: PropTypes.func.isRequired,
  children: PropTypes.element.isRequired,
};
