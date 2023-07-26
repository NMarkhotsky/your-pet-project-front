import ScrollToTop from 'react-scroll-up';
import { Span } from './ScrollToTopButton.styled';
import { Icon } from '../Icon/Icon';

const ScrollToTopButton = () => {
  return (
    <div>
      <ScrollToTop showUnder={160}>
        <Span>
          <Icon
            iconName={'icon-arrow-left'}
            width={'24px'}
            height={'24px'}
            stroke={'#FFFFFF'}
            // style={{transform: rotate(90deg)}}
          />
        </Span>
      </ScrollToTop>
    </div>
  );
};

export default ScrollToTopButton;
