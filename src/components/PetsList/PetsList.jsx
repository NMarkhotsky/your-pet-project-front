import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
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
import image from '../../assets/images/imageUserPage/catImg.png';
import ScrollToTopButton from '../ScrollToTopButton/ScrollToTopButton';
import { getPets, deletePet } from '../../services/PetsApi';

export const PetsList = () => {
  const [pets, setPets] = useState([]);

  const location = useLocation();

  useEffect(() => {
    getPets()
      .then(({ data }) => {
        setPets(data.pets);
      })
      .catch(error => console.log(error));
  }, []);

  useEffect(() => {
    if (pets.length === 0 && !pets) {
      return;
    }
  }, [pets]);

  const handleDeletePet = async id => {
    await deletePet(id);
    setPets(prevPets => prevPets.filter(pet => pet._id !== id));
  };

  return (
    <ContainerList>
      <TopPart>
        <ListTitle>My pets:</ListTitle>

        <Link to="/add-pet" state={{ from: location }}>
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
        </Link>
      </TopPart>
      <PetsCardList>
        {pets.map(card => (
          <PetsItem key={card._id} item={card} deletePet={handleDeletePet} />
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
