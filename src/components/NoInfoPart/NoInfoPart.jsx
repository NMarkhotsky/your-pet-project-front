import { Trans } from 'react-i18next';
import image from '../../assets/images/imageUserPage/catImg.png';
import { ContainerImage, Title, Img } from './NoInfoPart.styled';

export const NoInfoPart = () => {
  return (
    <ContainerImage>
      <Title>
        <Trans i18nKey="sorry_message">
          <p>Sorry...</p> There is no information on your request &#58;&#40;{' '}
        </Trans>
      </Title>
      <Img src={image} alt="Cat with tongue" />
    </ContainerImage>
  );
};
