// import PropTypes from 'prop-types';
import {
  ContainerList,
  TopPart,
  ListTitle,
  PetsCardList,
  Button,
} from './PetsList.styled';
import { PetsItem } from '../PetsItem/PetsItem';
import pets from '../../temp/pets.json';
import { Icon } from '../Icon/Icon';

export const PetsList = () => {
  // console.log('petsList===>', petsList);

  return (
    <ContainerList>
      <TopPart>
        <ListTitle>My pets:</ListTitle>

        <Button type="button">
          Add Pet
          <Icon
            iconName={'icon-plus-small'}
            width={'24px'}
            height={'24px'}
            stroke={'#FEF9F9'}
            fill={'#FEF9F9'}
          />
        </Button>
      </TopPart>
      {pets ? (
        <PetsCardList>
          {pets.pets.map(card => (
            <PetsItem key={card.name} item={card} />
          ))}
        </PetsCardList>
      ) : (
        <div>
          <h1>You have not pets in your collection. Please, add your pet(s)</h1>
        </div>
      )}
    </ContainerList>
  );
};

// PetsList.propTypes = {
//   petsList: PropTypes.array(),
// };
