import PropTypes from 'prop-types';
import {
  ContainerList,
  TopPart,
  ListTitle,
  PetsCardList,
  Button,
} from './PetsList.styled';
import { PetsItem } from '../PetsItem/PetsItem';
// import pets from '../../temp/pets.json';
import { Icon } from '../Icon/Icon';
import { NavLink } from 'react-router-dom';
import { useEffect } from 'react';

export const PetsList = ({ pets, onDeleteCardPet }) => {
  // const [pets, setPets]
  console.log(pets);

  useEffect(() => {
    if (pets === [] && !pets) {
      return;
    }
  }, [pets]);

  return (
    <ContainerList>
      <TopPart>
        <ListTitle>My pets:</ListTitle>

        <NavLink to="/add-pet">
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
        </NavLink>
      </TopPart>
      <PetsCardList>
        {pets.map(card => (
          <PetsItem
            key={card._id}
            item={card}
            onDeleteCardPet={onDeleteCardPet}
          />
        ))}
      </PetsCardList>
    </ContainerList>
  );
};

PetsList.propTypes = {
  pets: PropTypes.arrayOf(
    PropTypes.shape({
      _id: PropTypes.string.isRequired,
    })
  ).isRequired,
  onDeleteCardPet: PropTypes.func.isRequired,
};
