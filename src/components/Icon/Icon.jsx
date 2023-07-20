import icons from '../../assets/icons/sprite.svg';

export const Icon = ({ iconName, width, stroke, fill }) => {
  return (
    <svg width={width || '24px'}>
      <use href={`${icons}#${iconName}`} stroke={stroke} fill={fill} />
    </svg>
  );
};

/* 
 Приклад використання компонента іконки
      <Icon
        iconName={'icon-arrow-left'} назву іконки дивитись в src/assets/icons/sprite.svg і порівнювати з назвою на макеті
        width={'24px'}   // якщо розміри 24px то не треба вказувати
        stroke={'#54ADFF'} // колір обводки
        fill={'#54ADFF'} // колір заливки
      />
*/
