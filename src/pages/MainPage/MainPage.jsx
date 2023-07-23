import { Btn } from '../../shared/components/Button/Btn';
import { Icon } from '../../components/Icon/Icon';
import {
  Title,
  TitleBr,
  CatImg,
  Img,
} from '../NotFoundPage/NotFoundPage.styled';

import catdesktop1x from '../../assets/images/NotFoundImages/catdesktop.png';
import catdesktop2x from '../../assets/images/NotFoundImages/catdesktop@2x.png';
import cattablet1x from '../../assets/images/NotFoundImages/cattablet.png';
import cattablet2x from '../../assets/images/NotFoundImages/cattablet@2x.png';
import catmobile1x from '../../assets/images/NotFoundImages/catmobile.png';
import catmobile2x from '../../assets/images/NotFoundImages/catmobile@2x.png';
function MainPage() {
  return (
    <div>
      <Title>
        <TitleBr>Ooops!</TitleBr> This page not found &#58;&#40;
      </Title>

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

      <Btn>
        To main page
        <Icon
          iconName={'icon-pawprint'}
          width={'24px'}
          height={'24px'}
          fill={'#54ADFF'}
        />
      </Btn>
    </div>
  );
}

export default MainPage;
