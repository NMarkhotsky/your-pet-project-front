import PropTypes from 'prop-types';

import { Modal, Title, Text, PetName } from './ModalConfirmDelete.styled';
import {
  BtnWrapper,
  CancelButton,
  YesButton,
  ButtonText,
  IconWraper,
  StyledIcon,
} from '../../shared/sharedModalStyles/sharedModalStyles.styled';

export const ModalConfirmDelete = ({
  handleModal,
  title = 'Delete advertisement?',
  name,
}) => {
  return (
    <Modal>
      <Title>{title}</Title>
      <Text>
        Are you sure you want to delete <PetName>“{name}”</PetName>? You can`t
        undo this action.
      </Text>
      <BtnWrapper>
        <CancelButton onClick={handleModal}>
          <ButtonText>Cancel</ButtonText>
        </CancelButton>
        <YesButton>
          <ButtonText>Yes</ButtonText>
          <IconWraper>
            <StyledIcon iconName="icon-trash" stroke={'#FDF7F2'} />
          </IconWraper>
        </YesButton>
        {/* <CancelButton onClick={handleModal}>
          <span>Cancel</span>
        </CancelButton>
        <YesButton onClick={handleDelete}>
          <ButtonText>Yes</ButtonText>
          <IconWraper>
            <StyledIcon iconName="icon-trash" stroke={'#FDF7F2'} />
          </IconWraper>
        </YesButton> */}
      </BtnWrapper>
    </Modal>
  );
};

ModalConfirmDelete.propTypes = {
  handleModal: PropTypes.func.isRequired,
  // handleDelete: PropTypes.func.isRequired,
  // title: PropTypes.string.isRequired,
};
