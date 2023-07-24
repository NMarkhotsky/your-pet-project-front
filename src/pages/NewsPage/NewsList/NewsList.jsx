import PropTypes from 'prop-types';
import NewsItem from '../NewsItem/NewsItem';
import allArticles from '../../../temp/allArticles.json';
import { List } from './NewsList.styled';

// const PER_PAGE = 6;

const NewsList = () => {

    return (
        <>
                <List>
                    {allArticles.map(article => (
                        <NewsItem key={article._id} article={article} />
                    ))}
                </List>
        </>
    );
};

NewsList.defaultProps = {
    list: [],
};

NewsList.propTypes = {
    list: PropTypes.arrayOf(
        PropTypes.shape({
            url: PropTypes.string,
            text: PropTypes.string.isRequired,
            title: PropTypes.string.isRequired,
            imgUrl: PropTypes.string.isRequired,
            date: PropTypes.string.isRequired,
        }).isRequired
    ),
};

export default NewsList;
