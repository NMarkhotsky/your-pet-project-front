import NewsList from './NewsList/NewsList';
import allArticles from '../../temp/allArticles.json';
import SearchForm from './SearchForm/SearchForm';
import { Title } from './NewsPage.styled';

function NewsPage() {
  return (
    <>
      <Title>News</Title>
      <SearchForm />
      <NewsList allArticles={allArticles.article} />
    </>
  )
}

export default NewsPage;
