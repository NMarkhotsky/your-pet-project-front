/* eslint-disable react/prop-types */
import PropTypes from 'prop-types';
import { Icon } from '../Icon/Icon';
import {
  List,
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
  ButtonLearnMore,
} from './NoticeCard.styled';
import { convertToYears } from '../../utils/convertToYears';
import { truncateText } from '../../utils/truncateText';

export const NoticeCard = ({ items }) => {
  return (
    <List>
      {items.pets.map(pet => (
        <Item key={pet.name}>
          <ContainerPetInfo>
            <Image src={pet.url} alt="pet" loading="lazy"></Image>
            <ContainerPetStatus>
              <TextStatus>{pet.status}</TextStatus>
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
              </ContainerButton>
            </ContainerPetStatus>
            <ListPetInfo>
              <ItemPetInfo>
                <Icon iconName={'icon-location'} />
                <SpanPetText>{truncateText(pet.place)}</SpanPetText>
              </ItemPetInfo>
              <ItemPetInfo>
                <Icon iconName={'icon-clock'} />
                <SpanPetText>{convertToYears(pet.birthday)}</SpanPetText>
              </ItemPetInfo>
              <ItemPetInfo>
                <Icon
                  iconName={pet.sex === 'Female' ? 'icon-female' : 'icon-male'}
                />
                <SpanPetText>{pet.sex}</SpanPetText>
              </ItemPetInfo>
            </ListPetInfo>
          </ContainerPetInfo>

          <TextPetName>{pet.name}</TextPetName>

          <ButtonLearnMore>
            <span>Learn more</span>
            <Icon
              iconName={'icon-pawprint'}
              width={'24px'}
              height={'24px'}
              stroke={'#54ADFF'}
              fill={'#54ADFF'}
            />
          </ButtonLearnMore>
        </Item>
      ))}
    </List>
  );
};

NoticeCard.propTypes = {
  props: PropTypes.object,
};
