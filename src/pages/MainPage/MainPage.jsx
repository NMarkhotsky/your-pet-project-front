import {
  ContainerMainPage,
  TextMainPage,
  ImageMainPage,
} from './MainPage.styled';
import { BackgroundWrapper } from '../../shared/components/BackgroundWrapper/BackgroundWrapper';

import mobile1x from '../../assets/images/imageMainPage/mobile/mp-mobile1x.webp';
import mobile2x from '../../assets/images/imageMainPage/mobile/mp-mobile2x.webp';
import tablet1x from '../../assets/images/imageMainPage/tablet/mp-tablet1x.webp';
import tablet2x from '../../assets/images/imageMainPage/tablet/mp-tablet2x.webp';
import desktop1x from '../../assets/images/imageMainPage/desktop/mp-desktop1x.webp';
import desktop2x from '../../assets/images/imageMainPage/desktop/mp-desktop2x.webp';
import { t } from 'i18next';

function MainPage() {
  return (
    <>
      <BackgroundWrapper />
      <ContainerMainPage>
        <TextMainPage>{t('main_hero_title')}</TextMainPage>
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
