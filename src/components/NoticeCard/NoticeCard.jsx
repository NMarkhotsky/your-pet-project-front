/* eslint-disable react/prop-types */
import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';
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
import { truncateText } from '../../utils/truncateText';
import { Btn } from '../../shared/components/Button/Btn';
import { NoticeCardDetail } from '../NoticeCardDetail/NoticeCardDetail';
import { useAuth } from '../../hooks/useAuth/useAuth';
import { updateNotice } from '../../services/NoticesApi';
import { ModalApproveAction } from '../../shared/components/ModalApproveAction/ModalApproveAction';
import { ModalConfirmDelete } from '../ModalConfirmDelete/ModalConfirmDelete';
import { AttentionModal } from '../AttentionModal/AttentionModal';
import { t } from 'i18next';

export const NoticeCard = ({ item, handleDeleteNotice }) => {
  const [showModal, setShowModal] = useState(false);
  const [showModalDelete, setShowModalDelete] = useState(false);
  const [showAttentionModal, setShowAttentionModal] = useState(false);
  const [card, setCard] = useState({});

  const { user } = useAuth();

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

  useEffect(() => {
    if (Object.keys(card).length === 0) {
      return;
    }
  });

  const handleAddInFavorite = async () => {
    console.log('Click');
    if (user.name === null && user.email === null) {
      setShowAttentionModal(true);
    }

    const response = await updateNotice(item.id);

    setCard(response.data.notice);
  };

  console.log('itemIsFavorite===>', item.isFavorite);
  
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
                {!item.isFavorite ? (
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

        <Btn onClick={toggleModal}>{t('notice_card_learMore_Btn')}</Btn>
        {showModalDelete && (
          <ModalApproveAction onClose={closeModalDelete}>
            <ModalConfirmDelete
              title={t('notice_card_deleteNotice_Btn')}
              name={item.title}
              handleModal={closeModalDelete}
              handleDelete={() => handleDeleteNotice(item.id)}
            />
          </ModalApproveAction>
        )}
        {showModal && (
          <NoticeCardDetail item={item} toggleModal={toggleModal} />
        )}
      </Item>

      {showAttentionModal && <AttentionModal onClose={closeAttentionModal} />}
    </>
  );
};

NoticeCard.propTypes = {
  props: PropTypes.object,
};
