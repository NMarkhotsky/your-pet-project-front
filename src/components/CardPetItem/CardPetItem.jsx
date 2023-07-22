import PropTypes from 'prop-types';
import { ContainerItem, Image, DeleteIcon, Text } from './CardPetItem.styled';
import { Icon } from '../Icon/Icon';

export const CardPetItem = ({ item }) => {
  return (
    <ContainerItem>
      <DeleteIcon>
        <Icon
          iconName={'icon-trash'}
          width={'24px'}
          height={'24px'}
          stroke={'#54ADFF'}
        />
      </DeleteIcon>
      <Image src={item.url} />
      <div>
        <Text>
          <b>Name:</b> {item.name}
        </Text>
        <Text>
          <b>Date of birth:</b> {item.birthday}
        </Text>
        <Text>
          <b>Type:</b> {item.breed}
        </Text>
        <Text>
          <b>Comments:</b> {item.comments}
        </Text>
      </div>
    </ContainerItem>
  );
};

CardPetItem.propTypes = {
  item: PropTypes.shape({
    name: PropTypes.string.isRequired,
    birthday: PropTypes.string.isRequired,
    breed: PropTypes.string.isRequired,
    comments: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
  }).isRequired,
};
