/* eslint-disable react/prop-types */
import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';
// import { t } from 'i18next';
import { Icon } from '../Icon/Icon';
import {
  Item,
  ContainerPetInfo,
  Image,
  ContainerPetStatus,
  TextStatus,
  ContainerButton,
  Button,
  ListPetInfo,
  ItemPetInfo,
  SpanPetText,
  TextPetName,
} from './NoticeCard.styled';
// import { convertToYears } from '../../utils/convertToYears';
import { truncateText } from '../../utils/truncateText';
import { Btn } from '../../shared/components/Button/Btn';
import { NoticeCardDetail } from '../NoticeCardDetail/NoticeCardDetail';
import { useAuth } from '../../hooks/useAuth/useAuth';
import {
  deleteNotice,
  getNoticeById,
  updateNotice,
} from '../../services/NoticesApi';
// import { errorMessage } from '../../utils/messages';
import { ModalApproveAction } from '../../shared/components/ModalApproveAction/ModalApproveAction';
import { ModalConfirmDelete } from '../ModalConfirmDelete/ModalConfirmDelete';
import { AttentionModal } from '../AttentionModal/AttentionModal';
// import { errorMessage } from '../../utils/messages';
// import { updateNotice } from '../../services/NoticesApi';

export const NoticeCard = ({ item }) => {
  const [showModal, setShowModal] = useState(false);
  const [showModalDelete, setShowModalDelete] = useState(false);
  const [showAttentionModal, setShowAttentionModal] = useState(false);
  const [card, setCard] = useState({});
  const { user } = useAuth();

  console.log('user -->', user);

  const toggleModal = () => {
    setShowModal(prevState => !prevState);
  };

  const openModalDelete = () => {
    setShowModalDelete(true);
  };

  const closeModalDelete = () => {
    setShowModalDelete(false);
  };

  const closeAttentionModal = () => {
    setShowAttentionModal(false);
  };

  const handleCardById = async id => {
    const response = await getNoticeById(id);
    setCard(response.data.notice);
  };

  useEffect(() => {
    handleCardById(item.id);
  }, [item.id]);

  useEffect(() => {
    if (Object.keys(card).length === 0) {
      return;
    }
  });

  const handleAddInFavorite = async () => {
    if (user.name === null && user.email === null) {
      setShowAttentionModal(true);
    }
    console.log('item -->', item);
    const response = await updateNotice(item.id);

    setCard(response.data.notice);
  };

  const handleDeleteFromFavorite = async id => {
    console.log('card ==>', card);
    if (user.email === card.ownerEmail) {
      await deleteNotice(id);
      setCard(prevPets => prevPets.filter(card => card.id !== id));
    }
  };

  return (
    <>
      <Item key={item.id}>
        <ContainerPetInfo>
          <Image src={item.photoURL} alt="pet" loading="lazy"></Image>
          <ContainerPetStatus>
            <TextStatus>{item.noticeType}</TextStatus>
            <ContainerButton>
              <Button
                onClick={handleAddInFavorite}
                aria-label="add to favorites"
              >
                {!card.isFavorite ? (
                  <Icon
                    iconName={'icon-heart'}
                    width={'24px'}
                    height={'24px'}
                    stroke={'#54ADFF'}
                  />
                ) : (
                  <Icon
                    iconName={'icon-heart-full'}
                    width={'24px'}
                    height={'24px'}
                    fill={'#54ADFF'}
                  />
                )}
              </Button>
              {user.name !== null && (
                <Button
                  onClick={openModalDelete}
                  aria-label="delete from favorites"
                >
                  <Icon
                    iconName={'icon-trash'}
                    width={'24px'}
                    height={'24px'}
                    stroke={'#54ADFF'}
                    fill={'#54ADFF'}
                  />
                </Button>
              )}
            </ContainerButton>
          </ContainerPetStatus>
          <ListPetInfo>
            <ItemPetInfo>
              <Icon iconName={'icon-location'} />
              <SpanPetText>{truncateText(item.location)}</SpanPetText>
            </ItemPetInfo>
            <ItemPetInfo>
              <Icon iconName={'icon-clock'} />
              <SpanPetText>{item.age}</SpanPetText>
            </ItemPetInfo>
            <ItemPetInfo>
              <Icon
                iconName={item.sex === 'female' ? 'icon-female' : 'icon-male'}
              />
              <SpanPetText>{item.sex}</SpanPetText>
            </ItemPetInfo>
          </ListPetInfo>
        </ContainerPetInfo>

        <TextPetName>{item.title}</TextPetName>

        <Btn onClick={toggleModal}>Learn more</Btn>
        {showModalDelete && (
          <div>
            <ModalApproveAction onClose={closeModalDelete}>
              <ModalConfirmDelete
                title={'Delete a notice?'}
                name={item.title}
                handleModal={closeModalDelete}
                handleDelete={() => handleDeleteFromFavorite(item.id)}
              />
            </ModalApproveAction>
          </div>
        )}
      </Item>
      {showModal && <NoticeCardDetail item={item} toggleModal={toggleModal} />}

      {showAttentionModal && (
        <div>
          <AttentionModal onClose={closeAttentionModal} />
        </div>
      )}
    </>
  );
};

NoticeCard.propTypes = {
  props: PropTypes.object,
};
