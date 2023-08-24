import { NavLink } from 'react-router-dom';
import { Icon } from '../../components/Icon/Icon';
import {
  Container,
  Title,
  CatImg,
  Img,
  BtnToMain,
} from './NotFoundPage.styled';
import { BackgroundWrapper } from '../../shared/components/BackgroundWrapper/BackgroundWrapper';
import catdesktop1x from '../../assets/images/NotFoundImages/catdesktop.png';
import catdesktop2x from '../../assets/images/NotFoundImages/catdesktop@2x.png';
import cattablet1x from '../../assets/images/NotFoundImages/cattablet.png';
import cattablet2x from '../../assets/images/NotFoundImages/cattablet@2x.png';
import catmobile1x from '../../assets/images/NotFoundImages/catmobile.png';
import catmobile2x from '../../assets/images/NotFoundImages/catmobile@2x.png';
import { t } from 'i18next';

const NotFoundPage = () => {
  return (
    <>
      <BackgroundWrapper />
      <Container>
        <Title>{t('notFoundPage_title')}&#58;&#40;</Title>
        <CatImg>
          <picture>
            <source
              srcSet={(catdesktop1x, catdesktop2x)}
              media="(min-width: 1280px)"
            />
            <source
              srcSet={(cattablet1x, cattablet2x)}
              media="(min-width: 768px) and (max-width: 1279px)"
            />
            <source
              srcSet={(catmobile1x, catmobile2x)}
              media="(max-width: 767px)"
            />
            <Img src={catdesktop1x} alt="Cat with tongue" />
          </picture>
        </CatImg>
        <NavLink to="/">
          <BtnToMain>
            {t('notFoundPage_btn')}
            <Icon
              iconName={'icon-pawprint'}
              width={'24px'}
              height={'24px'}
              fill={'#54ADFF'}
            />
          </BtnToMain>
        </NavLink>
      </Container>
    </>
  );
};
export default NotFoundPage;
