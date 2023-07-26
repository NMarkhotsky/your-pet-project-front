import PropTypes from 'prop-types';
import {
  ContainerList,
  TopPart,
  ListTitle,
  PetsCardList,
  Button,
  Img,
  Title,
  ContainerImage,
} from './PetsList.styled';
import { PetsItem } from '../PetsItem/PetsItem';
import { Icon } from '../Icon/Icon';
import { NavLink } from 'react-router-dom';
import { useEffect } from 'react';
import image from '../../assets/images/imageUserPage/catImg.png';
import ScrollToTopButton from '../ScrollToTopButton/ScrollToTopButton';

export const PetsList = ({ pets, deletePet }) => {
  useEffect(() => {
    if (pets == [] && !pets) {
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
          <PetsItem key={card._id} item={card} deletePet={deletePet} />
        ))}
      </PetsCardList>
      {pets.length === 0 && (
        <ContainerImage>
          <Title>
            <p>Sorry...</p> You do not have any pets &#58;&#40; <br />
            <span style={{ color: '#FFC107' }}>But you can add them.</span>
          </Title>
          <Img src={image} alt="Cat with tongue" />
        </ContainerImage>
      )}
      <ScrollToTopButton />
    </ContainerList>
  );
};

PetsList.propTypes = {
  pets: PropTypes.arrayOf(
    PropTypes.shape({
      _id: PropTypes.string.isRequired,
    })
  ).isRequired,
  deletePet: PropTypes.func.isRequired,
};
