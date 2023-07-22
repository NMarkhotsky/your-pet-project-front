import { Btn } from '../../shared/Button/Btn';
import { Icon } from '../../components/Icon/Icon';
const NotFoundPage = () => {
  return (
    <Btn>
      To main MainPage
      <Icon
        iconName={'icon-pawprint'} // назву іконки дивитись в src/assets/icons/sprite.svg і порівнювати з назвою на макеті
        width={'24px'} // якщо розміри 24px то не треба вказувати
        height={'24px'} // якщо розміри 24px то не треба вказувати
        // stroke={'#54ADFF'} // колір обводки
        fill={'#54ADFF'} // колір заливки
      />
    </Btn>
  );
};

export default NotFoundPage;
