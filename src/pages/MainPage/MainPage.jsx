import {
  ContainerMainPage,
  TextMainPage,
  ImageMainPage,
} from './MainPage.styled';

import mobile1x from '../../assets/images/imageMainPage/mobile/mp-mobile1x.png';
import mobile2x from '../../assets/images/imageMainPage/mobile/mp-mobile2x.png';
import tablet1x from '../../assets/images/imageMainPage/tablet/mp-tablet1x.png';
import tablet2x from '../../assets/images/imageMainPage/tablet/mp-tablet2x.png';
import desktop1x from '../../assets/images/imageMainPage/desktop/mp-desktop1x.png';
import desktop2x from '../../assets/images/imageMainPage/desktop/mp-desktop2x.png';

function MainPage() {
  return (
    <>
      <ContainerMainPage>
        <TextMainPage>Take good care of your small pets</TextMainPage>
        <picture>
          <source
            srcSet={(mobile1x, mobile2x)}
            media="(max-width: 767px)"
            type="image/png"
            alt="mobile image"
          />
          <source
            srcSet={(tablet1x, tablet2x)}
            media="(min-width: 768px) and (max-width: 1279px)"
            type="image/png"
            alt="tablet image"
          />
          <source
            srcSet={(desktop1x, desktop2x)}
            media="(min-width: 1280px)"
            type="image/png"
            alt="desktop image"
          />
          <ImageMainPage srcSet={desktop1x} alt="puppy" />
        </picture>
      </ContainerMainPage>
    </>
  );
}

export default MainPage;
