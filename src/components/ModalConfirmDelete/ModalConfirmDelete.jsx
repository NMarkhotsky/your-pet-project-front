import PropTypes from 'prop-types';

import {
  Modal,
  Title,
  Text,
  PetName,
  BtnWrapper,
  CancelButton,
  YesButton,
  ButtonText,
  TrashIcon,
} from './ModalConfirmDelete.styled';

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
          <TrashIcon
            iconName="icon-trash"
            width="24px"
            height="24px"
            stroke={'#FDF7F2'}
          />
        </YesButton>
        {/* <CancelButton onClick={handleModal}>
          <span>Cancel</span>
        </CancelButton>
        <YesButton onClick={handleDelete}>
          <span>Yes</span>
          <Icon
            iconName="icon-trash"
            width="24px"
            height="24px"
            stroke={'#FDF7F2'}
          />
        </YesButton> */}
      </BtnWrapper>
    </Modal>
  );
};

ModalConfirmDelete.propTypes = {
  handleModal: PropTypes.func.isRequired,
  // handleDelete: PropTypes.func.isRequired,
  //   title: PropTypes.string.isRequired,
};
