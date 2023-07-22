import {
  ContainerList,
  TopPart,
  ListTitle,
  PetsCardList,
  Button,
} from './PetsList.styled';
import { CardPetItem } from '../CardPetItem/CardPetItem';
import pets from '../../temp/pets.json';
import { Icon } from '../Icon/Icon';

export const PetsList = () => {
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
      <PetsCardList>
        {pets.pets.map(card => (
          <CardPetItem key={card.name} item={card} />
        ))}
      </PetsCardList>
    </ContainerList>
  );
};
