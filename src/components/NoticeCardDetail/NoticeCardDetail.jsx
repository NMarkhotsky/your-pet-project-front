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
import { getNoticeById } from '../../services/NoticesApi';
import { ModalApproveAction } from '../../shared/components/ModalApproveAction/ModalApproveAction';
import { RequestError } from '../../shared/components/RequestError/RequestError';
import { Loader } from '../../shared/components/Loader/Loader';

export const NoticeCardDetail = ({
  item,
  toggleModal,
  isFavorite,
  isSaving,
  handleAddInFavorite,
}) => {
  const [card, setCard] = useState({});
  const [error, setError] = useState(false);
  const [revision, setRevision] = useState(0);
  let formattedBirthday;
  useEffect(() => {
    const controller = new AbortController();
    setError(false);
    getNoticeById(item.id, { signal: controller.signal })
      .then(response => { if (!controller.signal.aborted) setCard({ ...response.data.notice, noticeType: item.noticeType }); })
      .catch(() => { if (!controller.signal.aborted) setError(true); });
    return () => controller.abort();
  }, [item.id, item.noticeType, revision]);

  if (card.birthday) {
    const birthday = card.birthday;

    formattedBirthday = birthday.split('-').reverse().join('.');
  }

  return (
    <>
      <ModalApproveAction onClose={toggleModal}>
        <ModalCard>
          {error ? <RequestError onRetry={() => setRevision(value => value + 1)} /> : !card._id ? <Loader /> : <>
          <ModalCardInfo>
            <ModalCardImage>
              <Image src={card.photoURL} alt="pet" loading="lazy"></Image>
              <SpanStatus>{t(`category_${card.noticeType}`)}</SpanStatus>
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
                    <TdValue>{t(`notices_filterBnt_filters_${card.sex}`)}</TdValue>
                  </Tr>
                  {card.price != null && <Tr>
                    <TdName>{t('other_price')}:</TdName>
                    <TdValue>{new Intl.NumberFormat(undefined, { style: 'currency', currency: 'UAH', maximumFractionDigits: 0 }).format(card.price)}</TdValue>
                  </Tr>}
                  {card.ownerEmail && <Tr>
                    <TdName>{t('other_mail')}:</TdName>
                    <TdValue><Link href={`mailto:${card.ownerEmail}`}>{card.ownerEmail}</Link></TdValue>
                  </Tr>}
                  {card.ownerPhone && <Tr>
                    <TdName>{t('other_phone')}:</TdName>
                    <TdValue><Link href={`tel:${card.ownerPhone}`}>{card.ownerPhone}</Link></TdValue>
                  </Tr>}
                </Tbody>
              </Table>
            </ModalCardText>
          </ModalCardInfo>
          <Text>
            <Comments>{t('other_comments')}:</Comments> {card.comments}
          </Text>
          <ButtonsWrapper>
            <ButtonAddFavorite
              disabled={isSaving}
              onClick={handleAddInFavorite}
              style={{
                color: !isFavorite ? '#FEF9F9' : '#54ADFF',
                backgroundColor: isFavorite ? '#FEF9F9' : '#54ADFF',
                borderColor: isFavorite ? '#54ADFF' : undefined,
              }}
            >
              <ButtonTextAdd>
                {!isFavorite
                  ? t('notices_cardInfoDetails_addToBtn')
                  : t('notices_cardInfoDetails_removeFrom')}
              </ButtonTextAdd>
              {!isFavorite ? (
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
            {(card.ownerPhone || card.ownerEmail) && <ButtonLinkContact href={card.ownerPhone ? `tel:${card.ownerPhone}` : `mailto:${card.ownerEmail}`}>
              {t('other_contact')}
            </ButtonLinkContact>}
          </ButtonsWrapper>
          </>}
        </ModalCard>
      </ModalApproveAction>
    </>
  );
};

NoticeCardDetail.propTypes = {
  item: PropTypes.shape({
    id: PropTypes.string.isRequired,
    noticeType: PropTypes.string.isRequired,
  }).isRequired,
  toggleModal: PropTypes.func,
  isFavorite: PropTypes.bool,
  isSaving: PropTypes.bool,
  handleAddInFavorite: PropTypes.func,
};
