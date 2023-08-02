import PropTypes from 'prop-types';
import { t } from 'i18next';
import { useState, useEffect } from 'react';
import { Icon } from '../Icon/Icon';
import {
  ModalCard,
  ModalCardInfo,
  ModalCardImage,
  Image,
  SpanStatus,
  ModalCardText,
  Title,
  Table,
  Tbody,
  Tr,
  TdName,
  TdValue,
  Link,
  Text,
  Comments,
  ButtonsWrapper,
  ButtonAddFavorite,
  ButtonTextAdd,
  ButtonLinkContact,
} from './NoticeCardDetail.styled';
import { updateNotice, getNoticeById } from '../../services/NoticesApi';
import { ModalApproveAction } from '../../shared/components/ModalApproveAction/ModalApproveAction';
import { useAuth } from '../../hooks/useAuth/useAuth';
import { AttentionModal } from '../AttentionModal/AttentionModal';

export const NoticeCardDetail = ({ item, toggleModal }) => {
  const [card, setCard] = useState({});
  const [showAttentionModal, setShowAttentionModal] = useState(false);
  const { user } = useAuth();

  const closeAttentionModal = () => {
    setShowAttentionModal(false);
  };

  let formattedBirthday;

  useEffect(() => {
    (async () => {
      const response = await getNoticeById(item.id);

      setCard({...response.data.notice, noticeType: item.noticeType});
    })();
  }, [item]);

  useEffect(() => {
    if (Object.keys(card).length === 0) {
      return;
    }
  });

  const handleAddInFavorite = async () => {
    if (user.name === null && user.email === null) {
      setShowAttentionModal(true);
    }
    const response = await updateNotice(item.id);

    setCard(response.data.notice);
  };

  if (card.birthday) {
    const birthday = card.birthday;

    formattedBirthday = birthday.split('-').reverse().join('.');
  }

  return (
    <>
      <ModalApproveAction onClose={toggleModal}>
        <ModalCard>
          <ModalCardInfo>
            <ModalCardImage>
              <Image src={card.photoURL} alt="pet" loading="lazy"></Image>
              <SpanStatus>{card.noticeType}</SpanStatus>
            </ModalCardImage>
            <ModalCardText>
              <Title>{card.title}</Title>
              <Table>
                <Tbody>
                  <Tr>
                    <TdName>{t('other_name')}: </TdName>
                    <TdValue>{card.name}</TdValue>
                  </Tr>
                  <Tr>
                    <TdName>{t('other_birthday')}: </TdName>
                    <TdValue>{formattedBirthday}</TdValue>
                  </Tr>
                  <Tr>
                    <TdName>{t('other_type')}: </TdName>
                    <TdValue>{card.petType}</TdValue>
                  </Tr>
                  <Tr>
                    <TdName>{t('other_place')}: </TdName>
                    <TdValue>{card.location}</TdValue>
                  </Tr>
                  <Tr>
                    <TdName>{t('notices_cardInfoDetails_theSex')}: </TdName>
                    <TdValue>{card.sex}</TdValue>
                  </Tr>
                  <Tr>
                    <TdName>{t('other_mail')}: </TdName>
                    <TdValue>
                      <Link href={`mailto:${card.ownerEmail}`}>
                        {card.ownerEmail}
                      </Link>
                    </TdValue>
                  </Tr>
                  <Tr>
                    <TdName>{t('other_phone')}: </TdName>
                    <TdValue>
                      <Link href={`tel:${card.ownerPhone}`}>
                        {card.ownerPhone}
                      </Link>
                    </TdValue>
                  </Tr>
                </Tbody>
              </Table>
            </ModalCardText>
          </ModalCardInfo>
          <Text>
            <Comments>{t('other_comments')}:</Comments> {card.comments}
          </Text>
          <ButtonsWrapper>
            <ButtonAddFavorite
              onClick={handleAddInFavorite}
              style={{
                color: !card.isFavorite ? '#FEF9F9' : '#54ADFF',
                backgroundColor: card.isFavorite ? '#FEF9F9' : '#54ADFF',
                borderColor: card.isFavorite && '#54ADFF',
              }}
            >
              <ButtonTextAdd>
                {t('notices_cardInfoDetails_addToBtn')}
              </ButtonTextAdd>
              {!card.isFavorite ? (
                <Icon
                  iconName={'icon-heart'}
                  width={'24px'}
                  height={'24px'}
                  stroke={'#fff'}
                />
              ) : (
                <Icon
                  iconName={'icon-heart-full'}
                  width={'24px'}
                  height={'24px'}
                  fill={'#54ADFF'}
                />
              )}
            </ButtonAddFavorite>
            {card.ownerPhone === undefined ? (
              <ButtonLinkContact href={`mailto:${card.ownerEmail}`}>
                {t('other_contact')}
              </ButtonLinkContact>
            ) : (
              <ButtonLinkContact href={`tel:${card.ownerPhone}`}>
                {t('other_contact')}
              </ButtonLinkContact>
            )}
          </ButtonsWrapper>
        </ModalCard>
      </ModalApproveAction>
      {showAttentionModal && <AttentionModal onClose={closeAttentionModal} />}
    </>
  );
};

NoticeCardDetail.propTypes = {
  item: PropTypes.shape({
    id: PropTypes.string.isRequired,
    noticeType: PropTypes.string.isRequired,
  }).isRequired,
  toggleModal: PropTypes.func,
};
