import PropTypes from 'prop-types';
import icons from '../../assets/icons/sprite.svg';

export const Icon = ({ iconName, width, height, stroke, fill }) => {
  return (
    <svg width={width || '24px'} height={height || '24px'}>
      <use href={`${icons}#${iconName}`} stroke={stroke} fill={fill} />
    </svg>
  );
};

Icon.propTypes = {
  iconName: PropTypes.string.isRequired,
  width: PropTypes.string,
  height: PropTypes.string,
  stroke: PropTypes.string,
  fill: PropTypes.string,
};

/*
 Приклад використання компонента іконки
      <Icon
        iconName={'icon-arrow-left'} // назву іконки дивитись в src/assets/icons/sprite.svg і порівнювати з назвою на макеті
        width={'24px'}   // якщо розміри 24px то не треба вказувати
        height={'24px'} // якщо розміри 24px то не треба вказувати
        stroke={'#54ADFF'} // колір обводки
        fill={'#54ADFF'} // колір заливки
      />
*/
