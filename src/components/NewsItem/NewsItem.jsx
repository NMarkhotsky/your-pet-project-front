import PropTypes from 'prop-types';
import moment from 'moment';
import {
  ItemNews,
  WrapperImage,
  ImageNews,
  Content,
  TitleNews,
  TextNews,
  ContainerInfo,
  Date,
  LinkReadMore,
} from './NewsItem.styled';
import { t } from 'i18next';

const NewsItem = ({ article }) => {
  const { url = '', text, title, imgUrl, date } = article;
  const formatedDate = moment(date).format('L');

  return (
    <ItemNews>
      <WrapperImage>
        <ImageNews src={imgUrl} alt="news" />
      </WrapperImage>
      <Content>
        <div>
          <TitleNews>{title}</TitleNews>
          <TextNews>{text}</TextNews>
        </div>
        <ContainerInfo>
          <Date>{formatedDate}</Date>
          <LinkReadMore href={url} target="_blank">
            {t('other_readMore')}
          </LinkReadMore>
        </ContainerInfo>
      </Content>
    </ItemNews>
  );
};

NewsItem.propTypes = {
  article: PropTypes.shape({
    url: PropTypes.string,
    text: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    imgUrl: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
  }).isRequired,
};

export default NewsItem;
