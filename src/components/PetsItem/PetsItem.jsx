import PropTypes from 'prop-types';
import {
  ContainerItem,
  Image,
  DeleteIcon,
  Text,
  InfoContainer,
} from './PetsItem.styled';
import { Icon } from '../Icon/Icon';
import { ModalConfirmDelete } from '../ModalConfirmDelete/ModalConfirmDelete';
import { ModalApproveAction } from '../../shared/components/ModalApproveAction/ModalApproveAction';
import { useState } from 'react';
import { t } from 'i18next';

export const PetsItem = ({ item, deletePet }) => {
  const [showModal, setShowModal] = useState(false);

  let formattedBirthday;

  if (item.birthday) {
    const birthday = item.birthday;

    formattedBirthday = birthday.split('-').reverse().join('.');
  }

  const openModal = () => {
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  return (
    <ContainerItem>
      <Image src={item.photoURL} />
      <InfoContainer>
        <DeleteIcon onClick={openModal}>
          <Icon
            iconName={'icon-trash'}
            width={'24px'}
            height={'24px'}
            stroke={'#54ADFF'}
          />
        </DeleteIcon>
        <Text>
          <b>{t('other_name')}:</b> {item.name}
        </Text>
        <Text>
          <b>{t('user_mypets_petInfo_dateOfBirth')}:</b> {formattedBirthday}
        </Text>
        <Text>
          <b>{t('other_type')}:</b> {item.type}
        </Text>
        <Text>
          <b>{t('other_comments')}:</b> {item.comments}
        </Text>
      </InfoContainer>
      {showModal && (
        <ModalApproveAction onClose={closeModal}>
          <ModalConfirmDelete
            title={t('modal_deletePet_title')}
            name={item.name}
            handleModal={closeModal}
            handleDelete={() => deletePet(item._id)}
          />
        </ModalApproveAction>
      )}
    </ContainerItem>
  );
};

PetsItem.propTypes = {
  item: PropTypes.shape({
    name: PropTypes.string.isRequired,
    birthday: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    comments: PropTypes.string.isRequired,
    photoURL: PropTypes.string.isRequired,
    _id: PropTypes.string.isRequired,
  }).isRequired,
  deletePet: PropTypes.func.isRequired,
};
