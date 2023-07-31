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

// export const NoticeCard = ({ items }) => {
//   return (
//     <List>
//       {items.pets.map(pet => (
//         <Item key={pet.name}>
//           <ContainerPetInfo>
//             <Image src={pet.url} alt="pet" loading="lazy"></Image>
//             <ContainerPetStatus>
//               <TextStatus>{pet.status}</TextStatus>
//               <ContainerButton>
//                 <Button aria-label="add to favorites">
//                   <Icon
//                     iconName={'icon-heart'}
//                     width={'24px'}
//                     height={'24px'}
//                     stroke={'#54ADFF'}
//                     fill={'#54ADFF'}
//                   />
//                 </Button>
//               </ContainerButton>
//             </ContainerPetStatus>
//             <ListPetInfo>
//               <ItemPetInfo>
//                 <Icon iconName={'icon-location'} />
//                 <SpanPetText>{truncateText(pet.place)}</SpanPetText>
//               </ItemPetInfo>
//               <ItemPetInfo>
//                 <Icon iconName={'icon-clock'} />
//                 <SpanPetText>{convertToYears(pet.birthday)}</SpanPetText>
//               </ItemPetInfo>
//               <ItemPetInfo>
//                 <Icon
//                   iconName={pet.sex === 'Female' ? 'icon-female' : 'icon-male'}
//                 />
//                 <SpanPetText>{pet.sex}</SpanPetText>
//               </ItemPetInfo>
//             </ListPetInfo>
//           </ContainerPetInfo>

//           <TextPetName>{pet.name}</TextPetName>

//           <Btn>Learn more</Btn>
//         </Item>
//       ))}
//     </List>
//   );
// };
export const NoticeCard = ({ item }) => {
  const [isLearnMore, setIsLearnMore] = useState(false)


  const handleLearnMore = () => {
    setIsLearnMore(true)
  }
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
                  iconName={item.sex === 'Female' ? 'icon-female' : 'icon-male'}
                />
                <SpanPetText>{item.sex}</SpanPetText>
              </ItemPetInfo>
            </ListPetInfo>
          </ContainerPetInfo>

          <TextPetName>{item.title}</TextPetName>

      <Btn onClick={handleLearnMore}>Learn more</Btn>
      
    </Item>
    {isLearnMore && <NoticeCardDetail item={item}/>}
        </>
  );
};

NoticeCard.propTypes = {
  props: PropTypes.object,
};
