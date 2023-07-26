import PropTypes from 'prop-types';
import { ContainerItem, Image, DeleteIcon, Text } from './PetsItem.styled';
import { Icon } from '../Icon/Icon';


export const PetsItem = ({ item, deletePet }) => {

  return (
    <ContainerItem>
      <DeleteIcon onClick={() => deletePet(item._id)}>
        <Icon
          iconName={'icon-trash'}
          width={'24px'}
          height={'24px'}
          stroke={'#54ADFF'}
        />
      </DeleteIcon>
      <Image src={item.photoURL} />
      <div>
        <Text>
          <b>Name:</b> {item.name}
        </Text>
        <Text>
          <b>Date of birth:</b> {item.birthday}
        </Text>
        <Text>
          <b>Type:</b> {item.type}
        </Text>
        <Text>
          <b>Comments:</b> {item.comments}
        </Text>
      </div>
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
