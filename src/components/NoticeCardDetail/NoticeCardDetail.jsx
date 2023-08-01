/* eslint-disable react/prop-types */
import { Icon } from '../Icon/Icon';
import {
  // Modal,
  // ModalLayout,
  // ModalCardWrapper,
  // ButtonClose,
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
  // Button,
  ButtonAddFavorite,
  ButtonTextAdd,
  ButtonLinkContact,
  // ButtonTextContact,
} from './NoticeCardDetail.styled';
import { updateNotice, getNoticeById } from '../../services/NoticesApi';
import { useEffect, useState } from 'react';
// import { changeLanguage } from 'i18next';
import { useAuth } from '../../hooks/useAuth/useAuth';
import { errorMessage } from '../../utils/messages';
import { ModalApproveAction } from '../../shared/components/ModalApproveAction/ModalApproveAction';

export const NoticeCardDetail = ({ item }) => {
  console.log(item.id);
  const [card, setCard] = useState({});
  // const [isCloseModal, setIsCloseModal] = useState(false);
  const { user } = useAuth();
  // const [isFavorite, setIsFavorite] = useState(card.isFavorite);

  // const handleCloseModal = () => {
  //   setIsCloseModal(true);
  // };

  let formattedBirthday;

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

  console.log('Fav-->', card.isFavorite);

  const handleAddInFavorite = async () => {
    if (user.name === null && user.email === null) {
      errorMessage('Sorry, but you are not authorized. Try it!');
    }
    console.log('Click');

    const response = await updateNotice(item.id);

    console.log('response --->', response.data.notice);
    console.log('isFavorite ==>', card.isFavorite);

    setCard(response.data.notice);
    // setCard(prevState => ({
    //   ...response.data.notice,
    //   isFavorite: !prevState.isFavorite,
    // }));
  };

  // useEffect(() => {}, [isFavorite]);

  console.log('card ===>', card.ownerPhone);

  if (card.birthday) {
    const birthday = card.birthday;

    formattedBirthday = birthday.split('-').reverse().join('.');
  }

  return (
    // <>
    //  <Modal style={{ display: isCloseModal ? 'none' : 'block' }}>
    //   <ModalLayout>
    //     <ModalCardWrapper>
    //       <ButtonClose onClick={handleCloseModal}>
    //         <Icon
    //           iconName={'icon-cross'}
    //           width={'24px'}
    //           height={'24px'}
    //           stroke={'#54ADFF'}
    //           fill={'#54ADFF'}
    //         />
    //       </ButtonClose>
    //       <ModalCard>
    //         <ModalCardInfo>
    //           <ModalCardImage>
    //             <Image src={card.photoURL} alt="pet" loading="lazy"></Image>
    //             <SpanStatus>{card.noticeType}</SpanStatus>
    //           </ModalCardImage>
    //           <ModalCardText>
    //             <Title>Cute dog looking for a home</Title>
    //             <Table>
    //               <Tbody>
    //                 <Tr>
    //                   <TdName>Name: </TdName>
    //                   <TdValue>{card.name}</TdValue>
    //                 </Tr>
    //                 <Tr>
    //                   <TdName>Birthday: </TdName>
    //                   <TdValue>{formattedBirthday}</TdValue>
    //                 </Tr>
    //                 <Tr>
    //                   <TdName>Type: </TdName>
    //                   <TdValue>{card.petType}</TdValue>
    //                 </Tr>
    //                 <Tr>
    //                   <TdName>Place: </TdName>
    //                   <TdValue>{card.location}</TdValue>
    //                 </Tr>
    //                 <Tr>
    //                   <TdName>The sex: </TdName>
    //                   <TdValue>{item.sex}</TdValue>
    //                 </Tr>
    //                 <Tr>
    //                   <TdName>Email: </TdName>
    //                   <TdValue>
    //                     <Link href={`mailto:${card.ownerEmail}`}>
    //                       {card.ownerEmail}
    //                     </Link>
    //                   </TdValue>
    //                 </Tr>
    //                 <Tr>
    //                   <TdName>Phone: </TdName>
    //                   <TdValue>
    //                     <Link href={`tel:${card.ownerPhone}`}>
    //                       {card.ownerPhone}
    //                     </Link>
    //                   </TdValue>
    //                 </Tr>
    //               </Tbody>
    //             </Table>
    //           </ModalCardText>
    //         </ModalCardInfo>
    //         <Text>
    //           <Comments>Comments:</Comments> {card.comments}
    //         </Text>
    //         <ButtonsWrapper>
    //           <ButtonAddFavorite
    //             style={{
    //               color: !card.isFavorite ? '#FEF9F9' : '#54ADFF',
    //               backgroundColor: card.isFavorite ? '#FEF9F9' : '#54ADFF',
    //               borderColor: card.isFavorite && '#54ADFF',
    //             }}
    //           >
    //             <ButtonTextAdd onClick={handleAddInFavorite}>
    //               Add to
    //             </ButtonTextAdd>
    //             {!card.isFavorite ? (
    //               <Icon
    //                 iconName={'icon-heart'}
    //                 width={'24px'}
    //                 height={'24px'}
    //                 stroke={'#fff'}
    //               />
    //             ) : (
    //               <Icon
    //                 iconName={'icon-heart-full'}
    //                 width={'24px'}
    //                 height={'24px'}
    //                 fill={'#54ADFF'}
    //               />
    //             )}
    //           </ButtonAddFavorite>
    //           {card.ownerPhone === undefined ? (
    //             <ButtonLinkContact href={`mailto:${card.ownerEmail}`}>
    //               Contact
    //             </ButtonLinkContact>
    //           ) : (
    //             <ButtonLinkContact href={`tel:${card.ownerPhone}`}>
    //               Contact
    //             </ButtonLinkContact>
    //           )}
    //         </ButtonsWrapper>
    //       </ModalCard>
    //     </ModalCardWrapper>
    //   </ModalLayout>
    // </Modal>
    // </>
    <ModalApproveAction >
      {/* <Modal> */}
      {/* <ModalLayout> */}
      {/* <ModalCardWrapper> */}
      {/* <ButtonClose onClick={handleCloseModal}>
            <Icon
              iconName={'icon-cross'}
              width={'24px'}
              height={'24px'}
              stroke={'#54ADFF'}
              fill={'#54ADFF'}
            />
          </ButtonClose> */}
      <ModalCard>
        <ModalCardInfo>
          <ModalCardImage>
            <Image src={card.photoURL} alt="pet" loading="lazy"></Image>
            <SpanStatus>{card.noticeType}</SpanStatus>
          </ModalCardImage>
          <ModalCardText>
            <Title>Cute dog looking for a home</Title>
            <Table>
              <Tbody>
                <Tr>
                  <TdName>Name: </TdName>
                  <TdValue>{card.name}</TdValue>
                </Tr>
                <Tr>
                  <TdName>Birthday: </TdName>
                  <TdValue>{formattedBirthday}</TdValue>
                </Tr>
                <Tr>
                  <TdName>Type: </TdName>
                  <TdValue>{card.petType}</TdValue>
                </Tr>
                <Tr>
                  <TdName>Place: </TdName>
                  <TdValue>{card.location}</TdValue>
                </Tr>
                <Tr>
                  <TdName>The sex: </TdName>
                  <TdValue>{item.sex}</TdValue>
                </Tr>
                <Tr>
                  <TdName>Email: </TdName>
                  <TdValue>
                    <Link href={`mailto:${card.ownerEmail}`}>
                      {card.ownerEmail}
                    </Link>
                  </TdValue>
                </Tr>
                <Tr>
                  <TdName>Phone: </TdName>
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
          <Comments>Comments:</Comments> {card.comments}
        </Text>
        <ButtonsWrapper>
          <ButtonAddFavorite
            style={{
              color: !card.isFavorite ? '#FEF9F9' : '#54ADFF',
              backgroundColor: card.isFavorite ? '#FEF9F9' : '#54ADFF',
              borderColor: card.isFavorite && '#54ADFF',
            }}
          >
            <ButtonTextAdd onClick={handleAddInFavorite}>Add to</ButtonTextAdd>
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
              Contact
            </ButtonLinkContact>
          ) : (
            <ButtonLinkContact href={`tel:${card.ownerPhone}`}>
              Contact
            </ButtonLinkContact>
          )}
        </ButtonsWrapper>
      </ModalCard>
      {/* </ModalCardWrapper> */}
      {/* </ModalLayout> */}
      {/* </Modal> */}
    </ModalApproveAction>
  );
};
