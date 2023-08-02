import image from '../../assets/images/imageUserPage/catImg.png';
import { ContainerImage, Title, Img } from './NoInfoPart.styled';

export const NoInfoPart = () => {
  return (
    <ContainerImage>
      <Title>
        <p>Sorry...</p> There is no information on your request &#58;&#40;{' '}
      </Title>
      <Img src={image} alt="Cat with tongue" />
    </ContainerImage>
  );
};
