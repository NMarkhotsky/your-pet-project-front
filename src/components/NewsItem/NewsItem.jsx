import PropTypes from 'prop-types';
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
  const articleDate = new globalThis.Date(date);
  const formatedDate = Number.isFinite(articleDate.getTime())
    ? new Intl.DateTimeFormat(undefined, { dateStyle: 'short' }).format(articleDate)
    : '—';

  return (
    <ItemNews>
      <WrapperImage>
        <ImageNews src={imgUrl} alt={title} loading="lazy" />
      </WrapperImage>
      <Content>
        <div>
          <TitleNews>{title}</TitleNews>
          <TextNews>{text}</TextNews>
        </div>
        <ContainerInfo>
          <Date>{formatedDate}</Date>
          <LinkReadMore href={url} target="_blank" rel="noopener noreferrer">
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
