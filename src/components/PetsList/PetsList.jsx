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
import { t } from 'i18next';
import { Trans } from 'react-i18next';

export const PetsList = () => {
  const [pets, setPets] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const location = useLocation();

  useEffect(() => {
    getPets()
      .then(({ data }) => {
        setIsLoading(true);
        setPets(data.pets);
      })
      .catch(error => {
        setIsLoading(true);
        console.log(error);
      })
      .finally(() => {
        setIsLoading(false);
      });
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
        <ListTitle>{t('user_mypets_title')}:</ListTitle>

        <Link to="/add-pet" state={{ from: location }}>
          <Button type="button">
            {t('user_mypets_addBtn')}
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
      {pets.length === 0 && !isLoading && (
        <ContainerImage>
          <Title>
            <Trans i18nKey="user_mypets_petList">
              <p>Sorry...</p> You do not have any pets &#58;&#40; <br />
              <span style={{ color: '#FFC107' }}>But you can add them.</span>
            </Trans>
          </Title>
          <Img src={image} alt="Cat with tongue" />
        </ContainerImage>
      )}
      <ScrollToTopButton />
    </ContainerList>
  );
};
