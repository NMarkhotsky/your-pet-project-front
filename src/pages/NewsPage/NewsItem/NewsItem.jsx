import PropTypes from 'prop-types';
import { ItemNews, WrapperImage, ImageNews, Content, TitleNews, TextNews, ContainerInfo, Date, LinkReadMore } from './NewsItem.styled';

const NewsItem = ({article}) => {
    const { url = '', text, title, imgUrl, date } = article;

    return (
        <ItemNews>
            <WrapperImage>
                <ImageNews src={imgUrl} alt='news' />
            </WrapperImage>
            <Content>
                <div>
                    <TitleNews>{title}</TitleNews>
                    <TextNews>{text}</TextNews>
                </div>
                <ContainerInfo>
                    <Date>{date}</Date>
                    <LinkReadMore href={url}>Read more</LinkReadMore>
                </ContainerInfo>
            </Content>
        </ItemNews>
    )
}

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
