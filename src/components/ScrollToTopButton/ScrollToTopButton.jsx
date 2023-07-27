import ScrollToTop from 'react-scroll-up';
import { ContainerScroll } from './ScrollToTopButton.styled';
import { Icon } from '../Icon/Icon';

const ScrollToTopButton = () => {
  return (
    <div>
      <ScrollToTop showUnder={160}>
        <ContainerScroll>
          <Icon
            iconName={'icon-arrow-left'}
            width={'24px'}
            height={'24px'}
            stroke={'#FFFFFF'}
          />
        </ContainerScroll>
      </ScrollToTop>
    </div>
  );
};

export default ScrollToTopButton;
