/* eslint-disable react/prop-types */
import PropTypes from 'prop-types';
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
import { useState } from 'react';
import { useAuth } from '../../hooks/useAuth/useAuth';
// import { errorMessage } from '../../utils/messages';
// import { updateNotice } from '../../services/NoticesApi';

export const NoticeCard = ({ item }) => {
  const [isLearnMore, setIsLearnMore] = useState(false);
  const { user } = useAuth();
  
  console.log("user -->", user)

  console.log("item-->", item)

  const handleLearnMore = () => {
    setIsLearnMore(true);
  };


  // const handleDeleteFromFavorite = () => {

  // }

  return (
    <>
      <Item key={item.id}>
        <ContainerPetInfo>
          <Image src={item.photoURL} alt="pet" loading="lazy"></Image>
          <ContainerPetStatus>
            <TextStatus>{item.noticeType}</TextStatus>
            <ContainerButton>
              <Button aria-label="add to favorites">
                <Icon
                  iconName={'icon-heart'}
                  width={'24px'}
                  height={'24px'}
                  stroke={'#54ADFF'}
                  fill={'#54ADFF'}
                />
              </Button>
              {user.name !== null && (
                <Button aria-label="delete from favorites">
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

        <Btn onClick={handleLearnMore}>Learn more</Btn>
      </Item>
      {isLearnMore && <NoticeCardDetail item={item} />}
    </>
  );
};

NoticeCard.propTypes = {
  props: PropTypes.object,
};
