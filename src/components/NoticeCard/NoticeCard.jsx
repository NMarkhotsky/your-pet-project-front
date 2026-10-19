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
import { errorMessage } from '../../utils/messages';
import { getErrorMessage } from '../../services/api';
import { useRef } from 'react';

export const NoticeCard = ({ item, handleDeleteNotice, onFavoriteChange }) => {
  const [showModal, setShowModal] = useState(false);
  const [showModalDelete, setShowModalDelete] = useState(false);
  const [showAttentionModal, setShowAttentionModal] = useState(false);
  const [isSaving, setIsSaving] = useState(false);
  const saving = useRef(false);
  const [isFavorite, setIsFavorite] = useState(item.isFavorite);

  const { user, isLoggedIn } = useAuth();

  useEffect(() => { setIsFavorite(isLoggedIn && item.isFavorite); }, [isLoggedIn, item.isFavorite]);

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

  const handleAddInFavorite = async () => {
    if (!isLoggedIn) { setShowAttentionModal(true); return; }
    if (saving.current) return;
    saving.current = true;
    setIsSaving(true);
    try {
      const response = await updateNotice(item.id);
      setIsFavorite(response.data.notice.isFavorite);
      onFavoriteChange?.();
    } catch (error) { errorMessage(getErrorMessage(error)); }
    finally { saving.current = false; setIsSaving(false); }
  };

  return (
    <>
      <Item key={item.id}>
        <ContainerPetInfo>
          <Image src={item.photoURL} alt={item.title} loading="lazy"></Image>
          <ContainerPetStatus>
            <TextStatus>{t(`category_${item.noticeType}`)}</TextStatus>
            <ContainerButton>
              <Button
                onClick={handleAddInFavorite}
                aria-label="add to favorites"
                aria-pressed={isFavorite}
                disabled={isSaving}
              >
                {!isFavorite ? (
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
              {user.name !== null && item.isOwn && (
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
              <SpanPetText>{truncateText(item.age)}</SpanPetText>
            </ItemPetInfo>
            <ItemPetInfo>
              <Icon
                iconName={item.sex === 'female' ? 'icon-female' : 'icon-male'}
              />
              <SpanPetText>{t(`notices_filterBnt_filters_${item.sex}`)}</SpanPetText>
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
          <NoticeCardDetail
            item={item}
            isFavorite={isFavorite}
            isSaving={isSaving}
            toggleModal={toggleModal}
            handleAddInFavorite={handleAddInFavorite}
          />
        )}
      </Item>

      {showAttentionModal && <AttentionModal onClose={closeAttentionModal} />}
    </>
  );
};

NoticeCard.propTypes = {
  props: PropTypes.object,
};
