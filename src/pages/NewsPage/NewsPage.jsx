import NewsList from './NewsList/NewsList';
import allArticles from '../../temp/allArticles.json';
import { Title } from './NewsPage.styled';
import { SearchInput } from '../../shared/components/SearchInput/SearchInput';

function NewsPage() {

    return (
      <>
        <Title>News</Title>
        <SearchInput />
        <NewsList allArticles={allArticles.article} />
      </>
    )
}

export default NewsPage;
